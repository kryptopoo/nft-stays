package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgTransferNftStay{}

func NewMsgTransferNftStay(creator string, sender string, recipient string, sID string, denom string) *MsgTransferNftStay {
	return &MsgTransferNftStay{
		Creator:   creator,
		Sender:    sender,
		Recipient: recipient,
		SID:       sID,
		Denom:     denom,
	}
}

func (msg *MsgTransferNftStay) Route() string {
	return RouterKey
}

func (msg *MsgTransferNftStay) Type() string {
	return "TransferNftStay"
}

func (msg *MsgTransferNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTransferNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
