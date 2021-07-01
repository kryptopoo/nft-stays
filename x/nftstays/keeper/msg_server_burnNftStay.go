package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) BurnNftStay(goCtx context.Context, msg *types.MsgBurnNftStay) (*types.MsgBurnNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// validation
	stayID := GetNftStayIDFromSID(msg.SID)
	if !k.HasNftStay(ctx, stayID) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Key %d doesn't exist", stayID))
	}

	if msg.Sender != k.GetNftStayOwner(ctx, stayID) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	// burn stay
	k.Keeper.RemoveNftStay(ctx, stayID)

	return &types.MsgBurnNftStayResponse{}, nil
}
