import { Reader, Writer } from 'protobufjs/minimal';
import { Market } from '../nftstays/market';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { NftStay } from '../nftstays/nftStay';
export declare const protobufPackage = "kryptopoo.marketplace.nftstays";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetMarketRequest {
    id: number;
}
export interface QueryGetMarketResponse {
    Market: Market | undefined;
}
export interface QueryAllMarketRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMarketResponse {
    Market: Market[];
    pagination: PageResponse | undefined;
}
export interface QueryGetNftStayRequest {
    id: number;
}
export interface QueryGetNftStayResponse {
    NftStay: NftStay | undefined;
}
export interface QueryAllNftStayRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllNftStayResponse {
    NftStay: NftStay[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetMarketRequest: {
    encode(message: QueryGetMarketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMarketRequest;
    fromJSON(object: any): QueryGetMarketRequest;
    toJSON(message: QueryGetMarketRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest;
};
export declare const QueryGetMarketResponse: {
    encode(message: QueryGetMarketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMarketResponse;
    fromJSON(object: any): QueryGetMarketResponse;
    toJSON(message: QueryGetMarketResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse;
};
export declare const QueryAllMarketRequest: {
    encode(message: QueryAllMarketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMarketRequest;
    fromJSON(object: any): QueryAllMarketRequest;
    toJSON(message: QueryAllMarketRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest;
};
export declare const QueryAllMarketResponse: {
    encode(message: QueryAllMarketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMarketResponse;
    fromJSON(object: any): QueryAllMarketResponse;
    toJSON(message: QueryAllMarketResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse;
};
export declare const QueryGetNftStayRequest: {
    encode(message: QueryGetNftStayRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNftStayRequest;
    fromJSON(object: any): QueryGetNftStayRequest;
    toJSON(message: QueryGetNftStayRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetNftStayRequest>): QueryGetNftStayRequest;
};
export declare const QueryGetNftStayResponse: {
    encode(message: QueryGetNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNftStayResponse;
    fromJSON(object: any): QueryGetNftStayResponse;
    toJSON(message: QueryGetNftStayResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNftStayResponse>): QueryGetNftStayResponse;
};
export declare const QueryAllNftStayRequest: {
    encode(message: QueryAllNftStayRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNftStayRequest;
    fromJSON(object: any): QueryAllNftStayRequest;
    toJSON(message: QueryAllNftStayRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllNftStayRequest>): QueryAllNftStayRequest;
};
export declare const QueryAllNftStayResponse: {
    encode(message: QueryAllNftStayResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNftStayResponse;
    fromJSON(object: any): QueryAllNftStayResponse;
    toJSON(message: QueryAllNftStayResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllNftStayResponse>): QueryAllNftStayResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a market by id. */
    Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
    /** Queries a list of market items. */
    MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
    /** Queries a nftStay by id. */
    NftStay(request: QueryGetNftStayRequest): Promise<QueryGetNftStayResponse>;
    /** Queries a list of nftStay items. */
    NftStayAll(request: QueryAllNftStayRequest): Promise<QueryAllNftStayResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
    MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
    NftStay(request: QueryGetNftStayRequest): Promise<QueryGetNftStayResponse>;
    NftStayAll(request: QueryAllNftStayRequest): Promise<QueryAllNftStayResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
