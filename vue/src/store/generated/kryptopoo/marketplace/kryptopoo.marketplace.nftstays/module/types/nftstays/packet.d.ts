import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "kryptopoo.marketplace.nftstays";
export interface NftstaysPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    ibcTransferNftStayPacket: IbcTransferNftStayPacketData | undefined;
}
export interface NoData {
}
/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcTransferNftStayPacketData defines a struct for the packet payload
 */
export interface IbcTransferNftStayPacketData {
    sID: string;
    nftStorageCID: string;
    creator: string;
}
/** IbcTransferNftStayPacketAck defines a struct for the packet acknowledgment */
export interface IbcTransferNftStayPacketAck {
    sID: string;
}
export declare const NftstaysPacketData: {
    encode(message: NftstaysPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NftstaysPacketData;
    fromJSON(object: any): NftstaysPacketData;
    toJSON(message: NftstaysPacketData): unknown;
    fromPartial(object: DeepPartial<NftstaysPacketData>): NftstaysPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcTransferNftStayPacketData: {
    encode(message: IbcTransferNftStayPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcTransferNftStayPacketData;
    fromJSON(object: any): IbcTransferNftStayPacketData;
    toJSON(message: IbcTransferNftStayPacketData): unknown;
    fromPartial(object: DeepPartial<IbcTransferNftStayPacketData>): IbcTransferNftStayPacketData;
};
export declare const IbcTransferNftStayPacketAck: {
    encode(message: IbcTransferNftStayPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcTransferNftStayPacketAck;
    fromJSON(object: any): IbcTransferNftStayPacketAck;
    toJSON(message: IbcTransferNftStayPacketAck): unknown;
    fromPartial(object: DeepPartial<IbcTransferNftStayPacketAck>): IbcTransferNftStayPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
