import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./auth-navigator";
import MainTabNavigator from "./main-tab-navigator";
import { connect } from "react-redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

export default connect(state => ({
  autoLoggingIn: state.auth.autoLoggingIn
}))(props => {
  let App = createSwitchNavigator(
    {
      Auth: AuthNavigator,
      Main: MainTabNavigator
    },
    {
      initialRouteName: props.autoLoggingIn ? "Main" : "Auth"
    }
  );
  return <App />;
});
