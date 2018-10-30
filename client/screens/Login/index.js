import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { FuturaText } from "../../components/StyledText";

export default class Login extends Component {
  state = {
    emailOrPhone: "",
    password: ""
  };
  login = () => {
    this.props.navigation.navigate("HomeStack");
  };
  render() {
    return (
      <View style={styles.login}>
        <TextInput
          placeholder="email/phone"
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.username}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.login_button}
          onPress={() => this.login("")}
        >
          <FuturaText style={styles.text}>Login</FuturaText>
        </TouchableOpacity>
      </View>
    );
  }
}
