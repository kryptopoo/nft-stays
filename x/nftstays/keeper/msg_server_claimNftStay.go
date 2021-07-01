package keeper

import (
	"context"
	"fmt"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) ClaimNftStay(goCtx context.Context, msg *types.MsgClaimNftStay) (*types.MsgClaimNftStayResponse, error) {
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

	// check offers
	if len(market.Offers) == 0 {
		return nil, sdkerrors.Wrap(types.ErrInvalidOffers, "invalid offers")
	}

	// get stay info
	stayID := GetNftStayIDFromSID(market.SID)
	if !k.Keeper.HasNftStay(ctx, stayID) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("stay %d doesn't exist", stayID))
	}
	stay := k.Keeper.GetNftStay(ctx, stayID)

	// get sender address
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return nil, err
	}
	// get receiver address
	seller, err := sdk.AccAddressFromBech32(market.Seller)
	if err != nil {
		return nil, err
	}

	// get highest offer
	highestOfferer := market.Seller
	highestPrice := int64(0)
	offers := strings.Split(market.Offers, ";")
	for i := 0; i < len(offers); i++ {
		if len(offers[i]) > 0 {
			offerer := strings.Split(offers[i], "@")[0]
			price, _ := strconv.ParseInt(strings.Split(offers[i], "@")[1], 10, 64)
			if price > highestPrice {
				highestPrice = price
				highestOfferer = offerer
			}
		}
	}
	if highestOfferer != msg.Buyer {
		return nil, sdkerrors.Wrap(types.ErrInvalidBuyer, "invalid buyer")
	}

	// send coins
	coins, _ := sdk.ParseCoinsNormalized(strconv.FormatInt(int64(highestPrice), 10) + "token")
	if err := k.Keeper.CoinKeeper.SendCoins(ctx, buyer, seller, coins); err != nil {
		return nil, err
	}

	// update market
	market.Status = types.MarketStatusSold
	k.SetMarket(ctx, market)

	// update stay owner
	stay.Owner = msg.Buyer
	k.SetNftStay(ctx, stay)

	return &types.MsgClaimNftStayResponse{}, nil
}
