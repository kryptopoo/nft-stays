package types

// ValidateBasic is used for validating the packet
func (p IbcTransferNftStayPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcTransferNftStayPacketData) GetBytes() ([]byte, error) {
	var modulePacket NftstaysPacketData

	modulePacket.Packet = &NftstaysPacketData_IbcTransferNftStayPacket{&p}

	return modulePacket.Marshal()
}
