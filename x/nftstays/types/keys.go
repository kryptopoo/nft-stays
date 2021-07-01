package types

const (
	// ModuleName defines the module name
	ModuleName = "nftstays"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nftstays"

	// Version defines the current version the IBC module supports
	Version = "nftstays-1"

	// PortID is the default port id that module binds to
	PortID = "nftstays"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("nftstays-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	NftStayKey      = "NftStay-value-"
	NftStayCountKey = "NftStay-count-"

	NftStaySIDPrefix = "SN"
)

const (
	MarketKey           = "Market-value-"
	MarketCountKey      = "Market-count-"
	MarketStatusSelling = "SELLING"
	MarketStatusSold    = "SOLD"
)
