package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
	"github.com/stretchr/testify/assert"
)

func createNNftStay(keeper *Keeper, ctx sdk.Context, n int) []types.NftStay {
	items := make([]types.NftStay, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendNftStay(ctx, items[i])
	}
	return items
}

func TestNftStayGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNNftStay(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetNftStay(ctx, item.Id))
	}
}

func TestNftStayExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNNftStay(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasNftStay(ctx, item.Id))
	}
}

func TestNftStayRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNNftStay(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveNftStay(ctx, item.Id)
		assert.False(t, keeper.HasNftStay(ctx, item.Id))
	}
}

func TestNftStayGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNNftStay(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllNftStay(ctx))
}

func TestNftStayCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNNftStay(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetNftStayCount(ctx))
}
