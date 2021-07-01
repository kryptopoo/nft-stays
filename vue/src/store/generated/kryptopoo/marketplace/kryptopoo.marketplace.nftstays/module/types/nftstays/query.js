/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Market } from '../nftstays/market';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { NftStay } from '../nftstays/nftStay';
export const protobufPackage = 'kryptopoo.marketplace.nftstays';
const baseQueryGetMarketRequest = { id: 0 };
export const QueryGetMarketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMarketRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMarketRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMarketRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetMarketResponse = {};
export const QueryGetMarketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Market !== undefined) {
            Market.encode(message.Market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMarketResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Market = Market.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMarketResponse };
        if (object.Market !== undefined && object.Market !== null) {
            message.Market = Market.fromJSON(object.Market);
        }
        else {
            message.Market = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Market !== undefined && (obj.Market = message.Market ? Market.toJSON(message.Market) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMarketResponse };
        if (object.Market !== undefined && object.Market !== null) {
            message.Market = Market.fromPartial(object.Market);
        }
        else {
            message.Market = undefined;
        }
        return message;
    }
};
const baseQueryAllMarketRequest = {};
export const QueryAllMarketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMarketRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMarketRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMarketRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllMarketResponse = {};
export const QueryAllMarketResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Market) {
            Market.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMarketResponse };
        message.Market = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Market.push(Market.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMarketResponse };
        message.Market = [];
        if (object.Market !== undefined && object.Market !== null) {
            for (const e of object.Market) {
                message.Market.push(Market.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Market) {
            obj.Market = message.Market.map((e) => (e ? Market.toJSON(e) : undefined));
        }
        else {
            obj.Market = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMarketResponse };
        message.Market = [];
        if (object.Market !== undefined && object.Market !== null) {
            for (const e of object.Market) {
                message.Market.push(Market.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetNftStayRequest = { id: 0 };
export const QueryGetNftStayRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetNftStayRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetNftStayRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetNftStayRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetNftStayResponse = {};
export const QueryGetNftStayResponse = {
    encode(message, writer = Writer.create()) {
        if (message.NftStay !== undefined) {
            NftStay.encode(message.NftStay, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.NftStay = NftStay.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetNftStayResponse };
        if (object.NftStay !== undefined && object.NftStay !== null) {
            message.NftStay = NftStay.fromJSON(object.NftStay);
        }
        else {
            message.NftStay = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.NftStay !== undefined && (obj.NftStay = message.NftStay ? NftStay.toJSON(message.NftStay) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetNftStayResponse };
        if (object.NftStay !== undefined && object.NftStay !== null) {
            message.NftStay = NftStay.fromPartial(object.NftStay);
        }
        else {
            message.NftStay = undefined;
        }
        return message;
    }
};
const baseQueryAllNftStayRequest = {};
export const QueryAllNftStayRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllNftStayRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllNftStayRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllNftStayRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllNftStayResponse = {};
export const QueryAllNftStayResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.NftStay) {
            NftStay.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllNftStayResponse };
        message.NftStay = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.NftStay.push(NftStay.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllNftStayResponse };
        message.NftStay = [];
        if (object.NftStay !== undefined && object.NftStay !== null) {
            for (const e of object.NftStay) {
                message.NftStay.push(NftStay.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.NftStay) {
            obj.NftStay = message.NftStay.map((e) => (e ? NftStay.toJSON(e) : undefined));
        }
        else {
            obj.NftStay = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllNftStayResponse };
        message.NftStay = [];
        if (object.NftStay !== undefined && object.NftStay !== null) {
            for (const e of object.NftStay) {
                message.NftStay.push(NftStay.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Market(request) {
        const data = QueryGetMarketRequest.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'Market', data);
        return promise.then((data) => QueryGetMarketResponse.decode(new Reader(data)));
    }
    MarketAll(request) {
        const data = QueryAllMarketRequest.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'MarketAll', data);
        return promise.then((data) => QueryAllMarketResponse.decode(new Reader(data)));
    }
    NftStay(request) {
        const data = QueryGetNftStayRequest.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'NftStay', data);
        return promise.then((data) => QueryGetNftStayResponse.decode(new Reader(data)));
    }
    NftStayAll(request) {
        const data = QueryAllNftStayRequest.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'NftStayAll', data);
        return promise.then((data) => QueryAllNftStayResponse.decode(new Reader(data)));
    }
}
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
