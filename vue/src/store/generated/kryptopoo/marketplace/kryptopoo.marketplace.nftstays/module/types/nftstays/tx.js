/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'kryptopoo.marketplace.nftstays';
const baseMsgSendIbcTransferNftStay = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, sID: '', nftStorageCID: '' };
export const MsgSendIbcTransferNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== '') {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== '') {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.sID !== '') {
            writer.uint32(42).string(message.sID);
        }
        if (message.nftStorageCID !== '') {
            writer.uint32(50).string(message.nftStorageCID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcTransferNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sID = reader.string();
                    break;
                case 6:
                    message.nftStorageCID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendIbcTransferNftStay };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.nftStorageCID !== undefined && object.nftStorageCID !== null) {
            message.nftStorageCID = String(object.nftStorageCID);
        }
        else {
            message.nftStorageCID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.sID !== undefined && (obj.sID = message.sID);
        message.nftStorageCID !== undefined && (obj.nftStorageCID = message.nftStorageCID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendIbcTransferNftStay };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.nftStorageCID !== undefined && object.nftStorageCID !== null) {
            message.nftStorageCID = object.nftStorageCID;
        }
        else {
            message.nftStorageCID = '';
        }
        return message;
    }
};
const baseMsgSendIbcTransferNftStayResponse = {};
export const MsgSendIbcTransferNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcTransferNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSendIbcTransferNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendIbcTransferNftStayResponse };
        return message;
    }
};
const baseMsgUnsellNftStay = { creator: '', marketId: '', seller: '' };
export const MsgUnsellNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.marketId !== '') {
            writer.uint32(18).string(message.marketId);
        }
        if (message.seller !== '') {
            writer.uint32(26).string(message.seller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnsellNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.seller = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUnsellNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = String(object.marketId);
        }
        else {
            message.marketId = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.seller !== undefined && (obj.seller = message.seller);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUnsellNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        else {
            message.marketId = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        return message;
    }
};
const baseMsgUnsellNftStayResponse = {};
export const MsgUnsellNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnsellNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUnsellNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUnsellNftStayResponse };
        return message;
    }
};
const baseMsgClaimNftStay = { creator: '', marketId: '', buyer: '' };
export const MsgClaimNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.marketId !== '') {
            writer.uint32(18).string(message.marketId);
        }
        if (message.buyer !== '') {
            writer.uint32(26).string(message.buyer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClaimNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.buyer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgClaimNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = String(object.marketId);
        }
        else {
            message.marketId = '';
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = String(object.buyer);
        }
        else {
            message.buyer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgClaimNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        else {
            message.marketId = '';
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        else {
            message.buyer = '';
        }
        return message;
    }
};
const baseMsgClaimNftStayResponse = {};
export const MsgClaimNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClaimNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgClaimNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgClaimNftStayResponse };
        return message;
    }
};
const baseMsgBidNftStay = { creator: '', marketId: '', buyer: '', price: 0 };
export const MsgBidNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.marketId !== '') {
            writer.uint32(18).string(message.marketId);
        }
        if (message.buyer !== '') {
            writer.uint32(26).string(message.buyer);
        }
        if (message.price !== 0) {
            writer.uint32(32).int32(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBidNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.buyer = reader.string();
                    break;
                case 4:
                    message.price = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBidNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = String(object.marketId);
        }
        else {
            message.marketId = '';
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = String(object.buyer);
        }
        else {
            message.buyer = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBidNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        else {
            message.marketId = '';
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        else {
            message.buyer = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        return message;
    }
};
const baseMsgBidNftStayResponse = {};
export const MsgBidNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBidNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgBidNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBidNftStayResponse };
        return message;
    }
};
const baseMsgBuyNftStay = { creator: '', marketId: '', buyer: '' };
export const MsgBuyNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.marketId !== '') {
            writer.uint32(18).string(message.marketId);
        }
        if (message.buyer !== '') {
            writer.uint32(26).string(message.buyer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.buyer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBuyNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = String(object.marketId);
        }
        else {
            message.marketId = '';
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = String(object.buyer);
        }
        else {
            message.buyer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBuyNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        else {
            message.marketId = '';
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        else {
            message.buyer = '';
        }
        return message;
    }
};
const baseMsgBuyNftStayResponse = {};
export const MsgBuyNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgBuyNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBuyNftStayResponse };
        return message;
    }
};
const baseMsgSellNftStay = { creator: '', sID: '', seller: '', price: 0, onAuction: false, expired: 0 };
export const MsgSellNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sID !== '') {
            writer.uint32(18).string(message.sID);
        }
        if (message.seller !== '') {
            writer.uint32(26).string(message.seller);
        }
        if (message.price !== 0) {
            writer.uint32(32).int32(message.price);
        }
        if (message.onAuction === true) {
            writer.uint32(40).bool(message.onAuction);
        }
        if (message.expired !== 0) {
            writer.uint32(48).int32(message.expired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSellNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sID = reader.string();
                    break;
                case 3:
                    message.seller = reader.string();
                    break;
                case 4:
                    message.price = reader.int32();
                    break;
                case 5:
                    message.onAuction = reader.bool();
                    break;
                case 6:
                    message.expired = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSellNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.onAuction !== undefined && object.onAuction !== null) {
            message.onAuction = Boolean(object.onAuction);
        }
        else {
            message.onAuction = false;
        }
        if (object.expired !== undefined && object.expired !== null) {
            message.expired = Number(object.expired);
        }
        else {
            message.expired = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sID !== undefined && (obj.sID = message.sID);
        message.seller !== undefined && (obj.seller = message.seller);
        message.price !== undefined && (obj.price = message.price);
        message.onAuction !== undefined && (obj.onAuction = message.onAuction);
        message.expired !== undefined && (obj.expired = message.expired);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSellNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.onAuction !== undefined && object.onAuction !== null) {
            message.onAuction = object.onAuction;
        }
        else {
            message.onAuction = false;
        }
        if (object.expired !== undefined && object.expired !== null) {
            message.expired = object.expired;
        }
        else {
            message.expired = 0;
        }
        return message;
    }
};
const baseMsgSellNftStayResponse = {};
export const MsgSellNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSellNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSellNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSellNftStayResponse };
        return message;
    }
};
const baseMsgCreateMarket = { creator: '', sID: '', price: 0, status: '', seller: '', onAuction: false, offers: '', expired: 0 };
export const MsgCreateMarket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sID !== '') {
            writer.uint32(18).string(message.sID);
        }
        if (message.price !== 0) {
            writer.uint32(24).int32(message.price);
        }
        if (message.status !== '') {
            writer.uint32(34).string(message.status);
        }
        if (message.seller !== '') {
            writer.uint32(42).string(message.seller);
        }
        if (message.onAuction === true) {
            writer.uint32(48).bool(message.onAuction);
        }
        if (message.offers !== '') {
            writer.uint32(58).string(message.offers);
        }
        if (message.expired !== 0) {
            writer.uint32(64).int32(message.expired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateMarket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sID = reader.string();
                    break;
                case 3:
                    message.price = reader.int32();
                    break;
                case 4:
                    message.status = reader.string();
                    break;
                case 5:
                    message.seller = reader.string();
                    break;
                case 6:
                    message.onAuction = reader.bool();
                    break;
                case 7:
                    message.offers = reader.string();
                    break;
                case 8:
                    message.expired = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateMarket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.onAuction !== undefined && object.onAuction !== null) {
            message.onAuction = Boolean(object.onAuction);
        }
        else {
            message.onAuction = false;
        }
        if (object.offers !== undefined && object.offers !== null) {
            message.offers = String(object.offers);
        }
        else {
            message.offers = '';
        }
        if (object.expired !== undefined && object.expired !== null) {
            message.expired = Number(object.expired);
        }
        else {
            message.expired = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sID !== undefined && (obj.sID = message.sID);
        message.price !== undefined && (obj.price = message.price);
        message.status !== undefined && (obj.status = message.status);
        message.seller !== undefined && (obj.seller = message.seller);
        message.onAuction !== undefined && (obj.onAuction = message.onAuction);
        message.offers !== undefined && (obj.offers = message.offers);
        message.expired !== undefined && (obj.expired = message.expired);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateMarket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.onAuction !== undefined && object.onAuction !== null) {
            message.onAuction = object.onAuction;
        }
        else {
            message.onAuction = false;
        }
        if (object.offers !== undefined && object.offers !== null) {
            message.offers = object.offers;
        }
        else {
            message.offers = '';
        }
        if (object.expired !== undefined && object.expired !== null) {
            message.expired = object.expired;
        }
        else {
            message.expired = 0;
        }
        return message;
    }
};
const baseMsgCreateMarketResponse = { id: 0 };
export const MsgCreateMarketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateMarketResponse };
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
        const message = { ...baseMsgCreateMarketResponse };
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
        const message = { ...baseMsgCreateMarketResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateMarket = { creator: '', id: 0, sID: '', price: 0, status: '', seller: '', onAuction: false, offers: '', expired: 0 };
export const MsgUpdateMarket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.sID !== '') {
            writer.uint32(26).string(message.sID);
        }
        if (message.price !== 0) {
            writer.uint32(32).int32(message.price);
        }
        if (message.status !== '') {
            writer.uint32(42).string(message.status);
        }
        if (message.seller !== '') {
            writer.uint32(50).string(message.seller);
        }
        if (message.onAuction === true) {
            writer.uint32(56).bool(message.onAuction);
        }
        if (message.offers !== '') {
            writer.uint32(66).string(message.offers);
        }
        if (message.expired !== 0) {
            writer.uint32(72).int32(message.expired);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateMarket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.sID = reader.string();
                    break;
                case 4:
                    message.price = reader.int32();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                case 6:
                    message.seller = reader.string();
                    break;
                case 7:
                    message.onAuction = reader.bool();
                    break;
                case 8:
                    message.offers = reader.string();
                    break;
                case 9:
                    message.expired = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateMarket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.onAuction !== undefined && object.onAuction !== null) {
            message.onAuction = Boolean(object.onAuction);
        }
        else {
            message.onAuction = false;
        }
        if (object.offers !== undefined && object.offers !== null) {
            message.offers = String(object.offers);
        }
        else {
            message.offers = '';
        }
        if (object.expired !== undefined && object.expired !== null) {
            message.expired = Number(object.expired);
        }
        else {
            message.expired = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.sID !== undefined && (obj.sID = message.sID);
        message.price !== undefined && (obj.price = message.price);
        message.status !== undefined && (obj.status = message.status);
        message.seller !== undefined && (obj.seller = message.seller);
        message.onAuction !== undefined && (obj.onAuction = message.onAuction);
        message.offers !== undefined && (obj.offers = message.offers);
        message.expired !== undefined && (obj.expired = message.expired);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateMarket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.onAuction !== undefined && object.onAuction !== null) {
            message.onAuction = object.onAuction;
        }
        else {
            message.onAuction = false;
        }
        if (object.offers !== undefined && object.offers !== null) {
            message.offers = object.offers;
        }
        else {
            message.offers = '';
        }
        if (object.expired !== undefined && object.expired !== null) {
            message.expired = object.expired;
        }
        else {
            message.expired = 0;
        }
        return message;
    }
};
const baseMsgUpdateMarketResponse = {};
export const MsgUpdateMarketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateMarketResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateMarketResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateMarketResponse };
        return message;
    }
};
const baseMsgDeleteMarket = { creator: '', id: 0 };
export const MsgDeleteMarket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteMarket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteMarket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteMarket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteMarketResponse = {};
export const MsgDeleteMarketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteMarketResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteMarketResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteMarketResponse };
        return message;
    }
};
const baseMsgTransferNftStay = { creator: '', sender: '', recipient: '', sID: '', denom: '' };
export const MsgTransferNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(26).string(message.recipient);
        }
        if (message.sID !== '') {
            writer.uint32(34).string(message.sID);
        }
        if (message.denom !== '') {
            writer.uint32(42).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransferNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.sID = reader.string();
                    break;
                case 5:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgTransferNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.sID !== undefined && (obj.sID = message.sID);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgTransferNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgTransferNftStayResponse = {};
export const MsgTransferNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransferNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgTransferNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgTransferNftStayResponse };
        return message;
    }
};
const baseMsgBurnNftStay = { creator: '', sender: '', sID: '', denom: '' };
export const MsgBurnNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.sID !== '') {
            writer.uint32(26).string(message.sID);
        }
        if (message.denom !== '') {
            writer.uint32(34).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.sID = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBurnNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sender !== undefined && (obj.sender = message.sender);
        message.sID !== undefined && (obj.sID = message.sID);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBurnNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgBurnNftStayResponse = {};
export const MsgBurnNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgBurnNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBurnNftStayResponse };
        return message;
    }
};
const baseMsgMintNftStay = { creator: '', sender: '', recipient: '', sID: '', denom: '', name: '', description: '', image: '', tokenUri: '' };
export const MsgMintNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== '') {
            writer.uint32(26).string(message.recipient);
        }
        if (message.sID !== '') {
            writer.uint32(34).string(message.sID);
        }
        if (message.denom !== '') {
            writer.uint32(42).string(message.denom);
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        if (message.image !== '') {
            writer.uint32(66).string(message.image);
        }
        if (message.tokenUri !== '') {
            writer.uint32(74).string(message.tokenUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.sID = reader.string();
                    break;
                case 5:
                    message.denom = reader.string();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                case 8:
                    message.image = reader.string();
                    break;
                case 9:
                    message.tokenUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMintNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = String(object.image);
        }
        else {
            message.image = '';
        }
        if (object.tokenUri !== undefined && object.tokenUri !== null) {
            message.tokenUri = String(object.tokenUri);
        }
        else {
            message.tokenUri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.sID !== undefined && (obj.sID = message.sID);
        message.denom !== undefined && (obj.denom = message.denom);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.image !== undefined && (obj.image = message.image);
        message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMintNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = object.image;
        }
        else {
            message.image = '';
        }
        if (object.tokenUri !== undefined && object.tokenUri !== null) {
            message.tokenUri = object.tokenUri;
        }
        else {
            message.tokenUri = '';
        }
        return message;
    }
};
const baseMsgMintNftStayResponse = {};
export const MsgMintNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgMintNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMintNftStayResponse };
        return message;
    }
};
const baseMsgCreateNftStay = { creator: '', sID: '', owner: '', name: '', description: '', image: '', tokenUri: '' };
export const MsgCreateNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.sID !== '') {
            writer.uint32(18).string(message.sID);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.image !== '') {
            writer.uint32(50).string(message.image);
        }
        if (message.tokenUri !== '') {
            writer.uint32(58).string(message.tokenUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sID = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.image = reader.string();
                    break;
                case 7:
                    message.tokenUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = String(object.image);
        }
        else {
            message.image = '';
        }
        if (object.tokenUri !== undefined && object.tokenUri !== null) {
            message.tokenUri = String(object.tokenUri);
        }
        else {
            message.tokenUri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sID !== undefined && (obj.sID = message.sID);
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.image !== undefined && (obj.image = message.image);
        message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = object.image;
        }
        else {
            message.image = '';
        }
        if (object.tokenUri !== undefined && object.tokenUri !== null) {
            message.tokenUri = object.tokenUri;
        }
        else {
            message.tokenUri = '';
        }
        return message;
    }
};
const baseMsgCreateNftStayResponse = { id: 0 };
export const MsgCreateNftStayResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNftStayResponse };
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
        const message = { ...baseMsgCreateNftStayResponse };
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
        const message = { ...baseMsgCreateNftStayResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateNftStay = { creator: '', id: 0, sID: '', owner: '', name: '', description: '', image: '', tokenUri: '' };
export const MsgUpdateNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.sID !== '') {
            writer.uint32(26).string(message.sID);
        }
        if (message.owner !== '') {
            writer.uint32(34).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        if (message.image !== '') {
            writer.uint32(58).string(message.image);
        }
        if (message.tokenUri !== '') {
            writer.uint32(66).string(message.tokenUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.sID = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.image = reader.string();
                    break;
                case 8:
                    message.tokenUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = String(object.image);
        }
        else {
            message.image = '';
        }
        if (object.tokenUri !== undefined && object.tokenUri !== null) {
            message.tokenUri = String(object.tokenUri);
        }
        else {
            message.tokenUri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.sID !== undefined && (obj.sID = message.sID);
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.image !== undefined && (obj.image = message.image);
        message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = object.image;
        }
        else {
            message.image = '';
        }
        if (object.tokenUri !== undefined && object.tokenUri !== null) {
            message.tokenUri = object.tokenUri;
        }
        else {
            message.tokenUri = '';
        }
        return message;
    }
};
const baseMsgUpdateNftStayResponse = {};
export const MsgUpdateNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateNftStayResponse };
        return message;
    }
};
const baseMsgDeleteNftStay = { creator: '', id: 0 };
export const MsgDeleteNftStay = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNftStay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteNftStay };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteNftStayResponse = {};
export const MsgDeleteNftStayResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNftStayResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteNftStayResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteNftStayResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendIbcTransferNftStay(request) {
        const data = MsgSendIbcTransferNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'SendIbcTransferNftStay', data);
        return promise.then((data) => MsgSendIbcTransferNftStayResponse.decode(new Reader(data)));
    }
    UnsellNftStay(request) {
        const data = MsgUnsellNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'UnsellNftStay', data);
        return promise.then((data) => MsgUnsellNftStayResponse.decode(new Reader(data)));
    }
    ClaimNftStay(request) {
        const data = MsgClaimNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'ClaimNftStay', data);
        return promise.then((data) => MsgClaimNftStayResponse.decode(new Reader(data)));
    }
    BidNftStay(request) {
        const data = MsgBidNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'BidNftStay', data);
        return promise.then((data) => MsgBidNftStayResponse.decode(new Reader(data)));
    }
    BuyNftStay(request) {
        const data = MsgBuyNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'BuyNftStay', data);
        return promise.then((data) => MsgBuyNftStayResponse.decode(new Reader(data)));
    }
    SellNftStay(request) {
        const data = MsgSellNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'SellNftStay', data);
        return promise.then((data) => MsgSellNftStayResponse.decode(new Reader(data)));
    }
    CreateMarket(request) {
        const data = MsgCreateMarket.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'CreateMarket', data);
        return promise.then((data) => MsgCreateMarketResponse.decode(new Reader(data)));
    }
    UpdateMarket(request) {
        const data = MsgUpdateMarket.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'UpdateMarket', data);
        return promise.then((data) => MsgUpdateMarketResponse.decode(new Reader(data)));
    }
    DeleteMarket(request) {
        const data = MsgDeleteMarket.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'DeleteMarket', data);
        return promise.then((data) => MsgDeleteMarketResponse.decode(new Reader(data)));
    }
    TransferNftStay(request) {
        const data = MsgTransferNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'TransferNftStay', data);
        return promise.then((data) => MsgTransferNftStayResponse.decode(new Reader(data)));
    }
    BurnNftStay(request) {
        const data = MsgBurnNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'BurnNftStay', data);
        return promise.then((data) => MsgBurnNftStayResponse.decode(new Reader(data)));
    }
    MintNftStay(request) {
        const data = MsgMintNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'MintNftStay', data);
        return promise.then((data) => MsgMintNftStayResponse.decode(new Reader(data)));
    }
    CreateNftStay(request) {
        const data = MsgCreateNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'CreateNftStay', data);
        return promise.then((data) => MsgCreateNftStayResponse.decode(new Reader(data)));
    }
    UpdateNftStay(request) {
        const data = MsgUpdateNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'UpdateNftStay', data);
        return promise.then((data) => MsgUpdateNftStayResponse.decode(new Reader(data)));
    }
    DeleteNftStay(request) {
        const data = MsgDeleteNftStay.encode(request).finish();
        const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'DeleteNftStay', data);
        return promise.then((data) => MsgDeleteNftStayResponse.decode(new Reader(data)));
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
