import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import Login from "../screens/login";
import MainTabNavigator from "./main-tab-navigator";
import { connect } from "react-redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

export default connect(state => ({
  autoLoggingIn: state.auth.autoLoggingIn
}))(props => {
  let X = createSwitchNavigator(
    {
      Login,
      Main: MainTabNavigator
    },
    {
      initialRouteName: props.autoLoggingIn ? "Main" : "Login"
    }
  );
  return <X />;
});
