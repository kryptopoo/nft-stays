// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateNftStay } from "./types/nftstays/tx";
import { MsgDeleteNftStay } from "./types/nftstays/tx";
import { MsgMintNftStay } from "./types/nftstays/tx";
import { MsgBidNftStay } from "./types/nftstays/tx";
import { MsgClaimNftStay } from "./types/nftstays/tx";
import { MsgTransferNftStay } from "./types/nftstays/tx";
import { MsgSellNftStay } from "./types/nftstays/tx";
import { MsgCreateMarket } from "./types/nftstays/tx";
import { MsgUpdateMarket } from "./types/nftstays/tx";
import { MsgBuyNftStay } from "./types/nftstays/tx";
import { MsgBurnNftStay } from "./types/nftstays/tx";
import { MsgSendIbcTransferNftStay } from "./types/nftstays/tx";
import { MsgUnsellNftStay } from "./types/nftstays/tx";
import { MsgDeleteMarket } from "./types/nftstays/tx";
import { MsgCreateNftStay } from "./types/nftstays/tx";
const types = [
    ["/kryptopoo.marketplace.nftstays.MsgUpdateNftStay", MsgUpdateNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgDeleteNftStay", MsgDeleteNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgMintNftStay", MsgMintNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgBidNftStay", MsgBidNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgClaimNftStay", MsgClaimNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgTransferNftStay", MsgTransferNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgSellNftStay", MsgSellNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgCreateMarket", MsgCreateMarket],
    ["/kryptopoo.marketplace.nftstays.MsgUpdateMarket", MsgUpdateMarket],
    ["/kryptopoo.marketplace.nftstays.MsgBuyNftStay", MsgBuyNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgBurnNftStay", MsgBurnNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgSendIbcTransferNftStay", MsgSendIbcTransferNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgUnsellNftStay", MsgUnsellNftStay],
    ["/kryptopoo.marketplace.nftstays.MsgDeleteMarket", MsgDeleteMarket],
    ["/kryptopoo.marketplace.nftstays.MsgCreateNftStay", MsgCreateNftStay],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgUpdateNftStay", value: data }),
        msgDeleteNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgDeleteNftStay", value: data }),
        msgMintNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgMintNftStay", value: data }),
        msgBidNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgBidNftStay", value: data }),
        msgClaimNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgClaimNftStay", value: data }),
        msgTransferNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgTransferNftStay", value: data }),
        msgSellNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgSellNftStay", value: data }),
        msgCreateMarket: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgCreateMarket", value: data }),
        msgUpdateMarket: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgUpdateMarket", value: data }),
        msgBuyNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgBuyNftStay", value: data }),
        msgBurnNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgBurnNftStay", value: data }),
        msgSendIbcTransferNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgSendIbcTransferNftStay", value: data }),
        msgUnsellNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgUnsellNftStay", value: data }),
        msgDeleteMarket: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgDeleteMarket", value: data }),
        msgCreateNftStay: (data) => ({ typeUrl: "/kryptopoo.marketplace.nftstays.MsgCreateNftStay", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
