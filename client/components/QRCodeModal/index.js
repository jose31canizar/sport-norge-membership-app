import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import ClosableModal from "../ClosableModal";
import QRCode from "react-native-qrcode";

export default class QRCodeModal extends Component {
  render() {
    const { value, showModal, toggleModal } = this.props;
    return (
      <ClosableModal showModal={showModal} toggleModal={toggleModal}>
        <Text>QRCODE</Text>
        <QRCode
          value={value}
          size={Dimensions.get("window").width - 40}
          bgColor="#345962"
          fgColor="white"
        />
      </ClosableModal>
    );
  }
}
