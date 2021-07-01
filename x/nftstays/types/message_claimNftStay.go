package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgClaimNftStay{}

func NewMsgClaimNftStay(creator string, marketId string, buyer string) *MsgClaimNftStay {
	return &MsgClaimNftStay{
		Creator:  creator,
		MarketId: marketId,
		Buyer:    buyer,
	}
}

func (msg *MsgClaimNftStay) Route() string {
	return RouterKey
}

func (msg *MsgClaimNftStay) Type() string {
	return "ClaimNftStay"
}

func (msg *MsgClaimNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgClaimNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgClaimNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
