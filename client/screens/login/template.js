import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./style";
import { connect } from "react-redux";
import { login } from "../../actions/auth-actions";

function listen(c) {
  return connect(
    state => ({
      emailOrPhone: state.auth.emailOrPhone,
      password: state.auth.password,
      autoLoggingIn: state.auth.autoLoggingIn
    }),
    dispatch => ({
      login: data => dispatch(login(data))
    })
  )(c);
}

class AuthTemplate extends Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.login}>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.login_image}
        />
        {children}
      </View>
    );
  }
}

const LoginController = WrappedComponent =>
  class extends Component {
    static navigationOptions = {
      header: null
    };
    state = {
      emailOrPhone: "",
      password: ""
    };
    login = () => {
      const { emailOrPhone, password } = this.state;
      this.props
        .login({ emailOrPhone, password })
        .then(() => this.props.navigation.navigate("HomeStack"));
    };
    componentDidUpdate(prevState, prevProps) {
      if (this.props.autoLoggingIn) {
        this.props.navigation.navigate("HomeStack");
      }
    }
    update = (field, text) => {
      this.setState({ [field]: text });
    };
    render() {
      return (
        <AuthTemplate>
          <WrappedComponent
            {...this.state}
            update={this.update}
            login={this.login}
          />
        </AuthTemplate>
      );
    }
  };

export default function Template(WrappedComponent, listening) {
  if (listening) {
    return listen(LoginController(WrappedComponent));
  } else {
    return LoginController(WrappedComponent);
  }
}
