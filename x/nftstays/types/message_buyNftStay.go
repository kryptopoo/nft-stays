package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBuyNftStay{}

func NewMsgBuyNftStay(creator string, marketId string, buyer string) *MsgBuyNftStay {
	return &MsgBuyNftStay{
		Creator:  creator,
		MarketId: marketId,
		Buyer:    buyer,
	}
}

func (msg *MsgBuyNftStay) Route() string {
	return RouterKey
}

func (msg *MsgBuyNftStay) Type() string {
	return "BuyNftStay"
}

func (msg *MsgBuyNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
