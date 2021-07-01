package nftstays

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kryptopoo/marketplace/x/nftstays/keeper"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the market
	for _, elem := range genState.MarketList {
		k.SetMarket(ctx, *elem)
	}

	// Set market count
	k.SetMarketCount(ctx, genState.MarketCount)

	// Set all the nftStay
	for _, elem := range genState.NftStayList {
		k.SetNftStay(ctx, *elem)
	}

	// Set nftStay count
	k.SetNftStayCount(ctx, genState.NftStayCount)

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all market
	marketList := k.GetAllMarket(ctx)
	for _, elem := range marketList {
		elem := elem
		genesis.MarketList = append(genesis.MarketList, &elem)
	}

	// Set the current count
	genesis.MarketCount = k.GetMarketCount(ctx)

	// Get all nftStay
	nftStayList := k.GetAllNftStay(ctx)
	for _, elem := range nftStayList {
		elem := elem
		genesis.NftStayList = append(genesis.NftStayList, &elem)
	}

	// Set the current count
	genesis.NftStayCount = k.GetNftStayCount(ctx)

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
