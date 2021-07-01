import { Writer, Reader } from 'protobufjs/minimal';
import { Market } from '../nftstays/market';
import { NftStay } from '../nftstays/nftStay';
export declare const protobufPackage = "kryptopoo.marketplace.nftstays";
/** GenesisState defines the nftstays module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    marketList: Market[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    marketCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    nftStayList: NftStay[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    nftStayCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    portId: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
