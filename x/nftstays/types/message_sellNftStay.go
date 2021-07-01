package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSellNftStay{}

func NewMsgSellNftStay(creator string, sID string, seller string, price int32, onAuction bool, expired int32) *MsgSellNftStay {
	return &MsgSellNftStay{
		Creator:   creator,
		SID:       sID,
		Seller:    seller,
		Price:     price,
		OnAuction: onAuction,
		Expired:   expired,
	}
}

func (msg *MsgSellNftStay) Route() string {
	return RouterKey
}

func (msg *MsgSellNftStay) Type() string {
	return "SellNftStay"
}

func (msg *MsgSellNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSellNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSellNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
