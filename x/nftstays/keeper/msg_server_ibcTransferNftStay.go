package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) SendIbcTransferNftStay(goCtx context.Context, msg *types.MsgSendIbcTransferNftStay) (*types.MsgSendIbcTransferNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcTransferNftStayPacketData

	packet.SID = msg.SID
	packet.NftStorageCID = msg.NftStorageCID
	packet.Creator = msg.Sender

	// Transmit the packet
	err := k.TransmitIbcTransferNftStayPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcTransferNftStayResponse{}, nil
}
