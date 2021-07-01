/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'kryptopoo.marketplace.nftstays'

export interface NftstaysPacketData {
  noData: NoData | undefined
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcTransferNftStayPacket: IbcTransferNftStayPacketData | undefined
}

export interface NoData {}

/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcTransferNftStayPacketData defines a struct for the packet payload
 */
export interface IbcTransferNftStayPacketData {
  sID: string
  nftStorageCID: string
  creator: string
}

/** IbcTransferNftStayPacketAck defines a struct for the packet acknowledgment */
export interface IbcTransferNftStayPacketAck {
  sID: string
}

const baseNftstaysPacketData: object = {}

export const NftstaysPacketData = {
  encode(message: NftstaysPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim()
    }
    if (message.ibcTransferNftStayPacket !== undefined) {
      IbcTransferNftStayPacketData.encode(message.ibcTransferNftStayPacket, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): NftstaysPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNftstaysPacketData } as NftstaysPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32())
          break
        case 2:
          message.ibcTransferNftStayPacket = IbcTransferNftStayPacketData.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): NftstaysPacketData {
    const message = { ...baseNftstaysPacketData } as NftstaysPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.ibcTransferNftStayPacket !== undefined && object.ibcTransferNftStayPacket !== null) {
      message.ibcTransferNftStayPacket = IbcTransferNftStayPacketData.fromJSON(object.ibcTransferNftStayPacket)
    } else {
      message.ibcTransferNftStayPacket = undefined
    }
    return message
  },

  toJSON(message: NftstaysPacketData): unknown {
    const obj: any = {}
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined)
    message.ibcTransferNftStayPacket !== undefined &&
      (obj.ibcTransferNftStayPacket = message.ibcTransferNftStayPacket ? IbcTransferNftStayPacketData.toJSON(message.ibcTransferNftStayPacket) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<NftstaysPacketData>): NftstaysPacketData {
    const message = { ...baseNftstaysPacketData } as NftstaysPacketData
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData)
    } else {
      message.noData = undefined
    }
    if (object.ibcTransferNftStayPacket !== undefined && object.ibcTransferNftStayPacket !== null) {
      message.ibcTransferNftStayPacket = IbcTransferNftStayPacketData.fromPartial(object.ibcTransferNftStayPacket)
    } else {
      message.ibcTransferNftStayPacket = undefined
    }
    return message
  }
}

const baseNoData: object = {}

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNoData } as NoData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData
    return message
  },

  toJSON(_: NoData): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData
    return message
  }
}

const baseIbcTransferNftStayPacketData: object = { sID: '', nftStorageCID: '', creator: '' }

export const IbcTransferNftStayPacketData = {
  encode(message: IbcTransferNftStayPacketData, writer: Writer = Writer.create()): Writer {
    if (message.sID !== '') {
      writer.uint32(10).string(message.sID)
    }
    if (message.nftStorageCID !== '') {
      writer.uint32(18).string(message.nftStorageCID)
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcTransferNftStayPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcTransferNftStayPacketData } as IbcTransferNftStayPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sID = reader.string()
          break
        case 2:
          message.nftStorageCID = reader.string()
          break
        case 3:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcTransferNftStayPacketData {
    const message = { ...baseIbcTransferNftStayPacketData } as IbcTransferNftStayPacketData
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.nftStorageCID !== undefined && object.nftStorageCID !== null) {
      message.nftStorageCID = String(object.nftStorageCID)
    } else {
      message.nftStorageCID = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: IbcTransferNftStayPacketData): unknown {
    const obj: any = {}
    message.sID !== undefined && (obj.sID = message.sID)
    message.nftStorageCID !== undefined && (obj.nftStorageCID = message.nftStorageCID)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<IbcTransferNftStayPacketData>): IbcTransferNftStayPacketData {
    const message = { ...baseIbcTransferNftStayPacketData } as IbcTransferNftStayPacketData
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.nftStorageCID !== undefined && object.nftStorageCID !== null) {
      message.nftStorageCID = object.nftStorageCID
    } else {
      message.nftStorageCID = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseIbcTransferNftStayPacketAck: object = { sID: '' }

export const IbcTransferNftStayPacketAck = {
  encode(message: IbcTransferNftStayPacketAck, writer: Writer = Writer.create()): Writer {
    if (message.sID !== '') {
      writer.uint32(10).string(message.sID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): IbcTransferNftStayPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseIbcTransferNftStayPacketAck } as IbcTransferNftStayPacketAck
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IbcTransferNftStayPacketAck {
    const message = { ...baseIbcTransferNftStayPacketAck } as IbcTransferNftStayPacketAck
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    return message
  },

  toJSON(message: IbcTransferNftStayPacketAck): unknown {
    const obj: any = {}
    message.sID !== undefined && (obj.sID = message.sID)
    return obj
  },

  fromPartial(object: DeepPartial<IbcTransferNftStayPacketAck>): IbcTransferNftStayPacketAck {
    const message = { ...baseIbcTransferNftStayPacketAck } as IbcTransferNftStayPacketAck
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
