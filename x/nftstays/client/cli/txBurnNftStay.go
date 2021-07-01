package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/kryptopoo/marketplace/x/nftstays/types"
)

var _ = strconv.Itoa(0)

func CmdBurnNftStay() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "burnNftStay [sender] [sID] [denom]",
		Short: "Broadcast message burnNftStay",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsSender := string(args[0])
			argsSID := string(args[1])
			argsDenom := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBurnNftStay(clientCtx.GetFromAddress().String(), string(argsSender), string(argsSID), string(argsDenom))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
