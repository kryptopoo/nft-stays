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

func CmdBidNftStay() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "bidNftStay [marketId] [buyer] [price]",
		Short: "Broadcast message bidNftStay",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsMarketId := string(args[0])
			argsBuyer := string(args[1])
			argsPrice, _ := strconv.ParseInt(args[2], 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBidNftStay(clientCtx.GetFromAddress().String(), string(argsMarketId), string(argsBuyer), int32(argsPrice))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
