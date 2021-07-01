package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBidNftStay{}

func NewMsgBidNftStay(creator string, marketId string, buyer string, price int32) *MsgBidNftStay {
	return &MsgBidNftStay{
		Creator:  creator,
		MarketId: marketId,
		Buyer:    buyer,
		Price:    price,
	}
}

func (msg *MsgBidNftStay) Route() string {
	return RouterKey
}

func (msg *MsgBidNftStay) Type() string {
	return "BidNftStay"
}

func (msg *MsgBidNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBidNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBidNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
