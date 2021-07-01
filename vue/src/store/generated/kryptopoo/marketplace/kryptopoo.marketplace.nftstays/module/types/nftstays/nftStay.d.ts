import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "kryptopoo.marketplace.nftstays";
export interface NftStay {
    creator: string;
    id: number;
    sID: string;
    owner: string;
    name: string;
    description: string;
    image: string;
    tokenUri: string;
}
export declare const NftStay: {
    encode(message: NftStay, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NftStay;
    fromJSON(object: any): NftStay;
    toJSON(message: NftStay): unknown;
    fromPartial(object: DeepPartial<NftStay>): NftStay;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
