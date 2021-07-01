import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateNftStay: (data: MsgUpdateNftStay) => EncodeObject;
    msgDeleteNftStay: (data: MsgDeleteNftStay) => EncodeObject;
    msgMintNftStay: (data: MsgMintNftStay) => EncodeObject;
    msgBidNftStay: (data: MsgBidNftStay) => EncodeObject;
    msgClaimNftStay: (data: MsgClaimNftStay) => EncodeObject;
    msgTransferNftStay: (data: MsgTransferNftStay) => EncodeObject;
    msgSellNftStay: (data: MsgSellNftStay) => EncodeObject;
    msgCreateMarket: (data: MsgCreateMarket) => EncodeObject;
    msgUpdateMarket: (data: MsgUpdateMarket) => EncodeObject;
    msgBuyNftStay: (data: MsgBuyNftStay) => EncodeObject;
    msgBurnNftStay: (data: MsgBurnNftStay) => EncodeObject;
    msgSendIbcTransferNftStay: (data: MsgSendIbcTransferNftStay) => EncodeObject;
    msgUnsellNftStay: (data: MsgUnsellNftStay) => EncodeObject;
    msgDeleteMarket: (data: MsgDeleteMarket) => EncodeObject;
    msgCreateNftStay: (data: MsgCreateNftStay) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
