package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) UnsellNftStay(goCtx context.Context, msg *types.MsgUnsellNftStay) (*types.MsgUnsellNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check owner
	marketId, err := strconv.ParseUint(msg.MarketId, 10, 64)
	if err != nil {
		panic(err)
	}
	if msg.Seller != k.GetMarketOwner(ctx, marketId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect Seller")
	}

	// TODO: validation

	k.RemoveMarket(ctx, marketId)

	return &types.MsgUnsellNftStayResponse{}, nil
}
