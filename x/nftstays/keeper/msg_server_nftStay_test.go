package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

func TestNftStayMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateNftStay(ctx, &types.MsgCreateNftStay{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestNftStayMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateNftStay
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateNftStay{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateNftStay{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateNftStay{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateNftStay(ctx, &types.MsgCreateNftStay{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateNftStay(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestNftStayMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteNftStay
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteNftStay{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteNftStay{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteNftStay{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateNftStay(ctx, &types.MsgCreateNftStay{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteNftStay(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
