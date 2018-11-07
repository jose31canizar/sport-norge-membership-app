import React, { Component } from "react";
import {
  LoginSplash,
  LoginByEmail,
  LoginByPhoneNumber
} from "../screens/login";
import Splash from "../screens/login/login-splash";
import { createStackNavigator } from "react-navigation";

export default createStackNavigator({
  LoginSplash,
  LoginByEmail,
  LoginByPhoneNumber
});
