/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'kryptopoo.marketplace.nftstays'

export interface Market {
  creator: string
  id: number
  sID: string
  price: number
  status: string
  seller: string
  onAuction: boolean
  offers: string
  expired: number
}

const baseMarket: object = { creator: '', id: 0, sID: '', price: 0, status: '', seller: '', onAuction: false, offers: '', expired: 0 }

export const Market = {
  encode(message: Market, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.sID !== '') {
      writer.uint32(26).string(message.sID)
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price)
    }
    if (message.status !== '') {
      writer.uint32(42).string(message.status)
    }
    if (message.seller !== '') {
      writer.uint32(50).string(message.seller)
    }
    if (message.onAuction === true) {
      writer.uint32(56).bool(message.onAuction)
    }
    if (message.offers !== '') {
      writer.uint32(66).string(message.offers)
    }
    if (message.expired !== 0) {
      writer.uint32(72).int32(message.expired)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMarket } as Market
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.sID = reader.string()
          break
        case 4:
          message.price = reader.int32()
          break
        case 5:
          message.status = reader.string()
          break
        case 6:
          message.seller = reader.string()
          break
        case 7:
          message.onAuction = reader.bool()
          break
        case 8:
          message.offers = reader.string()
          break
        case 9:
          message.expired = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Market {
    const message = { ...baseMarket } as Market
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price)
    } else {
      message.price = 0
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status)
    } else {
      message.status = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller)
    } else {
      message.seller = ''
    }
    if (object.onAuction !== undefined && object.onAuction !== null) {
      message.onAuction = Boolean(object.onAuction)
    } else {
      message.onAuction = false
    }
    if (object.offers !== undefined && object.offers !== null) {
      message.offers = String(object.offers)
    } else {
      message.offers = ''
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = Number(object.expired)
    } else {
      message.expired = 0
    }
    return message
  },

  toJSON(message: Market): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.sID !== undefined && (obj.sID = message.sID)
    message.price !== undefined && (obj.price = message.price)
    message.status !== undefined && (obj.status = message.status)
    message.seller !== undefined && (obj.seller = message.seller)
    message.onAuction !== undefined && (obj.onAuction = message.onAuction)
    message.offers !== undefined && (obj.offers = message.offers)
    message.expired !== undefined && (obj.expired = message.expired)
    return obj
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = { ...baseMarket } as Market
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = 0
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller
    } else {
      message.seller = ''
    }
    if (object.onAuction !== undefined && object.onAuction !== null) {
      message.onAuction = object.onAuction
    } else {
      message.onAuction = false
    }
    if (object.offers !== undefined && object.offers !== null) {
      message.offers = object.offers
    } else {
      message.offers = ''
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = object.expired
    } else {
      message.expired = 0
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
