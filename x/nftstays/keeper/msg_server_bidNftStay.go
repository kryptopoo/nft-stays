package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) BidNftStay(goCtx context.Context, msg *types.MsgBidNftStay) (*types.MsgBidNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check existing  market
	marketId, err := strconv.ParseUint(msg.MarketId, 10, 64)
	if err != nil {
		panic(err)
	}
	if !k.Keeper.HasMarket(ctx, marketId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("market %d doesn't exist", marketId))
	}
	market := k.GetMarket(ctx, marketId)

	// get stay info
	stayID := GetNftStayIDFromSID(market.SID)
	if !k.Keeper.HasNftStay(ctx, stayID) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("stay %d doesn't exist", stayID))
	}

	// check higher price

	// update market
	market.Offers = market.Offers + msg.Buyer + "@" + strconv.FormatInt(int64(msg.Price), 10) + ";"
	k.SetMarket(ctx, market)

	return &types.MsgBidNftStayResponse{}, nil
}
