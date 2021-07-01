package keeper

import (
	"encoding/binary"
	"strconv"
	"strings"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/google/uuid"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

// GetNftStayCount get the total number of nftStay
func (k Keeper) GetNftStayCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayCountKey))
	byteKey := types.KeyPrefix(types.NftStayCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetNftStayCount set the total number of nftStay
func (k Keeper) SetNftStayCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayCountKey))
	byteKey := types.KeyPrefix(types.NftStayCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendNftStay appends a nftStay in the store with a new id and update the count
func (k Keeper) AppendNftStay(
	ctx sdk.Context,
	nftStay types.NftStay,
) uint64 {
	// Create the nftStay
	count := k.GetNftStayCount(ctx)

	// Set the ID of the appended value
	nftStay.Id = GetNftStayIDFromSID(nftStay.SID)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&nftStay)
	store.Set(GetNftStayIDBytes(nftStay.Id), appendedValue)

	// Update nftStay count
	k.SetNftStayCount(ctx, count+1)

	return count
}

// SetNftStay set a specific nftStay in the store
func (k Keeper) SetNftStay(ctx sdk.Context, nftStay types.NftStay) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	b := k.cdc.MustMarshalBinaryBare(&nftStay)
	store.Set(GetNftStayIDBytes(nftStay.Id), b)
}

// GetNftStay returns a nftStay from its id
func (k Keeper) GetNftStay(ctx sdk.Context, id uint64) types.NftStay {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	var nftStay types.NftStay
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetNftStayIDBytes(id)), &nftStay)
	return nftStay
}

// HasNftStay checks if the nftStay exists in the store
func (k Keeper) HasNftStay(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	return store.Has(GetNftStayIDBytes(id))
}

// GetNftStayOwner returns the creator of the nftStay
func (k Keeper) GetNftStayOwner(ctx sdk.Context, id uint64) string {
	return k.GetNftStay(ctx, id).Owner
}

// RemoveNftStay removes a nftStay from the store
func (k Keeper) RemoveNftStay(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	store.Delete(GetNftStayIDBytes(id))
}

// GetAllNftStay returns all nftStay
func (k Keeper) GetAllNftStay(ctx sdk.Context) (list []types.NftStay) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftStayKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.NftStay
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetNftStayIDBytes returns the byte representation of the ID
func GetNftStayIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetNftStayIDFromBytes returns ID in uint64 format from a byte array
func GetNftStayIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func GetNftStayIDFromSID(sID string) uint64 {
	idNum := strings.TrimPrefix(sID, types.NftStaySIDPrefix)
	stayID, err := strconv.ParseUint(idNum, 10, 64)
	if err != nil {
		panic(err)
	}

	return stayID
}

func GenerateStaySID() string {
	newID := uint64(uuid.New().ID())
	sID := types.NftStaySIDPrefix + strconv.FormatUint(newID, 10)
	return sID
}
