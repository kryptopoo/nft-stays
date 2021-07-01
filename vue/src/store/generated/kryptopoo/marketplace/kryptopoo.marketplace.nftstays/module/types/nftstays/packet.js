/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'kryptopoo.marketplace.nftstays';
const baseNftstaysPacketData = {};
export const NftstaysPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.ibcTransferNftStayPacket !== undefined) {
            IbcTransferNftStayPacketData.encode(message.ibcTransferNftStayPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNftstaysPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ibcTransferNftStayPacket = IbcTransferNftStayPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNftstaysPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcTransferNftStayPacket !== undefined && object.ibcTransferNftStayPacket !== null) {
            message.ibcTransferNftStayPacket = IbcTransferNftStayPacketData.fromJSON(object.ibcTransferNftStayPacket);
        }
        else {
            message.ibcTransferNftStayPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.ibcTransferNftStayPacket !== undefined &&
            (obj.ibcTransferNftStayPacket = message.ibcTransferNftStayPacket ? IbcTransferNftStayPacketData.toJSON(message.ibcTransferNftStayPacket) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNftstaysPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcTransferNftStayPacket !== undefined && object.ibcTransferNftStayPacket !== null) {
            message.ibcTransferNftStayPacket = IbcTransferNftStayPacketData.fromPartial(object.ibcTransferNftStayPacket);
        }
        else {
            message.ibcTransferNftStayPacket = undefined;
        }
        return message;
    }
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    }
};
const baseIbcTransferNftStayPacketData = { sID: '', nftStorageCID: '', creator: '' };
export const IbcTransferNftStayPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.sID !== '') {
            writer.uint32(10).string(message.sID);
        }
        if (message.nftStorageCID !== '') {
            writer.uint32(18).string(message.nftStorageCID);
        }
        if (message.creator !== '') {
            writer.uint32(26).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcTransferNftStayPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.nftStorageCID = reader.string();
                    break;
                case 3:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcTransferNftStayPacketData };
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sID !== undefined && (obj.sID = message.sID);
        message.nftStorageCID !== undefined && (obj.nftStorageCID = message.nftStorageCID);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcTransferNftStayPacketData };
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
const baseIbcTransferNftStayPacketAck = { sID: '' };
export const IbcTransferNftStayPacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.sID !== '') {
            writer.uint32(10).string(message.sID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcTransferNftStayPacketAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcTransferNftStayPacketAck };
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = String(object.sID);
        }
        else {
            message.sID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sID !== undefined && (obj.sID = message.sID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcTransferNftStayPacketAck };
        if (object.sID !== undefined && object.sID !== null) {
            message.sID = object.sID;
        }
        else {
            message.sID = '';
        }
        return message;
    }
};
