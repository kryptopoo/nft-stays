import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "kryptopoo.marketplace.nftstays";
export interface Market {
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
export declare const Market: {
    encode(message: Market, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Market;
    fromJSON(object: any): Market;
    toJSON(message: Market): unknown;
    fromPartial(object: DeepPartial<Market>): Market;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
