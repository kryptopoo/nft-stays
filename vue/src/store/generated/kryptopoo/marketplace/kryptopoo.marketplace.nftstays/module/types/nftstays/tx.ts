/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'kryptopoo.marketplace.nftstays'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendIbcTransferNftStay {
  sender: string
  port: string
  channelID: string
  timeoutTimestamp: number
  sID: string
  nftStorageCID: string
}

export interface MsgSendIbcTransferNftStayResponse {}

export interface MsgUnsellNftStay {
  creator: string
  marketId: string
  seller: string
}

export interface MsgUnsellNftStayResponse {}

export interface MsgClaimNftStay {
  creator: string
  marketId: string
  buyer: string
}

export interface MsgClaimNftStayResponse {}

export interface MsgBidNftStay {
  creator: string
  marketId: string
  buyer: string
  price: number
}

export interface MsgBidNftStayResponse {}

export interface MsgBuyNftStay {
  creator: string
  marketId: string
  buyer: string
}

export interface MsgBuyNftStayResponse {}

export interface MsgSellNftStay {
  creator: string
  sID: string
  seller: string
  price: number
  onAuction: boolean
  expired: number
}

export interface MsgSellNftStayResponse {}

export interface MsgCreateMarket {
  creator: string
  sID: string
  price: number
  status: string
  seller: string
  onAuction: boolean
  offers: string
  expired: number
}

export interface MsgCreateMarketResponse {
  id: number
}

export interface MsgUpdateMarket {
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

export interface MsgUpdateMarketResponse {}

export interface MsgDeleteMarket {
  creator: string
  id: number
}

export interface MsgDeleteMarketResponse {}

export interface MsgTransferNftStay {
  creator: string
  sender: string
  recipient: string
  sID: string
  denom: string
}

export interface MsgTransferNftStayResponse {}

export interface MsgBurnNftStay {
  creator: string
  sender: string
  sID: string
  denom: string
}

export interface MsgBurnNftStayResponse {}

export interface MsgMintNftStay {
  creator: string
  sender: string
  recipient: string
  sID: string
  denom: string
  name: string
  description: string
  image: string
  tokenUri: string
}

export interface MsgMintNftStayResponse {}

export interface MsgCreateNftStay {
  creator: string
  sID: string
  owner: string
  name: string
  description: string
  image: string
  tokenUri: string
}

export interface MsgCreateNftStayResponse {
  id: number
}

export interface MsgUpdateNftStay {
  creator: string
  id: number
  sID: string
  owner: string
  name: string
  description: string
  image: string
  tokenUri: string
}

export interface MsgUpdateNftStayResponse {}

export interface MsgDeleteNftStay {
  creator: string
  id: number
}

export interface MsgDeleteNftStayResponse {}

const baseMsgSendIbcTransferNftStay: object = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, sID: '', nftStorageCID: '' }

export const MsgSendIbcTransferNftStay = {
  encode(message: MsgSendIbcTransferNftStay, writer: Writer = Writer.create()): Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.port !== '') {
      writer.uint32(18).string(message.port)
    }
    if (message.channelID !== '') {
      writer.uint32(26).string(message.channelID)
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp)
    }
    if (message.sID !== '') {
      writer.uint32(42).string(message.sID)
    }
    if (message.nftStorageCID !== '') {
      writer.uint32(50).string(message.nftStorageCID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcTransferNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendIbcTransferNftStay } as MsgSendIbcTransferNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.port = reader.string()
          break
        case 3:
          message.channelID = reader.string()
          break
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.sID = reader.string()
          break
        case 6:
          message.nftStorageCID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendIbcTransferNftStay {
    const message = { ...baseMsgSendIbcTransferNftStay } as MsgSendIbcTransferNftStay
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port)
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp)
    } else {
      message.timeoutTimestamp = 0
    }
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
    return message
  },

  toJSON(message: MsgSendIbcTransferNftStay): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.port !== undefined && (obj.port = message.port)
    message.channelID !== undefined && (obj.channelID = message.channelID)
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp)
    message.sID !== undefined && (obj.sID = message.sID)
    message.nftStorageCID !== undefined && (obj.nftStorageCID = message.nftStorageCID)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendIbcTransferNftStay>): MsgSendIbcTransferNftStay {
    const message = { ...baseMsgSendIbcTransferNftStay } as MsgSendIbcTransferNftStay
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port
    } else {
      message.port = ''
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = object.timeoutTimestamp
    } else {
      message.timeoutTimestamp = 0
    }
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
    return message
  }
}

const baseMsgSendIbcTransferNftStayResponse: object = {}

export const MsgSendIbcTransferNftStayResponse = {
  encode(_: MsgSendIbcTransferNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcTransferNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendIbcTransferNftStayResponse } as MsgSendIbcTransferNftStayResponse
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

  fromJSON(_: any): MsgSendIbcTransferNftStayResponse {
    const message = { ...baseMsgSendIbcTransferNftStayResponse } as MsgSendIbcTransferNftStayResponse
    return message
  },

  toJSON(_: MsgSendIbcTransferNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSendIbcTransferNftStayResponse>): MsgSendIbcTransferNftStayResponse {
    const message = { ...baseMsgSendIbcTransferNftStayResponse } as MsgSendIbcTransferNftStayResponse
    return message
  }
}

const baseMsgUnsellNftStay: object = { creator: '', marketId: '', seller: '' }

export const MsgUnsellNftStay = {
  encode(message: MsgUnsellNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.marketId !== '') {
      writer.uint32(18).string(message.marketId)
    }
    if (message.seller !== '') {
      writer.uint32(26).string(message.seller)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnsellNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnsellNftStay } as MsgUnsellNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.marketId = reader.string()
          break
        case 3:
          message.seller = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUnsellNftStay {
    const message = { ...baseMsgUnsellNftStay } as MsgUnsellNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = String(object.marketId)
    } else {
      message.marketId = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller)
    } else {
      message.seller = ''
    }
    return message
  },

  toJSON(message: MsgUnsellNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.marketId !== undefined && (obj.marketId = message.marketId)
    message.seller !== undefined && (obj.seller = message.seller)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUnsellNftStay>): MsgUnsellNftStay {
    const message = { ...baseMsgUnsellNftStay } as MsgUnsellNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId
    } else {
      message.marketId = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller
    } else {
      message.seller = ''
    }
    return message
  }
}

const baseMsgUnsellNftStayResponse: object = {}

export const MsgUnsellNftStayResponse = {
  encode(_: MsgUnsellNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnsellNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnsellNftStayResponse } as MsgUnsellNftStayResponse
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

  fromJSON(_: any): MsgUnsellNftStayResponse {
    const message = { ...baseMsgUnsellNftStayResponse } as MsgUnsellNftStayResponse
    return message
  },

  toJSON(_: MsgUnsellNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUnsellNftStayResponse>): MsgUnsellNftStayResponse {
    const message = { ...baseMsgUnsellNftStayResponse } as MsgUnsellNftStayResponse
    return message
  }
}

const baseMsgClaimNftStay: object = { creator: '', marketId: '', buyer: '' }

export const MsgClaimNftStay = {
  encode(message: MsgClaimNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.marketId !== '') {
      writer.uint32(18).string(message.marketId)
    }
    if (message.buyer !== '') {
      writer.uint32(26).string(message.buyer)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgClaimNftStay } as MsgClaimNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.marketId = reader.string()
          break
        case 3:
          message.buyer = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgClaimNftStay {
    const message = { ...baseMsgClaimNftStay } as MsgClaimNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = String(object.marketId)
    } else {
      message.marketId = ''
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer)
    } else {
      message.buyer = ''
    }
    return message
  },

  toJSON(message: MsgClaimNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.marketId !== undefined && (obj.marketId = message.marketId)
    message.buyer !== undefined && (obj.buyer = message.buyer)
    return obj
  },

  fromPartial(object: DeepPartial<MsgClaimNftStay>): MsgClaimNftStay {
    const message = { ...baseMsgClaimNftStay } as MsgClaimNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId
    } else {
      message.marketId = ''
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer
    } else {
      message.buyer = ''
    }
    return message
  }
}

const baseMsgClaimNftStayResponse: object = {}

export const MsgClaimNftStayResponse = {
  encode(_: MsgClaimNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgClaimNftStayResponse } as MsgClaimNftStayResponse
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

  fromJSON(_: any): MsgClaimNftStayResponse {
    const message = { ...baseMsgClaimNftStayResponse } as MsgClaimNftStayResponse
    return message
  },

  toJSON(_: MsgClaimNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgClaimNftStayResponse>): MsgClaimNftStayResponse {
    const message = { ...baseMsgClaimNftStayResponse } as MsgClaimNftStayResponse
    return message
  }
}

const baseMsgBidNftStay: object = { creator: '', marketId: '', buyer: '', price: 0 }

export const MsgBidNftStay = {
  encode(message: MsgBidNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.marketId !== '') {
      writer.uint32(18).string(message.marketId)
    }
    if (message.buyer !== '') {
      writer.uint32(26).string(message.buyer)
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBidNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBidNftStay } as MsgBidNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.marketId = reader.string()
          break
        case 3:
          message.buyer = reader.string()
          break
        case 4:
          message.price = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBidNftStay {
    const message = { ...baseMsgBidNftStay } as MsgBidNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = String(object.marketId)
    } else {
      message.marketId = ''
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer)
    } else {
      message.buyer = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price)
    } else {
      message.price = 0
    }
    return message
  },

  toJSON(message: MsgBidNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.marketId !== undefined && (obj.marketId = message.marketId)
    message.buyer !== undefined && (obj.buyer = message.buyer)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBidNftStay>): MsgBidNftStay {
    const message = { ...baseMsgBidNftStay } as MsgBidNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId
    } else {
      message.marketId = ''
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer
    } else {
      message.buyer = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = 0
    }
    return message
  }
}

const baseMsgBidNftStayResponse: object = {}

export const MsgBidNftStayResponse = {
  encode(_: MsgBidNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBidNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBidNftStayResponse } as MsgBidNftStayResponse
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

  fromJSON(_: any): MsgBidNftStayResponse {
    const message = { ...baseMsgBidNftStayResponse } as MsgBidNftStayResponse
    return message
  },

  toJSON(_: MsgBidNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBidNftStayResponse>): MsgBidNftStayResponse {
    const message = { ...baseMsgBidNftStayResponse } as MsgBidNftStayResponse
    return message
  }
}

const baseMsgBuyNftStay: object = { creator: '', marketId: '', buyer: '' }

export const MsgBuyNftStay = {
  encode(message: MsgBuyNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.marketId !== '') {
      writer.uint32(18).string(message.marketId)
    }
    if (message.buyer !== '') {
      writer.uint32(26).string(message.buyer)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyNftStay } as MsgBuyNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.marketId = reader.string()
          break
        case 3:
          message.buyer = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBuyNftStay {
    const message = { ...baseMsgBuyNftStay } as MsgBuyNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = String(object.marketId)
    } else {
      message.marketId = ''
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer)
    } else {
      message.buyer = ''
    }
    return message
  },

  toJSON(message: MsgBuyNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.marketId !== undefined && (obj.marketId = message.marketId)
    message.buyer !== undefined && (obj.buyer = message.buyer)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuyNftStay>): MsgBuyNftStay {
    const message = { ...baseMsgBuyNftStay } as MsgBuyNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId
    } else {
      message.marketId = ''
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer
    } else {
      message.buyer = ''
    }
    return message
  }
}

const baseMsgBuyNftStayResponse: object = {}

export const MsgBuyNftStayResponse = {
  encode(_: MsgBuyNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyNftStayResponse } as MsgBuyNftStayResponse
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

  fromJSON(_: any): MsgBuyNftStayResponse {
    const message = { ...baseMsgBuyNftStayResponse } as MsgBuyNftStayResponse
    return message
  },

  toJSON(_: MsgBuyNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBuyNftStayResponse>): MsgBuyNftStayResponse {
    const message = { ...baseMsgBuyNftStayResponse } as MsgBuyNftStayResponse
    return message
  }
}

const baseMsgSellNftStay: object = { creator: '', sID: '', seller: '', price: 0, onAuction: false, expired: 0 }

export const MsgSellNftStay = {
  encode(message: MsgSellNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sID !== '') {
      writer.uint32(18).string(message.sID)
    }
    if (message.seller !== '') {
      writer.uint32(26).string(message.seller)
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price)
    }
    if (message.onAuction === true) {
      writer.uint32(40).bool(message.onAuction)
    }
    if (message.expired !== 0) {
      writer.uint32(48).int32(message.expired)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSellNftStay } as MsgSellNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sID = reader.string()
          break
        case 3:
          message.seller = reader.string()
          break
        case 4:
          message.price = reader.int32()
          break
        case 5:
          message.onAuction = reader.bool()
          break
        case 6:
          message.expired = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSellNftStay {
    const message = { ...baseMsgSellNftStay } as MsgSellNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller)
    } else {
      message.seller = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price)
    } else {
      message.price = 0
    }
    if (object.onAuction !== undefined && object.onAuction !== null) {
      message.onAuction = Boolean(object.onAuction)
    } else {
      message.onAuction = false
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = Number(object.expired)
    } else {
      message.expired = 0
    }
    return message
  },

  toJSON(message: MsgSellNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sID !== undefined && (obj.sID = message.sID)
    message.seller !== undefined && (obj.seller = message.seller)
    message.price !== undefined && (obj.price = message.price)
    message.onAuction !== undefined && (obj.onAuction = message.onAuction)
    message.expired !== undefined && (obj.expired = message.expired)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSellNftStay>): MsgSellNftStay {
    const message = { ...baseMsgSellNftStay } as MsgSellNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller
    } else {
      message.seller = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = 0
    }
    if (object.onAuction !== undefined && object.onAuction !== null) {
      message.onAuction = object.onAuction
    } else {
      message.onAuction = false
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = object.expired
    } else {
      message.expired = 0
    }
    return message
  }
}

const baseMsgSellNftStayResponse: object = {}

export const MsgSellNftStayResponse = {
  encode(_: MsgSellNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSellNftStayResponse } as MsgSellNftStayResponse
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

  fromJSON(_: any): MsgSellNftStayResponse {
    const message = { ...baseMsgSellNftStayResponse } as MsgSellNftStayResponse
    return message
  },

  toJSON(_: MsgSellNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSellNftStayResponse>): MsgSellNftStayResponse {
    const message = { ...baseMsgSellNftStayResponse } as MsgSellNftStayResponse
    return message
  }
}

const baseMsgCreateMarket: object = { creator: '', sID: '', price: 0, status: '', seller: '', onAuction: false, offers: '', expired: 0 }

export const MsgCreateMarket = {
  encode(message: MsgCreateMarket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sID !== '') {
      writer.uint32(18).string(message.sID)
    }
    if (message.price !== 0) {
      writer.uint32(24).int32(message.price)
    }
    if (message.status !== '') {
      writer.uint32(34).string(message.status)
    }
    if (message.seller !== '') {
      writer.uint32(42).string(message.seller)
    }
    if (message.onAuction === true) {
      writer.uint32(48).bool(message.onAuction)
    }
    if (message.offers !== '') {
      writer.uint32(58).string(message.offers)
    }
    if (message.expired !== 0) {
      writer.uint32(64).int32(message.expired)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sID = reader.string()
          break
        case 3:
          message.price = reader.int32()
          break
        case 4:
          message.status = reader.string()
          break
        case 5:
          message.seller = reader.string()
          break
        case 6:
          message.onAuction = reader.bool()
          break
        case 7:
          message.offers = reader.string()
          break
        case 8:
          message.expired = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateMarket): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sID !== undefined && (obj.sID = message.sID)
    message.price !== undefined && (obj.price = message.price)
    message.status !== undefined && (obj.status = message.status)
    message.seller !== undefined && (obj.seller = message.seller)
    message.onAuction !== undefined && (obj.onAuction = message.onAuction)
    message.offers !== undefined && (obj.offers = message.offers)
    message.expired !== undefined && (obj.expired = message.expired)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateMarketResponse: object = { id: 0 }

export const MsgCreateMarketResponse = {
  encode(message: MsgCreateMarketResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMarketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateMarketResponse } as MsgCreateMarketResponse
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

  fromJSON(object: any): MsgCreateMarketResponse {
    const message = { ...baseMsgCreateMarketResponse } as MsgCreateMarketResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateMarketResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse {
    const message = { ...baseMsgCreateMarketResponse } as MsgCreateMarketResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateMarket: object = { creator: '', id: 0, sID: '', price: 0, status: '', seller: '', onAuction: false, offers: '', expired: 0 }

export const MsgUpdateMarket = {
  encode(message: MsgUpdateMarket, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMarket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket
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

  fromJSON(object: any): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket
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

  toJSON(message: MsgUpdateMarket): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket
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

const baseMsgUpdateMarketResponse: object = {}

export const MsgUpdateMarketResponse = {
  encode(_: MsgUpdateMarketResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMarketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateMarketResponse } as MsgUpdateMarketResponse
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

  fromJSON(_: any): MsgUpdateMarketResponse {
    const message = { ...baseMsgUpdateMarketResponse } as MsgUpdateMarketResponse
    return message
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse {
    const message = { ...baseMsgUpdateMarketResponse } as MsgUpdateMarketResponse
    return message
  }
}

const baseMsgDeleteMarket: object = { creator: '', id: 0 }

export const MsgDeleteMarket = {
  encode(message: MsgDeleteMarket, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMarket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteMarket } as MsgDeleteMarket
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteMarket {
    const message = { ...baseMsgDeleteMarket } as MsgDeleteMarket
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
    return message
  },

  toJSON(message: MsgDeleteMarket): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteMarket>): MsgDeleteMarket {
    const message = { ...baseMsgDeleteMarket } as MsgDeleteMarket
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
    return message
  }
}

const baseMsgDeleteMarketResponse: object = {}

export const MsgDeleteMarketResponse = {
  encode(_: MsgDeleteMarketResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMarketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteMarketResponse } as MsgDeleteMarketResponse
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

  fromJSON(_: any): MsgDeleteMarketResponse {
    const message = { ...baseMsgDeleteMarketResponse } as MsgDeleteMarketResponse
    return message
  },

  toJSON(_: MsgDeleteMarketResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteMarketResponse>): MsgDeleteMarketResponse {
    const message = { ...baseMsgDeleteMarketResponse } as MsgDeleteMarketResponse
    return message
  }
}

const baseMsgTransferNftStay: object = { creator: '', sender: '', recipient: '', sID: '', denom: '' }

export const MsgTransferNftStay = {
  encode(message: MsgTransferNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    if (message.recipient !== '') {
      writer.uint32(26).string(message.recipient)
    }
    if (message.sID !== '') {
      writer.uint32(34).string(message.sID)
    }
    if (message.denom !== '') {
      writer.uint32(42).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgTransferNftStay } as MsgTransferNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sender = reader.string()
          break
        case 3:
          message.recipient = reader.string()
          break
        case 4:
          message.sID = reader.string()
          break
        case 5:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgTransferNftStay {
    const message = { ...baseMsgTransferNftStay } as MsgTransferNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    return message
  },

  toJSON(message: MsgTransferNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sender !== undefined && (obj.sender = message.sender)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    message.sID !== undefined && (obj.sID = message.sID)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgTransferNftStay>): MsgTransferNftStay {
    const message = { ...baseMsgTransferNftStay } as MsgTransferNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    return message
  }
}

const baseMsgTransferNftStayResponse: object = {}

export const MsgTransferNftStayResponse = {
  encode(_: MsgTransferNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgTransferNftStayResponse } as MsgTransferNftStayResponse
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

  fromJSON(_: any): MsgTransferNftStayResponse {
    const message = { ...baseMsgTransferNftStayResponse } as MsgTransferNftStayResponse
    return message
  },

  toJSON(_: MsgTransferNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgTransferNftStayResponse>): MsgTransferNftStayResponse {
    const message = { ...baseMsgTransferNftStayResponse } as MsgTransferNftStayResponse
    return message
  }
}

const baseMsgBurnNftStay: object = { creator: '', sender: '', sID: '', denom: '' }

export const MsgBurnNftStay = {
  encode(message: MsgBurnNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    if (message.sID !== '') {
      writer.uint32(26).string(message.sID)
    }
    if (message.denom !== '') {
      writer.uint32(34).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBurnNftStay } as MsgBurnNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sender = reader.string()
          break
        case 3:
          message.sID = reader.string()
          break
        case 4:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBurnNftStay {
    const message = { ...baseMsgBurnNftStay } as MsgBurnNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    return message
  },

  toJSON(message: MsgBurnNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sender !== undefined && (obj.sender = message.sender)
    message.sID !== undefined && (obj.sID = message.sID)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBurnNftStay>): MsgBurnNftStay {
    const message = { ...baseMsgBurnNftStay } as MsgBurnNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    return message
  }
}

const baseMsgBurnNftStayResponse: object = {}

export const MsgBurnNftStayResponse = {
  encode(_: MsgBurnNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBurnNftStayResponse } as MsgBurnNftStayResponse
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

  fromJSON(_: any): MsgBurnNftStayResponse {
    const message = { ...baseMsgBurnNftStayResponse } as MsgBurnNftStayResponse
    return message
  },

  toJSON(_: MsgBurnNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBurnNftStayResponse>): MsgBurnNftStayResponse {
    const message = { ...baseMsgBurnNftStayResponse } as MsgBurnNftStayResponse
    return message
  }
}

const baseMsgMintNftStay: object = { creator: '', sender: '', recipient: '', sID: '', denom: '', name: '', description: '', image: '', tokenUri: '' }

export const MsgMintNftStay = {
  encode(message: MsgMintNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    if (message.recipient !== '') {
      writer.uint32(26).string(message.recipient)
    }
    if (message.sID !== '') {
      writer.uint32(34).string(message.sID)
    }
    if (message.denom !== '') {
      writer.uint32(42).string(message.denom)
    }
    if (message.name !== '') {
      writer.uint32(50).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(58).string(message.description)
    }
    if (message.image !== '') {
      writer.uint32(66).string(message.image)
    }
    if (message.tokenUri !== '') {
      writer.uint32(74).string(message.tokenUri)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintNftStay } as MsgMintNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sender = reader.string()
          break
        case 3:
          message.recipient = reader.string()
          break
        case 4:
          message.sID = reader.string()
          break
        case 5:
          message.denom = reader.string()
          break
        case 6:
          message.name = reader.string()
          break
        case 7:
          message.description = reader.string()
          break
        case 8:
          message.image = reader.string()
          break
        case 9:
          message.tokenUri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgMintNftStay {
    const message = { ...baseMsgMintNftStay } as MsgMintNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image)
    } else {
      message.image = ''
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = String(object.tokenUri)
    } else {
      message.tokenUri = ''
    }
    return message
  },

  toJSON(message: MsgMintNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sender !== undefined && (obj.sender = message.sender)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    message.sID !== undefined && (obj.sID = message.sID)
    message.denom !== undefined && (obj.denom = message.denom)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.image !== undefined && (obj.image = message.image)
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri)
    return obj
  },

  fromPartial(object: DeepPartial<MsgMintNftStay>): MsgMintNftStay {
    const message = { ...baseMsgMintNftStay } as MsgMintNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image
    } else {
      message.image = ''
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = object.tokenUri
    } else {
      message.tokenUri = ''
    }
    return message
  }
}

const baseMsgMintNftStayResponse: object = {}

export const MsgMintNftStayResponse = {
  encode(_: MsgMintNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintNftStayResponse } as MsgMintNftStayResponse
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

  fromJSON(_: any): MsgMintNftStayResponse {
    const message = { ...baseMsgMintNftStayResponse } as MsgMintNftStayResponse
    return message
  },

  toJSON(_: MsgMintNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgMintNftStayResponse>): MsgMintNftStayResponse {
    const message = { ...baseMsgMintNftStayResponse } as MsgMintNftStayResponse
    return message
  }
}

const baseMsgCreateNftStay: object = { creator: '', sID: '', owner: '', name: '', description: '', image: '', tokenUri: '' }

export const MsgCreateNftStay = {
  encode(message: MsgCreateNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.sID !== '') {
      writer.uint32(18).string(message.sID)
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
    }
    if (message.image !== '') {
      writer.uint32(50).string(message.image)
    }
    if (message.tokenUri !== '') {
      writer.uint32(58).string(message.tokenUri)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNftStay } as MsgCreateNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.sID = reader.string()
          break
        case 3:
          message.owner = reader.string()
          break
        case 4:
          message.name = reader.string()
          break
        case 5:
          message.description = reader.string()
          break
        case 6:
          message.image = reader.string()
          break
        case 7:
          message.tokenUri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateNftStay {
    const message = { ...baseMsgCreateNftStay } as MsgCreateNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = String(object.sID)
    } else {
      message.sID = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image)
    } else {
      message.image = ''
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = String(object.tokenUri)
    } else {
      message.tokenUri = ''
    }
    return message
  },

  toJSON(message: MsgCreateNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.sID !== undefined && (obj.sID = message.sID)
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.image !== undefined && (obj.image = message.image)
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateNftStay>): MsgCreateNftStay {
    const message = { ...baseMsgCreateNftStay } as MsgCreateNftStay
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.sID !== undefined && object.sID !== null) {
      message.sID = object.sID
    } else {
      message.sID = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image
    } else {
      message.image = ''
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = object.tokenUri
    } else {
      message.tokenUri = ''
    }
    return message
  }
}

const baseMsgCreateNftStayResponse: object = { id: 0 }

export const MsgCreateNftStayResponse = {
  encode(message: MsgCreateNftStayResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNftStayResponse } as MsgCreateNftStayResponse
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

  fromJSON(object: any): MsgCreateNftStayResponse {
    const message = { ...baseMsgCreateNftStayResponse } as MsgCreateNftStayResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateNftStayResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateNftStayResponse>): MsgCreateNftStayResponse {
    const message = { ...baseMsgCreateNftStayResponse } as MsgCreateNftStayResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateNftStay: object = { creator: '', id: 0, sID: '', owner: '', name: '', description: '', image: '', tokenUri: '' }

export const MsgUpdateNftStay = {
  encode(message: MsgUpdateNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.sID !== '') {
      writer.uint32(26).string(message.sID)
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(50).string(message.description)
    }
    if (message.image !== '') {
      writer.uint32(58).string(message.image)
    }
    if (message.tokenUri !== '') {
      writer.uint32(66).string(message.tokenUri)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNftStay } as MsgUpdateNftStay
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
          message.owner = reader.string()
          break
        case 5:
          message.name = reader.string()
          break
        case 6:
          message.description = reader.string()
          break
        case 7:
          message.image = reader.string()
          break
        case 8:
          message.tokenUri = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateNftStay {
    const message = { ...baseMsgUpdateNftStay } as MsgUpdateNftStay
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image)
    } else {
      message.image = ''
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = String(object.tokenUri)
    } else {
      message.tokenUri = ''
    }
    return message
  },

  toJSON(message: MsgUpdateNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.sID !== undefined && (obj.sID = message.sID)
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    message.image !== undefined && (obj.image = message.image)
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateNftStay>): MsgUpdateNftStay {
    const message = { ...baseMsgUpdateNftStay } as MsgUpdateNftStay
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image
    } else {
      message.image = ''
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = object.tokenUri
    } else {
      message.tokenUri = ''
    }
    return message
  }
}

const baseMsgUpdateNftStayResponse: object = {}

export const MsgUpdateNftStayResponse = {
  encode(_: MsgUpdateNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNftStayResponse } as MsgUpdateNftStayResponse
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

  fromJSON(_: any): MsgUpdateNftStayResponse {
    const message = { ...baseMsgUpdateNftStayResponse } as MsgUpdateNftStayResponse
    return message
  },

  toJSON(_: MsgUpdateNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateNftStayResponse>): MsgUpdateNftStayResponse {
    const message = { ...baseMsgUpdateNftStayResponse } as MsgUpdateNftStayResponse
    return message
  }
}

const baseMsgDeleteNftStay: object = { creator: '', id: 0 }

export const MsgDeleteNftStay = {
  encode(message: MsgDeleteNftStay, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNftStay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteNftStay } as MsgDeleteNftStay
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteNftStay {
    const message = { ...baseMsgDeleteNftStay } as MsgDeleteNftStay
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
    return message
  },

  toJSON(message: MsgDeleteNftStay): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteNftStay>): MsgDeleteNftStay {
    const message = { ...baseMsgDeleteNftStay } as MsgDeleteNftStay
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
    return message
  }
}

const baseMsgDeleteNftStayResponse: object = {}

export const MsgDeleteNftStayResponse = {
  encode(_: MsgDeleteNftStayResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNftStayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteNftStayResponse } as MsgDeleteNftStayResponse
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

  fromJSON(_: any): MsgDeleteNftStayResponse {
    const message = { ...baseMsgDeleteNftStayResponse } as MsgDeleteNftStayResponse
    return message
  },

  toJSON(_: MsgDeleteNftStayResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteNftStayResponse>): MsgDeleteNftStayResponse {
    const message = { ...baseMsgDeleteNftStayResponse } as MsgDeleteNftStayResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendIbcTransferNftStay(request: MsgSendIbcTransferNftStay): Promise<MsgSendIbcTransferNftStayResponse>
  UnsellNftStay(request: MsgUnsellNftStay): Promise<MsgUnsellNftStayResponse>
  ClaimNftStay(request: MsgClaimNftStay): Promise<MsgClaimNftStayResponse>
  BidNftStay(request: MsgBidNftStay): Promise<MsgBidNftStayResponse>
  BuyNftStay(request: MsgBuyNftStay): Promise<MsgBuyNftStayResponse>
  SellNftStay(request: MsgSellNftStay): Promise<MsgSellNftStayResponse>
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>
  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>
  DeleteMarket(request: MsgDeleteMarket): Promise<MsgDeleteMarketResponse>
  TransferNftStay(request: MsgTransferNftStay): Promise<MsgTransferNftStayResponse>
  BurnNftStay(request: MsgBurnNftStay): Promise<MsgBurnNftStayResponse>
  MintNftStay(request: MsgMintNftStay): Promise<MsgMintNftStayResponse>
  CreateNftStay(request: MsgCreateNftStay): Promise<MsgCreateNftStayResponse>
  UpdateNftStay(request: MsgUpdateNftStay): Promise<MsgUpdateNftStayResponse>
  DeleteNftStay(request: MsgDeleteNftStay): Promise<MsgDeleteNftStayResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SendIbcTransferNftStay(request: MsgSendIbcTransferNftStay): Promise<MsgSendIbcTransferNftStayResponse> {
    const data = MsgSendIbcTransferNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'SendIbcTransferNftStay', data)
    return promise.then((data) => MsgSendIbcTransferNftStayResponse.decode(new Reader(data)))
  }

  UnsellNftStay(request: MsgUnsellNftStay): Promise<MsgUnsellNftStayResponse> {
    const data = MsgUnsellNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'UnsellNftStay', data)
    return promise.then((data) => MsgUnsellNftStayResponse.decode(new Reader(data)))
  }

  ClaimNftStay(request: MsgClaimNftStay): Promise<MsgClaimNftStayResponse> {
    const data = MsgClaimNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'ClaimNftStay', data)
    return promise.then((data) => MsgClaimNftStayResponse.decode(new Reader(data)))
  }

  BidNftStay(request: MsgBidNftStay): Promise<MsgBidNftStayResponse> {
    const data = MsgBidNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'BidNftStay', data)
    return promise.then((data) => MsgBidNftStayResponse.decode(new Reader(data)))
  }

  BuyNftStay(request: MsgBuyNftStay): Promise<MsgBuyNftStayResponse> {
    const data = MsgBuyNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'BuyNftStay', data)
    return promise.then((data) => MsgBuyNftStayResponse.decode(new Reader(data)))
  }

  SellNftStay(request: MsgSellNftStay): Promise<MsgSellNftStayResponse> {
    const data = MsgSellNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'SellNftStay', data)
    return promise.then((data) => MsgSellNftStayResponse.decode(new Reader(data)))
  }

  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'CreateMarket', data)
    return promise.then((data) => MsgCreateMarketResponse.decode(new Reader(data)))
  }

  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse> {
    const data = MsgUpdateMarket.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'UpdateMarket', data)
    return promise.then((data) => MsgUpdateMarketResponse.decode(new Reader(data)))
  }

  DeleteMarket(request: MsgDeleteMarket): Promise<MsgDeleteMarketResponse> {
    const data = MsgDeleteMarket.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'DeleteMarket', data)
    return promise.then((data) => MsgDeleteMarketResponse.decode(new Reader(data)))
  }

  TransferNftStay(request: MsgTransferNftStay): Promise<MsgTransferNftStayResponse> {
    const data = MsgTransferNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'TransferNftStay', data)
    return promise.then((data) => MsgTransferNftStayResponse.decode(new Reader(data)))
  }

  BurnNftStay(request: MsgBurnNftStay): Promise<MsgBurnNftStayResponse> {
    const data = MsgBurnNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'BurnNftStay', data)
    return promise.then((data) => MsgBurnNftStayResponse.decode(new Reader(data)))
  }

  MintNftStay(request: MsgMintNftStay): Promise<MsgMintNftStayResponse> {
    const data = MsgMintNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'MintNftStay', data)
    return promise.then((data) => MsgMintNftStayResponse.decode(new Reader(data)))
  }

  CreateNftStay(request: MsgCreateNftStay): Promise<MsgCreateNftStayResponse> {
    const data = MsgCreateNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'CreateNftStay', data)
    return promise.then((data) => MsgCreateNftStayResponse.decode(new Reader(data)))
  }

  UpdateNftStay(request: MsgUpdateNftStay): Promise<MsgUpdateNftStayResponse> {
    const data = MsgUpdateNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'UpdateNftStay', data)
    return promise.then((data) => MsgUpdateNftStayResponse.decode(new Reader(data)))
  }

  DeleteNftStay(request: MsgDeleteNftStay): Promise<MsgDeleteNftStayResponse> {
    const data = MsgDeleteNftStay.encode(request).finish()
    const promise = this.rpc.request('kryptopoo.marketplace.nftstays.Msg', 'DeleteNftStay', data)
    return promise.then((data) => MsgDeleteNftStayResponse.decode(new Reader(data)))
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
