// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nftstays/packet.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type NftstaysPacketData struct {
	// Types that are valid to be assigned to Packet:
	//	*NftstaysPacketData_NoData
	//	*NftstaysPacketData_IbcTransferNftStayPacket
	Packet isNftstaysPacketData_Packet `protobuf_oneof:"packet"`
}

func (m *NftstaysPacketData) Reset()         { *m = NftstaysPacketData{} }
func (m *NftstaysPacketData) String() string { return proto.CompactTextString(m) }
func (*NftstaysPacketData) ProtoMessage()    {}
func (*NftstaysPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_794aa6d3af783f47, []int{0}
}
func (m *NftstaysPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NftstaysPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NftstaysPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NftstaysPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NftstaysPacketData.Merge(m, src)
}
func (m *NftstaysPacketData) XXX_Size() int {
	return m.Size()
}
func (m *NftstaysPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_NftstaysPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_NftstaysPacketData proto.InternalMessageInfo

type isNftstaysPacketData_Packet interface {
	isNftstaysPacketData_Packet()
	MarshalTo([]byte) (int, error)
	Size() int
}

type NftstaysPacketData_NoData struct {
	NoData *NoData `protobuf:"bytes,1,opt,name=noData,proto3,oneof" json:"noData,omitempty"`
}
type NftstaysPacketData_IbcTransferNftStayPacket struct {
	IbcTransferNftStayPacket *IbcTransferNftStayPacketData `protobuf:"bytes,2,opt,name=ibcTransferNftStayPacket,proto3,oneof" json:"ibcTransferNftStayPacket,omitempty"`
}

func (*NftstaysPacketData_NoData) isNftstaysPacketData_Packet()                   {}
func (*NftstaysPacketData_IbcTransferNftStayPacket) isNftstaysPacketData_Packet() {}

func (m *NftstaysPacketData) GetPacket() isNftstaysPacketData_Packet {
	if m != nil {
		return m.Packet
	}
	return nil
}

func (m *NftstaysPacketData) GetNoData() *NoData {
	if x, ok := m.GetPacket().(*NftstaysPacketData_NoData); ok {
		return x.NoData
	}
	return nil
}

func (m *NftstaysPacketData) GetIbcTransferNftStayPacket() *IbcTransferNftStayPacketData {
	if x, ok := m.GetPacket().(*NftstaysPacketData_IbcTransferNftStayPacket); ok {
		return x.IbcTransferNftStayPacket
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*NftstaysPacketData) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*NftstaysPacketData_NoData)(nil),
		(*NftstaysPacketData_IbcTransferNftStayPacket)(nil),
	}
}

type NoData struct {
}

func (m *NoData) Reset()         { *m = NoData{} }
func (m *NoData) String() string { return proto.CompactTextString(m) }
func (*NoData) ProtoMessage()    {}
func (*NoData) Descriptor() ([]byte, []int) {
	return fileDescriptor_794aa6d3af783f47, []int{1}
}
func (m *NoData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NoData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NoData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NoData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NoData.Merge(m, src)
}
func (m *NoData) XXX_Size() int {
	return m.Size()
}
func (m *NoData) XXX_DiscardUnknown() {
	xxx_messageInfo_NoData.DiscardUnknown(m)
}

var xxx_messageInfo_NoData proto.InternalMessageInfo

// this line is used by starport scaffolding # ibc/packet/proto/message
// IbcTransferNftStayPacketData defines a struct for the packet payload
type IbcTransferNftStayPacketData struct {
	SID           string `protobuf:"bytes,1,opt,name=sID,proto3" json:"sID,omitempty"`
	NftStorageCID string `protobuf:"bytes,2,opt,name=nftStorageCID,proto3" json:"nftStorageCID,omitempty"`
	Creator       string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *IbcTransferNftStayPacketData) Reset()         { *m = IbcTransferNftStayPacketData{} }
func (m *IbcTransferNftStayPacketData) String() string { return proto.CompactTextString(m) }
func (*IbcTransferNftStayPacketData) ProtoMessage()    {}
func (*IbcTransferNftStayPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_794aa6d3af783f47, []int{2}
}
func (m *IbcTransferNftStayPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IbcTransferNftStayPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IbcTransferNftStayPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IbcTransferNftStayPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IbcTransferNftStayPacketData.Merge(m, src)
}
func (m *IbcTransferNftStayPacketData) XXX_Size() int {
	return m.Size()
}
func (m *IbcTransferNftStayPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_IbcTransferNftStayPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_IbcTransferNftStayPacketData proto.InternalMessageInfo

func (m *IbcTransferNftStayPacketData) GetSID() string {
	if m != nil {
		return m.SID
	}
	return ""
}

func (m *IbcTransferNftStayPacketData) GetNftStorageCID() string {
	if m != nil {
		return m.NftStorageCID
	}
	return ""
}

func (m *IbcTransferNftStayPacketData) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

// IbcTransferNftStayPacketAck defines a struct for the packet acknowledgment
type IbcTransferNftStayPacketAck struct {
	SID string `protobuf:"bytes,1,opt,name=sID,proto3" json:"sID,omitempty"`
}

func (m *IbcTransferNftStayPacketAck) Reset()         { *m = IbcTransferNftStayPacketAck{} }
func (m *IbcTransferNftStayPacketAck) String() string { return proto.CompactTextString(m) }
func (*IbcTransferNftStayPacketAck) ProtoMessage()    {}
func (*IbcTransferNftStayPacketAck) Descriptor() ([]byte, []int) {
	return fileDescriptor_794aa6d3af783f47, []int{3}
}
func (m *IbcTransferNftStayPacketAck) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IbcTransferNftStayPacketAck) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IbcTransferNftStayPacketAck.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IbcTransferNftStayPacketAck) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IbcTransferNftStayPacketAck.Merge(m, src)
}
func (m *IbcTransferNftStayPacketAck) XXX_Size() int {
	return m.Size()
}
func (m *IbcTransferNftStayPacketAck) XXX_DiscardUnknown() {
	xxx_messageInfo_IbcTransferNftStayPacketAck.DiscardUnknown(m)
}

var xxx_messageInfo_IbcTransferNftStayPacketAck proto.InternalMessageInfo

func (m *IbcTransferNftStayPacketAck) GetSID() string {
	if m != nil {
		return m.SID
	}
	return ""
}

func init() {
	proto.RegisterType((*NftstaysPacketData)(nil), "kryptopoo.marketplace.nftstays.NftstaysPacketData")
	proto.RegisterType((*NoData)(nil), "kryptopoo.marketplace.nftstays.NoData")
	proto.RegisterType((*IbcTransferNftStayPacketData)(nil), "kryptopoo.marketplace.nftstays.IbcTransferNftStayPacketData")
	proto.RegisterType((*IbcTransferNftStayPacketAck)(nil), "kryptopoo.marketplace.nftstays.IbcTransferNftStayPacketAck")
}

func init() { proto.RegisterFile("nftstays/packet.proto", fileDescriptor_794aa6d3af783f47) }

var fileDescriptor_794aa6d3af783f47 = []byte{
	// 298 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x51, 0x4f, 0x4b, 0xc3, 0x30,
	0x14, 0x6f, 0x1c, 0xd4, 0x2d, 0x22, 0x48, 0x40, 0x28, 0x28, 0x41, 0x8a, 0x88, 0xa7, 0x04, 0xf5,
	0xea, 0x41, 0xe7, 0x0e, 0x0e, 0x61, 0x48, 0xf5, 0xe4, 0x2d, 0x0d, 0xe9, 0x1c, 0x75, 0x4d, 0x48,
	0x9f, 0x60, 0xfd, 0x14, 0x7e, 0x2c, 0x8f, 0x3b, 0x7a, 0xf0, 0x20, 0xed, 0x17, 0x91, 0xa6, 0xdd,
	0x50, 0xa4, 0xf3, 0xf6, 0x5e, 0xf2, 0xfb, 0xf3, 0xde, 0xef, 0xe1, 0xdd, 0x2c, 0x81, 0x1c, 0x44,
	0x91, 0x73, 0x23, 0x64, 0xaa, 0x80, 0x19, 0xab, 0x41, 0x13, 0x9a, 0xda, 0xc2, 0x80, 0x36, 0x5a,
	0xb3, 0xb9, 0xb0, 0xa9, 0x02, 0xf3, 0x24, 0xa4, 0x62, 0x4b, 0x70, 0xf8, 0x89, 0x30, 0x99, 0xb4,
	0xcd, 0xad, 0x23, 0x8e, 0x04, 0x08, 0x72, 0x81, 0xfd, 0x4c, 0xd7, 0x55, 0x80, 0x0e, 0xd0, 0xf1,
	0xd6, 0xe9, 0x11, 0x5b, 0xaf, 0xc3, 0x26, 0x0e, 0x7d, 0xed, 0x45, 0x2d, 0x8f, 0xbc, 0xe2, 0x60,
	0x16, 0xcb, 0x7b, 0x2b, 0xb2, 0x3c, 0x51, 0x76, 0x92, 0xc0, 0x1d, 0x88, 0xa2, 0x71, 0x08, 0x36,
	0x9c, 0xe6, 0xf9, 0x7f, 0x9a, 0xe3, 0x0e, 0x7e, 0xeb, 0xd4, 0xa9, 0x3f, 0xec, 0x63, 0xbf, 0x09,
	0x21, 0xec, 0x63, 0xbf, 0x99, 0x2c, 0x34, 0x78, 0x7f, 0x9d, 0x1e, 0xd9, 0xc1, 0xbd, 0x7c, 0x3c,
	0x72, 0xeb, 0x0e, 0xa2, 0xba, 0x24, 0x87, 0x78, 0x3b, 0xab, 0x61, 0xda, 0x8a, 0xa9, 0xba, 0x1a,
	0x8f, 0xdc, 0xd8, 0x83, 0xe8, 0xf7, 0x23, 0x09, 0xf0, 0xa6, 0xb4, 0x4a, 0x80, 0xb6, 0x41, 0xcf,
	0xfd, 0x2f, 0xdb, 0x90, 0xe3, 0xbd, 0x2e, 0xc7, 0x4b, 0x99, 0xfe, 0x35, 0x1c, 0xde, 0xbc, 0x97,
	0x14, 0x2d, 0x4a, 0x8a, 0xbe, 0x4a, 0x8a, 0xde, 0x2a, 0xea, 0x2d, 0x2a, 0xea, 0x7d, 0x54, 0xd4,
	0x7b, 0x38, 0x99, 0xce, 0xe0, 0xf1, 0x39, 0x66, 0x52, 0xcf, 0xf9, 0x2a, 0x34, 0xfe, 0x23, 0x34,
	0xfe, 0xc2, 0x57, 0xf7, 0x87, 0xc2, 0xa8, 0x3c, 0xf6, 0xdd, 0xfd, 0xcf, 0xbe, 0x03, 0x00, 0x00,
	0xff, 0xff, 0x4d, 0x9d, 0x83, 0xac, 0x18, 0x02, 0x00, 0x00,
}

func (m *NftstaysPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NftstaysPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NftstaysPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Packet != nil {
		{
			size := m.Packet.Size()
			i -= size
			if _, err := m.Packet.MarshalTo(dAtA[i:]); err != nil {
				return 0, err
			}
		}
	}
	return len(dAtA) - i, nil
}

func (m *NftstaysPacketData_NoData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NftstaysPacketData_NoData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	if m.NoData != nil {
		{
			size, err := m.NoData.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintPacket(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}
func (m *NftstaysPacketData_IbcTransferNftStayPacket) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NftstaysPacketData_IbcTransferNftStayPacket) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	if m.IbcTransferNftStayPacket != nil {
		{
			size, err := m.IbcTransferNftStayPacket.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintPacket(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}
func (m *NoData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NoData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NoData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *IbcTransferNftStayPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IbcTransferNftStayPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IbcTransferNftStayPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.NftStorageCID) > 0 {
		i -= len(m.NftStorageCID)
		copy(dAtA[i:], m.NftStorageCID)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.NftStorageCID)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.SID) > 0 {
		i -= len(m.SID)
		copy(dAtA[i:], m.SID)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.SID)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *IbcTransferNftStayPacketAck) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IbcTransferNftStayPacketAck) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IbcTransferNftStayPacketAck) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.SID) > 0 {
		i -= len(m.SID)
		copy(dAtA[i:], m.SID)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.SID)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPacket(dAtA []byte, offset int, v uint64) int {
	offset -= sovPacket(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *NftstaysPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Packet != nil {
		n += m.Packet.Size()
	}
	return n
}

func (m *NftstaysPacketData_NoData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.NoData != nil {
		l = m.NoData.Size()
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}
func (m *NftstaysPacketData_IbcTransferNftStayPacket) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.IbcTransferNftStayPacket != nil {
		l = m.IbcTransferNftStayPacket.Size()
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}
func (m *NoData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *IbcTransferNftStayPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.SID)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.NftStorageCID)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}

func (m *IbcTransferNftStayPacketAck) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.SID)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}

func sovPacket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPacket(x uint64) (n int) {
	return sovPacket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *NftstaysPacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NftstaysPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NftstaysPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NoData", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			v := &NoData{}
			if err := v.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			m.Packet = &NftstaysPacketData_NoData{v}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field IbcTransferNftStayPacket", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			v := &IbcTransferNftStayPacketData{}
			if err := v.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			m.Packet = &NftstaysPacketData_IbcTransferNftStayPacket{v}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *NoData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NoData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NoData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *IbcTransferNftStayPacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: IbcTransferNftStayPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IbcTransferNftStayPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NftStorageCID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NftStorageCID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *IbcTransferNftStayPacketAck) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: IbcTransferNftStayPacketAck: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IbcTransferNftStayPacketAck: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPacket(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPacket
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPacket
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPacket
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPacket        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPacket          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPacket = fmt.Errorf("proto: unexpected end of group")
)
