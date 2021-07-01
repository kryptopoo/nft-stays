import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "kryptopoo.marketplace.nftstays";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendIbcTransferNftStay {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    sID: string;
    nftStorageCID: string;
}
export interface MsgSendIbcTransferNftStayResponse {
}
export interface MsgUnsellNftStay {
    creator: string;
    marketId: string;
    seller: string;
}
export interface MsgUnsellNftStayResponse {
}
export interface MsgClaimNftStay {
    creator: string;
    marketId: string;
    buyer: string;
}
export interface MsgClaimNftStayResponse {
}
export interface MsgBidNftStay {
    creator: string;
    marketId: string;
    buyer: string;
    price: number;
}
export interface MsgBidNftStayResponse {
}
export interface MsgBuyNftStay {
    creator: string;
    marketId: string;
    buyer: string;
}
export interface MsgBuyNftStayResponse {
}
export interface MsgSellNftStay {
    creator: string;
    sID: string;
    seller: string;
    price: number;
    onAuction: boolean;
    expired: number;
}
export interface MsgSellNftStayResponse {
}
export interface MsgCreateMarket {
    creator: string;
    sID: string;
    price: number;
    status: string;
    seller: string;
    onAuction: boolean;
    offers: string;
    expired: number;
}
export interface MsgCreateMarketResponse {
    id: number;
}
export interface MsgUpdateMarket {
    creator: string;
    id: number;
    sID: string;
    price: number;
    status: string;
    seller: string;
    onAuction: boolean;
    offers: string;
    expired: number;
}
export interface MsgUpdateMarketResponse {
}
export interface MsgDeleteMarket {
    creator: string;
    id: number;
}
export interface MsgDeleteMarketResponse {
}
export interface MsgTransferNftStay {
    creator: string;
    sender: string;
    recipient: string;
    sID: string;
    denom: string;
}
export interface MsgTransferNftStayResponse {
}
export interface MsgBurnNftStay {
    creator: string;
    sender: string;
    sID: string;
    denom: string;
}
export interface MsgBurnNftStayResponse {
}
export interface MsgMintNftStay {
    creator: string;
    sender: string;
    recipient: string;
    sID: string;
    denom: string;
    name: string;
    description: string;
    image: string;
    tokenUri: string;
}
export interface MsgMintNftStayResponse {
}
export interface MsgCreateNftStay {
    creator: string;
    sID: string;
    owner: string;
    name: string;
    description: string;
    image: string;
    tokenUri: string;
}
export interface MsgCreateNftStayResponse {
    id: number;
}
export interface MsgUpdateNftStay {
    creator: string;
    id: number;
    sID: string;
    owner: string;
    name: string;
    description: string;
    image: string;
    tokenUri: string;
}
export interface MsgUpdateNftStayResponse {
}
export interface MsgDeleteNftStay {
    creator: string;
    id: number;
}
export interface MsgDeleteNftStayResponse {
}
export declare const MsgSendIbcTransferNftStay: {
    encode(message: MsgSendIbcTransferNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcTransferNftStay;
    fromJSON(object: any): MsgSendIbcTransferNftStay;
    toJSON(message: MsgSendIbcTransferNftStay): unknown;
    fromPartial(object: DeepPartial<MsgSendIbcTransferNftStay>): MsgSendIbcTransferNftStay;
};
export declare const MsgSendIbcTransferNftStayResponse: {
    encode(_: MsgSendIbcTransferNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcTransferNftStayResponse;
    fromJSON(_: any): MsgSendIbcTransferNftStayResponse;
    toJSON(_: MsgSendIbcTransferNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendIbcTransferNftStayResponse>): MsgSendIbcTransferNftStayResponse;
};
export declare const MsgUnsellNftStay: {
    encode(message: MsgUnsellNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsellNftStay;
    fromJSON(object: any): MsgUnsellNftStay;
    toJSON(message: MsgUnsellNftStay): unknown;
    fromPartial(object: DeepPartial<MsgUnsellNftStay>): MsgUnsellNftStay;
};
export declare const MsgUnsellNftStayResponse: {
    encode(_: MsgUnsellNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsellNftStayResponse;
    fromJSON(_: any): MsgUnsellNftStayResponse;
    toJSON(_: MsgUnsellNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnsellNftStayResponse>): MsgUnsellNftStayResponse;
};
export declare const MsgClaimNftStay: {
    encode(message: MsgClaimNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClaimNftStay;
    fromJSON(object: any): MsgClaimNftStay;
    toJSON(message: MsgClaimNftStay): unknown;
    fromPartial(object: DeepPartial<MsgClaimNftStay>): MsgClaimNftStay;
};
export declare const MsgClaimNftStayResponse: {
    encode(_: MsgClaimNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClaimNftStayResponse;
    fromJSON(_: any): MsgClaimNftStayResponse;
    toJSON(_: MsgClaimNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimNftStayResponse>): MsgClaimNftStayResponse;
};
export declare const MsgBidNftStay: {
    encode(message: MsgBidNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBidNftStay;
    fromJSON(object: any): MsgBidNftStay;
    toJSON(message: MsgBidNftStay): unknown;
    fromPartial(object: DeepPartial<MsgBidNftStay>): MsgBidNftStay;
};
export declare const MsgBidNftStayResponse: {
    encode(_: MsgBidNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBidNftStayResponse;
    fromJSON(_: any): MsgBidNftStayResponse;
    toJSON(_: MsgBidNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgBidNftStayResponse>): MsgBidNftStayResponse;
};
export declare const MsgBuyNftStay: {
    encode(message: MsgBuyNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyNftStay;
    fromJSON(object: any): MsgBuyNftStay;
    toJSON(message: MsgBuyNftStay): unknown;
    fromPartial(object: DeepPartial<MsgBuyNftStay>): MsgBuyNftStay;
};
export declare const MsgBuyNftStayResponse: {
    encode(_: MsgBuyNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyNftStayResponse;
    fromJSON(_: any): MsgBuyNftStayResponse;
    toJSON(_: MsgBuyNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyNftStayResponse>): MsgBuyNftStayResponse;
};
export declare const MsgSellNftStay: {
    encode(message: MsgSellNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSellNftStay;
    fromJSON(object: any): MsgSellNftStay;
    toJSON(message: MsgSellNftStay): unknown;
    fromPartial(object: DeepPartial<MsgSellNftStay>): MsgSellNftStay;
};
export declare const MsgSellNftStayResponse: {
    encode(_: MsgSellNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSellNftStayResponse;
    fromJSON(_: any): MsgSellNftStayResponse;
    toJSON(_: MsgSellNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgSellNftStayResponse>): MsgSellNftStayResponse;
};
export declare const MsgCreateMarket: {
    encode(message: MsgCreateMarket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMarket;
    fromJSON(object: any): MsgCreateMarket;
    toJSON(message: MsgCreateMarket): unknown;
    fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket;
};
export declare const MsgCreateMarketResponse: {
    encode(message: MsgCreateMarketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMarketResponse;
    fromJSON(object: any): MsgCreateMarketResponse;
    toJSON(message: MsgCreateMarketResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse;
};
export declare const MsgUpdateMarket: {
    encode(message: MsgUpdateMarket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMarket;
    fromJSON(object: any): MsgUpdateMarket;
    toJSON(message: MsgUpdateMarket): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket;
};
export declare const MsgUpdateMarketResponse: {
    encode(_: MsgUpdateMarketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMarketResponse;
    fromJSON(_: any): MsgUpdateMarketResponse;
    toJSON(_: MsgUpdateMarketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse;
};
export declare const MsgDeleteMarket: {
    encode(message: MsgDeleteMarket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMarket;
    fromJSON(object: any): MsgDeleteMarket;
    toJSON(message: MsgDeleteMarket): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMarket>): MsgDeleteMarket;
};
export declare const MsgDeleteMarketResponse: {
    encode(_: MsgDeleteMarketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMarketResponse;
    fromJSON(_: any): MsgDeleteMarketResponse;
    toJSON(_: MsgDeleteMarketResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMarketResponse>): MsgDeleteMarketResponse;
};
export declare const MsgTransferNftStay: {
    encode(message: MsgTransferNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferNftStay;
    fromJSON(object: any): MsgTransferNftStay;
    toJSON(message: MsgTransferNftStay): unknown;
    fromPartial(object: DeepPartial<MsgTransferNftStay>): MsgTransferNftStay;
};
export declare const MsgTransferNftStayResponse: {
    encode(_: MsgTransferNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferNftStayResponse;
    fromJSON(_: any): MsgTransferNftStayResponse;
    toJSON(_: MsgTransferNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferNftStayResponse>): MsgTransferNftStayResponse;
};
export declare const MsgBurnNftStay: {
    encode(message: MsgBurnNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnNftStay;
    fromJSON(object: any): MsgBurnNftStay;
    toJSON(message: MsgBurnNftStay): unknown;
    fromPartial(object: DeepPartial<MsgBurnNftStay>): MsgBurnNftStay;
};
export declare const MsgBurnNftStayResponse: {
    encode(_: MsgBurnNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnNftStayResponse;
    fromJSON(_: any): MsgBurnNftStayResponse;
    toJSON(_: MsgBurnNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnNftStayResponse>): MsgBurnNftStayResponse;
};
export declare const MsgMintNftStay: {
    encode(message: MsgMintNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintNftStay;
    fromJSON(object: any): MsgMintNftStay;
    toJSON(message: MsgMintNftStay): unknown;
    fromPartial(object: DeepPartial<MsgMintNftStay>): MsgMintNftStay;
};
export declare const MsgMintNftStayResponse: {
    encode(_: MsgMintNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintNftStayResponse;
    fromJSON(_: any): MsgMintNftStayResponse;
    toJSON(_: MsgMintNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintNftStayResponse>): MsgMintNftStayResponse;
};
export declare const MsgCreateNftStay: {
    encode(message: MsgCreateNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNftStay;
    fromJSON(object: any): MsgCreateNftStay;
    toJSON(message: MsgCreateNftStay): unknown;
    fromPartial(object: DeepPartial<MsgCreateNftStay>): MsgCreateNftStay;
};
export declare const MsgCreateNftStayResponse: {
    encode(message: MsgCreateNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNftStayResponse;
    fromJSON(object: any): MsgCreateNftStayResponse;
    toJSON(message: MsgCreateNftStayResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateNftStayResponse>): MsgCreateNftStayResponse;
};
export declare const MsgUpdateNftStay: {
    encode(message: MsgUpdateNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateNftStay;
    fromJSON(object: any): MsgUpdateNftStay;
    toJSON(message: MsgUpdateNftStay): unknown;
    fromPartial(object: DeepPartial<MsgUpdateNftStay>): MsgUpdateNftStay;
};
export declare const MsgUpdateNftStayResponse: {
    encode(_: MsgUpdateNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateNftStayResponse;
    fromJSON(_: any): MsgUpdateNftStayResponse;
    toJSON(_: MsgUpdateNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateNftStayResponse>): MsgUpdateNftStayResponse;
};
export declare const MsgDeleteNftStay: {
    encode(message: MsgDeleteNftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNftStay;
    fromJSON(object: any): MsgDeleteNftStay;
    toJSON(message: MsgDeleteNftStay): unknown;
    fromPartial(object: DeepPartial<MsgDeleteNftStay>): MsgDeleteNftStay;
};
export declare const MsgDeleteNftStayResponse: {
    encode(_: MsgDeleteNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNftStayResponse;
    fromJSON(_: any): MsgDeleteNftStayResponse;
    toJSON(_: MsgDeleteNftStayResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteNftStayResponse>): MsgDeleteNftStayResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendIbcTransferNftStay(request: MsgSendIbcTransferNftStay): Promise<MsgSendIbcTransferNftStayResponse>;
    UnsellNftStay(request: MsgUnsellNftStay): Promise<MsgUnsellNftStayResponse>;
    ClaimNftStay(request: MsgClaimNftStay): Promise<MsgClaimNftStayResponse>;
    BidNftStay(request: MsgBidNftStay): Promise<MsgBidNftStayResponse>;
    BuyNftStay(request: MsgBuyNftStay): Promise<MsgBuyNftStayResponse>;
    SellNftStay(request: MsgSellNftStay): Promise<MsgSellNftStayResponse>;
    CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
    UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
    DeleteMarket(request: MsgDeleteMarket): Promise<MsgDeleteMarketResponse>;
    TransferNftStay(request: MsgTransferNftStay): Promise<MsgTransferNftStayResponse>;
    BurnNftStay(request: MsgBurnNftStay): Promise<MsgBurnNftStayResponse>;
    MintNftStay(request: MsgMintNftStay): Promise<MsgMintNftStayResponse>;
    CreateNftStay(request: MsgCreateNftStay): Promise<MsgCreateNftStayResponse>;
    UpdateNftStay(request: MsgUpdateNftStay): Promise<MsgUpdateNftStayResponse>;
    DeleteNftStay(request: MsgDeleteNftStay): Promise<MsgDeleteNftStayResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendIbcTransferNftStay(request: MsgSendIbcTransferNftStay): Promise<MsgSendIbcTransferNftStayResponse>;
    UnsellNftStay(request: MsgUnsellNftStay): Promise<MsgUnsellNftStayResponse>;
    ClaimNftStay(request: MsgClaimNftStay): Promise<MsgClaimNftStayResponse>;
    BidNftStay(request: MsgBidNftStay): Promise<MsgBidNftStayResponse>;
    BuyNftStay(request: MsgBuyNftStay): Promise<MsgBuyNftStayResponse>;
    SellNftStay(request: MsgSellNftStay): Promise<MsgSellNftStayResponse>;
    CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
    UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
    DeleteMarket(request: MsgDeleteMarket): Promise<MsgDeleteMarketResponse>;
    TransferNftStay(request: MsgTransferNftStay): Promise<MsgTransferNftStayResponse>;
    BurnNftStay(request: MsgBurnNftStay): Promise<MsgBurnNftStayResponse>;
    MintNftStay(request: MsgMintNftStay): Promise<MsgMintNftStayResponse>;
    CreateNftStay(request: MsgCreateNftStay): Promise<MsgCreateNftStayResponse>;
    UpdateNftStay(request: MsgUpdateNftStay): Promise<MsgUpdateNftStayResponse>;
    DeleteNftStay(request: MsgDeleteNftStay): Promise<MsgDeleteNftStayResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
