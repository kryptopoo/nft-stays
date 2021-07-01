// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nftstays/market.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
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

type Market struct {
	Creator   string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id        uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	SID       string `protobuf:"bytes,3,opt,name=sID,proto3" json:"sID,omitempty"`
	Price     int32  `protobuf:"varint,4,opt,name=price,proto3" json:"price,omitempty"`
	Status    string `protobuf:"bytes,5,opt,name=status,proto3" json:"status,omitempty"`
	Seller    string `protobuf:"bytes,6,opt,name=seller,proto3" json:"seller,omitempty"`
	OnAuction bool   `protobuf:"varint,7,opt,name=onAuction,proto3" json:"onAuction,omitempty"`
	Offers    string `protobuf:"bytes,8,opt,name=offers,proto3" json:"offers,omitempty"`
	Expired   int32  `protobuf:"varint,9,opt,name=expired,proto3" json:"expired,omitempty"`
}

func (m *Market) Reset()         { *m = Market{} }
func (m *Market) String() string { return proto.CompactTextString(m) }
func (*Market) ProtoMessage()    {}
func (*Market) Descriptor() ([]byte, []int) {
	return fileDescriptor_47f9089efe0d447c, []int{0}
}
func (m *Market) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Market) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Market.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Market) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Market.Merge(m, src)
}
func (m *Market) XXX_Size() int {
	return m.Size()
}
func (m *Market) XXX_DiscardUnknown() {
	xxx_messageInfo_Market.DiscardUnknown(m)
}

var xxx_messageInfo_Market proto.InternalMessageInfo

func (m *Market) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Market) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Market) GetSID() string {
	if m != nil {
		return m.SID
	}
	return ""
}

func (m *Market) GetPrice() int32 {
	if m != nil {
		return m.Price
	}
	return 0
}

func (m *Market) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func (m *Market) GetSeller() string {
	if m != nil {
		return m.Seller
	}
	return ""
}

func (m *Market) GetOnAuction() bool {
	if m != nil {
		return m.OnAuction
	}
	return false
}

func (m *Market) GetOffers() string {
	if m != nil {
		return m.Offers
	}
	return ""
}

func (m *Market) GetExpired() int32 {
	if m != nil {
		return m.Expired
	}
	return 0
}

func init() {
	proto.RegisterType((*Market)(nil), "kryptopoo.marketplace.nftstays.Market")
}

func init() { proto.RegisterFile("nftstays/market.proto", fileDescriptor_47f9089efe0d447c) }

var fileDescriptor_47f9089efe0d447c = []byte{
	// 286 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0xb1, 0x6a, 0xeb, 0x30,
	0x18, 0x85, 0xa3, 0x24, 0x76, 0x62, 0x0d, 0x97, 0x8b, 0x48, 0x8b, 0x28, 0x45, 0x98, 0x4e, 0x9e,
	0x2c, 0x4a, 0x9f, 0xa0, 0xa5, 0x4b, 0x29, 0x5d, 0x3c, 0x76, 0x73, 0x6c, 0xd9, 0x15, 0x71, 0xfc,
	0x0b, 0x49, 0x86, 0xf8, 0x2d, 0xfa, 0x58, 0x1d, 0x33, 0x96, 0x4e, 0xc5, 0x7e, 0x91, 0x62, 0x39,
	0x4e, 0xbb, 0xfd, 0xdf, 0xe1, 0x3b, 0x48, 0x1c, 0x7c, 0x51, 0x17, 0xd6, 0xd8, 0xb4, 0x35, 0x7c,
	0x9f, 0xea, 0x9d, 0xb0, 0xb1, 0xd2, 0x60, 0x81, 0xb0, 0x9d, 0x6e, 0x95, 0x05, 0x05, 0x10, 0x8f,
	0xb9, 0xaa, 0xd2, 0x4c, 0xc4, 0x93, 0x7c, 0xb5, 0x29, 0xa1, 0x04, 0xa7, 0xf2, 0xe1, 0x1a, 0x5b,
	0x37, 0x5f, 0x08, 0xfb, 0x2f, 0x4e, 0x27, 0x14, 0xaf, 0x32, 0x2d, 0x52, 0x0b, 0x9a, 0xa2, 0x10,
	0x45, 0x41, 0x32, 0x21, 0xf9, 0x87, 0xe7, 0x32, 0xa7, 0xf3, 0x10, 0x45, 0xcb, 0x64, 0x2e, 0x73,
	0xf2, 0x1f, 0x2f, 0xcc, 0xd3, 0x23, 0x5d, 0x38, 0x6b, 0x38, 0xc9, 0x06, 0x7b, 0x4a, 0xcb, 0x4c,
	0xd0, 0x65, 0x88, 0x22, 0x2f, 0x19, 0x81, 0x5c, 0x62, 0xdf, 0xd8, 0xd4, 0x36, 0x86, 0x7a, 0x4e,
	0x3d, 0x91, 0xcb, 0x45, 0x55, 0x09, 0x4d, 0xfd, 0x53, 0xee, 0x88, 0x5c, 0xe3, 0x00, 0xea, 0xfb,
	0x26, 0xb3, 0x12, 0x6a, 0xba, 0x0a, 0x51, 0xb4, 0x4e, 0x7e, 0x83, 0xa1, 0x05, 0x45, 0x21, 0xb4,
	0xa1, 0xeb, 0xb1, 0x35, 0xd2, 0xf0, 0x6f, 0x71, 0x50, 0x52, 0x8b, 0x9c, 0x06, 0xee, 0xf5, 0x09,
	0x1f, 0x9e, 0x3f, 0x3a, 0x86, 0x8e, 0x1d, 0x43, 0xdf, 0x1d, 0x43, 0xef, 0x3d, 0x9b, 0x1d, 0x7b,
	0x36, 0xfb, 0xec, 0xd9, 0xec, 0xf5, 0xb6, 0x94, 0xf6, 0xad, 0xd9, 0xc6, 0x19, 0xec, 0xf9, 0x79,
	0x37, 0xfe, 0x67, 0x37, 0x7e, 0xe0, 0xe7, 0x99, 0x6d, 0xab, 0x84, 0xd9, 0xfa, 0x6e, 0xb0, 0xbb,
	0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x06, 0x95, 0xef, 0x73, 0x7f, 0x01, 0x00, 0x00,
}

func (m *Market) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Market) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Market) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Expired != 0 {
		i = encodeVarintMarket(dAtA, i, uint64(m.Expired))
		i--
		dAtA[i] = 0x48
	}
	if len(m.Offers) > 0 {
		i -= len(m.Offers)
		copy(dAtA[i:], m.Offers)
		i = encodeVarintMarket(dAtA, i, uint64(len(m.Offers)))
		i--
		dAtA[i] = 0x42
	}
	if m.OnAuction {
		i--
		if m.OnAuction {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x38
	}
	if len(m.Seller) > 0 {
		i -= len(m.Seller)
		copy(dAtA[i:], m.Seller)
		i = encodeVarintMarket(dAtA, i, uint64(len(m.Seller)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Status) > 0 {
		i -= len(m.Status)
		copy(dAtA[i:], m.Status)
		i = encodeVarintMarket(dAtA, i, uint64(len(m.Status)))
		i--
		dAtA[i] = 0x2a
	}
	if m.Price != 0 {
		i = encodeVarintMarket(dAtA, i, uint64(m.Price))
		i--
		dAtA[i] = 0x20
	}
	if len(m.SID) > 0 {
		i -= len(m.SID)
		copy(dAtA[i:], m.SID)
		i = encodeVarintMarket(dAtA, i, uint64(len(m.SID)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintMarket(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintMarket(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMarket(dAtA []byte, offset int, v uint64) int {
	offset -= sovMarket(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Market) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovMarket(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovMarket(uint64(m.Id))
	}
	l = len(m.SID)
	if l > 0 {
		n += 1 + l + sovMarket(uint64(l))
	}
	if m.Price != 0 {
		n += 1 + sovMarket(uint64(m.Price))
	}
	l = len(m.Status)
	if l > 0 {
		n += 1 + l + sovMarket(uint64(l))
	}
	l = len(m.Seller)
	if l > 0 {
		n += 1 + l + sovMarket(uint64(l))
	}
	if m.OnAuction {
		n += 2
	}
	l = len(m.Offers)
	if l > 0 {
		n += 1 + l + sovMarket(uint64(l))
	}
	if m.Expired != 0 {
		n += 1 + sovMarket(uint64(m.Expired))
	}
	return n
}

func sovMarket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMarket(x uint64) (n int) {
	return sovMarket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Market) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMarket
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
			return fmt.Errorf("proto: Market: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Market: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
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
				return ErrInvalidLengthMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
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
				return ErrInvalidLengthMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			m.Price = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Price |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
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
				return ErrInvalidLengthMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Status = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Seller", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
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
				return ErrInvalidLengthMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Seller = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field OnAuction", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.OnAuction = bool(v != 0)
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Offers", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
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
				return ErrInvalidLengthMarket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Offers = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Expired", wireType)
			}
			m.Expired = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Expired |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipMarket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMarket
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
func skipMarket(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMarket
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
					return 0, ErrIntOverflowMarket
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
					return 0, ErrIntOverflowMarket
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
				return 0, ErrInvalidLengthMarket
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMarket
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMarket
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMarket        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMarket          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMarket = fmt.Errorf("proto: unexpected end of group")
)