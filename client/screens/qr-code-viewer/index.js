import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import QRCode from "react-native-qrcode";
import { styles } from './style'

export default class QRCodeViewer extends React.Component {
  render() {
   return (
     <View style={styles.qr_code_viewer}>
     <QRCode
              value={this.props.text}
              size={Dimensions.get('window').width - 40}
              bgColor="#345962"
              fgColor="white"
            />
     </View>
   );
  }
}