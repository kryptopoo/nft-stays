package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NftStayAll(c context.Context, req *types.QueryAllNftStayRequest) (*types.QueryAllNftStayResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nftStays []*types.NftStay
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	nftStayStore := prefix.NewStore(store, types.KeyPrefix(types.NftStayKey))

	pageRes, err := query.Paginate(nftStayStore, req.Pagination, func(key []byte, value []byte) error {
		var nftStay types.NftStay
		if err := k.cdc.UnmarshalBinaryBare(value, &nftStay); err != nil {
			return err
		}

		nftStays = append(nftStays, &nftStay)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNftStayResponse{NftStay: nftStays, Pagination: pageRes}, nil
}

func (k Keeper) NftStay(c context.Context, req *types.QueryGetNftStayRequest) (*types.QueryGetNftStayResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nftStay types.NftStay
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasNftStay(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetNftStayIDBytes(req.Id)), &nftStay)

	return &types.QueryGetNftStayResponse{NftStay: &nftStay}, nil
}
