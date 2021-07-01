package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUnsellNftStay{}

func NewMsgUnsellNftStay(creator string, marketId string, seller string) *MsgUnsellNftStay {
	return &MsgUnsellNftStay{
		Creator:  creator,
		MarketId: marketId,
		Seller:   seller,
	}
}

func (msg *MsgUnsellNftStay) Route() string {
	return RouterKey
}

func (msg *MsgUnsellNftStay) Type() string {
	return "UnsellNftStay"
}

func (msg *MsgUnsellNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnsellNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsellNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
