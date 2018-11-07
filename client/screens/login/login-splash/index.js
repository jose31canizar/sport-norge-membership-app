import React, { Component } from "react";
import { View, Image } from "react-native";
import { styles } from "../style";
import { FuturaText } from "../../../components/styled-text";
import LoginButton from "../components/login-button";

export default class LoginSplash extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.login_container}>
        <Image
          source={require("../../../assets/images/sport-norge-logo.png")}
          style={styles.logo_image}
        />
        <FuturaText style={[styles.h1, { paddingVertical: 10 }]}>
          Medlemsfordeler
        </FuturaText>
        <View
          style={{
            borderBottomWidth: 1,
            marginVertical: 20,
            width: 45,
            borderBottomColor: "white"
          }}
        />
        <FuturaText style={[styles.h5, { marginBottom: 55 }]}>
          Her finner du ditt kjøpsbevis og dine medlemsfordeler for din klubb
          eller bedrift.
        </FuturaText>
        <LoginButton name="LOGG INN MED E-POST" showIcon to="LoginByEmail" />
        <FuturaText style={styles.h5}>eller</FuturaText>
        <LoginButton name="LOGG INN MED MOBILNUMMER" to="LoginByPhoneNumber" />
      </View>
    );
  }
}
