import React, { Component } from "react";
import { View, TextInput, Image } from "react-native";
import { styles } from "../style";
import LoginButton from "../components/login-button";

export default class LoginByPhoneNumber extends Component {
  render() {
    const { emailOrPhone, password, update, login } = this.props;
    return (
      <View style={styles.login_container}>
        <Image
          source={require("../../../assets/images/sport-norge-logo.png")}
          style={styles.logo_image}
        />
        <TextInput
          placeholder="phone"
          placeholderTextColor="#a5a5a5"
          style={styles.input}
          onChangeText={text => update("emailOrPhone", text)}
          value={emailOrPhone}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="#a5a5a5"
          secureTextEntry
          style={styles.input}
          onChangeText={text => update("password", text)}
          value={password}
        />
        <LoginButton
          name="Login"
          onPress={login}
          customStyle={{ marginTop: 50 }}
        />
      </View>
    );
  }
}
