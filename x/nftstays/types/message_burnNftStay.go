package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBurnNftStay{}

func NewMsgBurnNftStay(creator string, sender string, sID string, denom string) *MsgBurnNftStay {
	return &MsgBurnNftStay{
		Creator: creator,
		Sender:  sender,
		SID:     sID,
		Denom:   denom,
	}
}

func (msg *MsgBurnNftStay) Route() string {
	return RouterKey
}

func (msg *MsgBurnNftStay) Type() string {
	return "BurnNftStay"
}

func (msg *MsgBurnNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBurnNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBurnNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
