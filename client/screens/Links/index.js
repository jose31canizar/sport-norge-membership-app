import React from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import QRCode from "react-native-qrcode";
import { styles } from "./style";
import { withNavigation } from "react-navigation";

const SectionButton = withNavigation(({ navigation, name }) => (
  <TouchableOpacity
    style={styles.section_button}
    onPress={() => navigation.navigate("Offers")}
  >
    <Text>{name}</Text>
  </TouchableOpacity>
));

export default class LinksScreen extends React.Component {
  state = {
    text: "http://facebook.github.io/react-native/"
  };
  static navigationOptions = {
    title: "Links"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.qr_code_container}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text: text })}
            value={this.state.text}
          />
          <QRCode
            value={this.state.text}
            size={200}
            bgColor="#345962"
            fgColor="white"
          />
        </View>
        <View style={styles.section_buttons}>
          <SectionButton name="Offers" />
          <SectionButton name="Your Benefits" />
          <SectionButton name="Stores" />
        </View>
      </View>
    );
  }
}
