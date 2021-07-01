package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendIbcTransferNftStay{}

func NewMsgSendIbcTransferNftStay(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	sID string,
	nftStorageCID string,
) *MsgSendIbcTransferNftStay {
	return &MsgSendIbcTransferNftStay{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		SID:              sID,
		NftStorageCID:    nftStorageCID,
	}
}

func (msg *MsgSendIbcTransferNftStay) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcTransferNftStay) Type() string {
	return "SendIbcTransferNftStay"
}

func (msg *MsgSendIbcTransferNftStay) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendIbcTransferNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcTransferNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
