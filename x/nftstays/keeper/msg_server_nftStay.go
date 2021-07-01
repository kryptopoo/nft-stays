package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) CreateNftStay(goCtx context.Context, msg *types.MsgCreateNftStay) (*types.MsgCreateNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var nftStay = types.NftStay{
		Creator:     msg.Creator,
		SID:         msg.SID,
		Owner:       msg.Owner,
		Name:        msg.Name,
		Description: msg.Description,
		Image:       msg.Image,
		TokenUri:    msg.TokenUri,
	}

	id := k.AppendNftStay(
		ctx,
		nftStay,
	)

	return &types.MsgCreateNftStayResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateNftStay(goCtx context.Context, msg *types.MsgUpdateNftStay) (*types.MsgUpdateNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var nftStay = types.NftStay{
		Creator:     msg.Creator,
		Id:          msg.Id,
		SID:         msg.SID,
		Owner:       msg.Owner,
		Name:        msg.Name,
		Description: msg.Description,
		Image:       msg.Image,
		TokenUri:    msg.TokenUri,
	}

	// Checks that the element exists
	if !k.HasNftStay(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetNftStayOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetNftStay(ctx, nftStay)

	return &types.MsgUpdateNftStayResponse{}, nil
}

func (k msgServer) DeleteNftStay(goCtx context.Context, msg *types.MsgDeleteNftStay) (*types.MsgDeleteNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasNftStay(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetNftStayOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveNftStay(ctx, msg.Id)

	return &types.MsgDeleteNftStayResponse{}, nil
}
