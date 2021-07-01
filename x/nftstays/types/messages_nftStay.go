package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateNftStay{}

func NewMsgCreateNftStay(creator string, sID string, owner string, name string, description string, image string, tokenUri string) *MsgCreateNftStay {
	return &MsgCreateNftStay{
		Creator:     creator,
		SID:         sID,
		Owner:       owner,
		Name:        name,
		Description: description,
		Image:       image,
		TokenUri:    tokenUri,
	}
}

func (msg *MsgCreateNftStay) Route() string {
	return RouterKey
}

func (msg *MsgCreateNftStay) Type() string {
	return "CreateNftStay"
}

func (msg *MsgCreateNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateNftStay{}

func NewMsgUpdateNftStay(creator string, id uint64, sID string, owner string, name string, description string, image string, tokenUri string) *MsgUpdateNftStay {
	return &MsgUpdateNftStay{
		Id:          id,
		Creator:     creator,
		SID:         sID,
		Owner:       owner,
		Name:        name,
		Description: description,
		Image:       image,
		TokenUri:    tokenUri,
	}
}

func (msg *MsgUpdateNftStay) Route() string {
	return RouterKey
}

func (msg *MsgUpdateNftStay) Type() string {
	return "UpdateNftStay"
}

func (msg *MsgUpdateNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteNftStay{}

func NewMsgDeleteNftStay(creator string, id uint64) *MsgDeleteNftStay {
	return &MsgDeleteNftStay{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteNftStay) Route() string {
	return RouterKey
}

func (msg *MsgDeleteNftStay) Type() string {
	return "DeleteNftStay"
}

func (msg *MsgDeleteNftStay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteNftStay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteNftStay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
