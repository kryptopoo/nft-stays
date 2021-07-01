/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Market } from '../nftstays/market';
import { NftStay } from '../nftstays/nftStay';
export const protobufPackage = 'kryptopoo.marketplace.nftstays';
const baseGenesisState = { marketCount: 0, nftStayCount: 0, portId: '' };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.marketList) {
            Market.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.marketCount !== 0) {
            writer.uint32(40).uint64(message.marketCount);
        }
        for (const v of message.nftStayList) {
            NftStay.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nftStayCount !== 0) {
            writer.uint32(24).uint64(message.nftStayCount);
        }
        if (message.portId !== '') {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.marketList = [];
        message.nftStayList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.marketList.push(Market.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.marketCount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.nftStayList.push(NftStay.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nftStayCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.marketList = [];
        message.nftStayList = [];
        if (object.marketList !== undefined && object.marketList !== null) {
            for (const e of object.marketList) {
                message.marketList.push(Market.fromJSON(e));
            }
        }
        if (object.marketCount !== undefined && object.marketCount !== null) {
            message.marketCount = Number(object.marketCount);
        }
        else {
            message.marketCount = 0;
        }
        if (object.nftStayList !== undefined && object.nftStayList !== null) {
            for (const e of object.nftStayList) {
                message.nftStayList.push(NftStay.fromJSON(e));
            }
        }
        if (object.nftStayCount !== undefined && object.nftStayCount !== null) {
            message.nftStayCount = Number(object.nftStayCount);
        }
        else {
            message.nftStayCount = 0;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.marketList) {
            obj.marketList = message.marketList.map((e) => (e ? Market.toJSON(e) : undefined));
        }
        else {
            obj.marketList = [];
        }
        message.marketCount !== undefined && (obj.marketCount = message.marketCount);
        if (message.nftStayList) {
            obj.nftStayList = message.nftStayList.map((e) => (e ? NftStay.toJSON(e) : undefined));
        }
        else {
            obj.nftStayList = [];
        }
        message.nftStayCount !== undefined && (obj.nftStayCount = message.nftStayCount);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.marketList = [];
        message.nftStayList = [];
        if (object.marketList !== undefined && object.marketList !== null) {
            for (const e of object.marketList) {
                message.marketList.push(Market.fromPartial(e));
            }
        }
        if (object.marketCount !== undefined && object.marketCount !== null) {
            message.marketCount = object.marketCount;
        }
        else {
            message.marketCount = 0;
        }
        if (object.nftStayList !== undefined && object.nftStayList !== null) {
            for (const e of object.nftStayList) {
                message.nftStayList.push(NftStay.fromPartial(e));
            }
        }
        if (object.nftStayCount !== undefined && object.nftStayCount !== null) {
            message.nftStayCount = object.nftStayCount;
        }
        else {
            message.nftStayCount = 0;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = '';
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
