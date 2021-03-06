package keeper

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

type TokenMetadata struct {
	Name        string
	Description string
	Address     string
	Image       string
	StayFrom    int
	StayTo      int
	TokenUri    string
}

type IbcTransferMetadata struct {
	SID       string
	Recipient string
	Metadata  TokenMetadata
}

// TransmitIbcTransferNftStayPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitIbcTransferNftStayPacket(
	ctx sdk.Context,
	packetData types.IbcTransferNftStayPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.channelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvIbcTransferNftStayPacket processes packet reception
func (k Keeper) OnRecvIbcTransferNftStayPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcTransferNftStayPacketData) (packetAck types.IbcTransferNftStayPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// get transfer transaction info from ipfs
	uri := "https://" + data.NftStorageCID + ".ipfs.dweb.link"
	transferInfoResp, err := http.Get(uri)
	if err != nil {
		fmt.Printf("The HTTP request failed with error %s\n", err)
		return packetAck, err
	}
	bodyStr, _ := ioutil.ReadAll(transferInfoResp.Body)
	// fmt.Println(string(bodyStr))

	var ibcTransferInfo IbcTransferMetadata
	json.Unmarshal([]byte(string(bodyStr)), &ibcTransferInfo)

	// create Nft Stay to target chain
	var nftStay = types.NftStay{
		Creator:     packet.SourcePort + "-" + packet.SourceChannel + "-" + data.Creator,
		Owner:       ibcTransferInfo.Recipient,
		SID:         ibcTransferInfo.SID,
		Name:        ibcTransferInfo.Metadata.Name,
		Description: ibcTransferInfo.Metadata.Description,
		Image:       ibcTransferInfo.Metadata.Image,
		TokenUri:    ibcTransferInfo.Metadata.TokenUri,
	}

	k.AppendNftStay(
		ctx,
		nftStay,
	)

	packetAck.SID = data.SID

	return packetAck, nil
}

// OnAcknowledgementIbcTransferNftStayPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementIbcTransferNftStayPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcTransferNftStayPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.IbcTransferNftStayPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		// get NFT stay
		stayID := GetNftStayIDFromSID(data.SID)
		if !k.HasNftStay(ctx, stayID) {
			return errors.New(fmt.Sprintf("Key %d doesn't exist", stayID))
		}

		// burn NFT stay
		k.RemoveNftStay(ctx, stayID)

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutIbcTransferNftStayPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutIbcTransferNftStayPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcTransferNftStayPacketData) error {

	// TODO: packet timeout logic

	return nil
}
