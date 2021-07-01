package keeper

import (
	"github.com/kryptopoo/marketplace/x/marketplace/types"
)

var _ types.QueryServer = Keeper{}
