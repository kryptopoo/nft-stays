/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Market } from '../nftstays/market'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { NftStay } from '../nftstays/nftStay'

export const protobufPackage = 'kryptopoo.marketplace.nftstays'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMarketRequest {
  id: number
}

export interface QueryGetMarketResponse {
  Market: Market | undefined
}

export interface QueryAllMarketRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllMarketResponse {
  Market: Market[]
  pagination: PageResponse | undefined
}

export interface QueryGetNftStayRequest {
  id: number
}

export interface QueryGetNftStayResponse {
  NftStay: NftStay | undefined
}

export interface QueryAllNftStayRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllNftStayResponse {
  NftStay: NftStay[]
  pagination: PageResponse | undefined
}

const baseQueryGetMarketRequest: object = { id: 0 }

export const QueryGetMarketRequest = {
  encode(message: QueryGetMarketRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMarketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMarketRequest {
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetMarketRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest {
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetMarketResponse: object = {}

export const QueryGetMarketResponse = {
  encode(message: QueryGetMarketResponse, writer: Writer = Writer.create()): Writer {
    if (message.Market !== undefined) {
      Market.encode(message.Market, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMarketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Market = Market.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMarketResponse {
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse
    if (object.Market !== undefined && object.Market !== null) {
      message.Market = Market.fromJSON(object.Market)
    } else {
      message.Market = undefined
    }
    return message
  },

  toJSON(message: QueryGetMarketResponse): unknown {
    const obj: any = {}
    message.Market !== undefined && (obj.Market = message.Market ? Market.toJSON(message.Market) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse {
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse
    if (object.Market !== undefined && object.Market !== null) {
      message.Market = Market.fromPartial(object.Market)
    } else {
      message.Market = undefined
    }
    return message
  }
}

const baseQueryAllMarketRequest: object = {}

export const QueryAllMarketRequest = {
  encode(message: QueryAllMarketRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMarketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllMarketRequest {
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMarketRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest {
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllMarketResponse: object = {}

export const QueryAllMarketResponse = {
  encode(message: QueryAllMarketResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Market) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMarketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse
    message.Market = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Market.push(Market.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllMarketResponse {
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse
    message.Market = []
    if (object.Market !== undefined && object.Market !== null) {
      for (const e of object.Market) {
        message.Market.push(Market.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMarketResponse): unknown {
    const obj: any = {}
    if (message.Market) {
      obj.Market = message.Market.map((e) => (e ? Market.toJSON(e) : undefined))
    } else {
      obj.Market = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse {
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse
    message.Market = []
    if (object.Market !== undefined && object.Market !== null) {
      for (const e of object.Market) {
        message.Market.push(Market.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetNftStayRequest: object = { id: 0 }

export const QueryGetNftStayRequest = {
  encode(message: QueryGetNftStayRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftStayRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetNftStayRequest } as QueryGetNftStayRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetNftStayRequest {
    const message = { ...baseQueryGetNftStayRequest } as QueryGetNftStayRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetNftStayRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetNftStayRequest>): QueryGetNftStayRequest {
    const message = { ...baseQueryGetNftStayRequest } as QueryGetNftStayRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetNftStayResponse: object = {}

export const QueryGetNftStayResponse = {
  encode(message: QueryGetNftStayResponse, writer: Writer = Writer.create()): Writer {
    if (message.NftStay !== undefined) {
      NftStay.encode(message.NftStay, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetNftStayResponse } as QueryGetNftStayResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.NftStay = NftStay.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetNftStayResponse {
    const message = { ...baseQueryGetNftStayResponse } as QueryGetNftStayResponse
    if (object.NftStay !== undefined && object.NftStay !== null) {
      message.NftStay = NftStay.fromJSON(object.NftStay)
    } else {
      message.NftStay = undefined
    }
    return message
  },

  toJSON(message: QueryGetNftStayResponse): unknown {
    const obj: any = {}
    message.NftStay !== undefined && (obj.NftStay = message.NftStay ? NftStay.toJSON(message.NftStay) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetNftStayResponse>): QueryGetNftStayResponse {
    const message = { ...baseQueryGetNftStayResponse } as QueryGetNftStayResponse
    if (object.NftStay !== undefined && object.NftStay !== null) {
      message.NftStay = NftStay.fromPartial(object.NftStay)
    } else {
      message.NftStay = undefined
    }
    return message
  }
}

const baseQueryAllNftStayRequest: object = {}

export const QueryAllNftStayRequest = {
  encode(message: QueryAllNftStayRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftStayRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllNftStayRequest } as QueryAllNftStayRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllNftStayRequest {
    const message = { ...baseQueryAllNftStayRequest } as QueryAllNftStayRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllNftStayRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllNftStayRequest>): QueryAllNftStayRequest {
    const message = { ...baseQueryAllNftStayRequest } as QueryAllNftStayRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllNftStayResponse: object = {}

export const QueryAllNftStayResponse = {
  encode(message: QueryAllNftStayResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.NftStay) {
      NftStay.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllNftStayResponse } as QueryAllNftStayResponse
    message.NftStay = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.NftStay.push(NftStay.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllNftStayResponse {
    const message = { ...baseQueryAllNftStayResponse } as QueryAllNftStayResponse
    message.NftStay = []
    if (object.NftStay !== undefined && object.NftStay !== null) {
      for (const e of object.NftStay) {
        message.NftStay.push(NftStay.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllNftStayResponse): unknown {
    const obj: any = {}
    if (message.NftStay) {
      obj.NftStay = message.NftStay.map((e) => (e ? NftStay.toJSON(e) : undefined))
    } else {
      obj.NftStay = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllNftStayResponse>): QueryAllNftStayResponse {
    const message = { ...baseQueryAllNftStayResponse } as QueryAllNftStayResponse
    message.NftStay = []
    if (object.NftStay !== undefined && object.NftStay !== null) {
      for (const e of object.NftStay) {
        message.NftStay.push(NftStay.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a market by id. */
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>
  /** Queries a list of market items. */
  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse>
  /** Queries a nftStay by id. */
  NftStay(request: QueryGetNftStayRequest): Promise<QueryGetNftStayResponse>
  /** Queries a list of nftStay items. */
  NftStayAll(request: QueryAllNftStayRequest): Promise<QueryAllNftStayResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
    const data = QueryGetMarketRequest.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'Market', data)
    return promise.then((data) => QueryGetMarketResponse.decode(new Reader(data)))
  }

  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse> {
    const data = QueryAllMarketRequest.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'MarketAll', data)
    return promise.then((data) => QueryAllMarketResponse.decode(new Reader(data)))
  }

  NftStay(request: QueryGetNftStayRequest): Promise<QueryGetNftStayResponse> {
    const data = QueryGetNftStayRequest.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'NftStay', data)
    return promise.then((data) => QueryGetNftStayResponse.decode(new Reader(data)))
  }

  NftStayAll(request: QueryAllNftStayRequest): Promise<QueryAllNftStayResponse> {
    const data = QueryAllNftStayRequest.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Query', 'NftStayAll', data)
    return promise.then((data) => QueryAllNftStayResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
