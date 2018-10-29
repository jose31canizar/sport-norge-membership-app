import React from "react";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode";
import { ExpoLinksView } from "@expo/samples";

export default class LinksScreen extends React.Component {
  state = {
    text: "http://facebook.github.io/react-native/"
  };
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.qr_code_container}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text: text })}
            value={this.state.text}
          />
          <QRCode
            value={this.state.text}
            size={200}
            bgColor="purple"
            fgColor="white"
          />
        </View>
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  qr_code_container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  }
});
