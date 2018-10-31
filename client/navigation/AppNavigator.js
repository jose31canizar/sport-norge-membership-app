import React from "react";
import { createSwitchNavigator } from "react-navigation";
import Login from "../screens/Login";
import MainTabNavigator from "./MainTabNavigator";
import { connect } from "react-redux";

export default connect(
  state => ({ autoLoggingIn: state.auth.autoLoggingIn }),
  null
)(props => {
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
