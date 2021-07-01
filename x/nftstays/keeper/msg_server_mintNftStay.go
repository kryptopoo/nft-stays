package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func (k msgServer) MintNftStay(goCtx context.Context, msg *types.MsgMintNftStay) (*types.MsgMintNftStayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: validation
	if len(msg.Sender) == 0 || len(msg.Name) == 0 || len(msg.Image) == 0 {
		return nil, sdkerrors.Wrap(types.ErrRequiredFields, "some fields are required")
	}

	// create new NFT stay with generated stay ID
	var nftStay = types.NftStay{
		Creator:     msg.Sender,
		Owner:       msg.Recipient,
		SID:         GenerateStaySID(),
		Name:        msg.Name,
		Description: msg.Description,
		Image:       msg.Image,
		TokenUri:    msg.TokenUri,
	}

	k.AppendNftStay(
		ctx,
		nftStay,
	)

	return &types.MsgMintNftStayResponse{}, nil
}
