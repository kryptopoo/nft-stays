package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgMintNftStay{}

func NewMsgMintNftStay(creator string, sender string, recipient string, sID string, denom string, name string, description string, image string, tokenUri string) *MsgMintNftStay {
	return &MsgMintNftStay{
		Creator:     creator,
		Sender:      sender,
		Recipient:   recipient,
		SID:         sID,
		Denom:       denom,
		Name:        name,
		Description: description,
		Image:       image,
		TokenUri:    tokenUri,
	}
}

func (msg *MsgMintNftStay) Route() string {
	return RouterKey
}

func (msg *MsgMintNftStay) Type() string {
	return "MintNftStay"
}

func (msg *MsgMintNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMintNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
