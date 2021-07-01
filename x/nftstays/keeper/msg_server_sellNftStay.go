package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) SellNftStay(goCtx context.Context, msg *types.MsgSellNftStay) (*types.MsgSellNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check existing nft stay
	stayID := GetNftStayIDFromSID(msg.SID)
	if !k.HasNftStay(ctx, stayID) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", stayID))
	}
	if msg.Price <= 0 {
		return nil, sdkerrors.Wrap(types.ErrInvalidPrice, "price should be greater 0")
	}
	if msg.OnAuction && msg.Expired <= 0 {
		return nil, sdkerrors.Wrap(types.ErrRequiredFields, "auction expire is required")
	}

	// check owner
	if msg.Seller != k.GetNftStayOwner(ctx, stayID) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect Seller")
	}

	// check existing selling nft stay
	isExistedSellingStay := false
	markets := k.GetAllMarket(ctx)
	for i := 0; i < len(markets); i++ {
		if markets[i].SID == msg.SID {
			isExistedSellingStay = true
		}
	}
	if isExistedSellingStay {
		return nil, sdkerrors.Wrap(types.ErrExistedData, "Stay is already selling on market")
	}

	// create a market for selling stay
	var market = types.Market{
		Creator:   msg.Seller,
		SID:       msg.SID,
		Price:     msg.Price,
		Status:    types.MarketStatusSelling,
		Seller:    msg.Seller,
		OnAuction: msg.OnAuction,
		Expired:   msg.Expired,
	}

	k.AppendMarket(
		ctx,
		market,
	)

	return &types.MsgSellNftStayResponse{}, nil
}
