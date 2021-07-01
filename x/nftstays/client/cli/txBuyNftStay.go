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

func CmdBuyNftStay() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buyNftStay [marketId] [buyer]",
		Short: "Broadcast message buyNftStay",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsMarketId := string(args[0])
			argsBuyer := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBuyNftStay(clientCtx.GetFromAddress().String(), string(argsMarketId), string(argsBuyer))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
