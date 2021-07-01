package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgSendIbcTransferNftStay{}, "nftstays/SendIbcTransferNftStay", nil)

	cdc.RegisterConcrete(&MsgUnsellNftStay{}, "nftstays/UnsellNftStay", nil)

	cdc.RegisterConcrete(&MsgClaimNftStay{}, "nftstays/ClaimNftStay", nil)

	cdc.RegisterConcrete(&MsgBidNftStay{}, "nftstays/BidNftStay", nil)

	cdc.RegisterConcrete(&MsgBuyNftStay{}, "nftstays/BuyNftStay", nil)

	cdc.RegisterConcrete(&MsgSellNftStay{}, "nftstays/SellNftStay", nil)

	cdc.RegisterConcrete(&MsgCreateMarket{}, "nftstays/CreateMarket", nil)
	cdc.RegisterConcrete(&MsgUpdateMarket{}, "nftstays/UpdateMarket", nil)
	cdc.RegisterConcrete(&MsgDeleteMarket{}, "nftstays/DeleteMarket", nil)

	cdc.RegisterConcrete(&MsgTransferNftStay{}, "nftstays/TransferNftStay", nil)

	cdc.RegisterConcrete(&MsgBurnNftStay{}, "nftstays/BurnNftStay", nil)

	cdc.RegisterConcrete(&MsgMintNftStay{}, "nftstays/MintNftStay", nil)

	cdc.RegisterConcrete(&MsgCreateNftStay{}, "nftstays/CreateNftStay", nil)
	cdc.RegisterConcrete(&MsgUpdateNftStay{}, "nftstays/UpdateNftStay", nil)
	cdc.RegisterConcrete(&MsgDeleteNftStay{}, "nftstays/DeleteNftStay", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcTransferNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUnsellNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgClaimNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBidNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuyNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSellNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMarket{},
		&MsgUpdateMarket{},
		&MsgDeleteMarket{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgTransferNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBurnNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMintNftStay{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateNftStay{},
		&MsgUpdateNftStay{},
		&MsgDeleteNftStay{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
