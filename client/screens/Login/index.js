import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { styles } from "./style";
import { FuturaText } from "../../components/styled-text";
import { connect } from "react-redux";
import { login, retrieve, logout } from "../../actions/auth-actions";
// import { persistor } from "../../store";

export default connect(
  state => ({
    emailOrPhone: state.auth.emailOrPhone,
    password: state.auth.password,
    autoLoggingIn: state.auth.autoLoggingIn
  }),
  dispatch => ({
    login: data => dispatch(login(data)),
    retrieve: () => dispatch(retrieve())
  })
)(
  class Login extends Component {
    state = {
      emailOrPhone: "",
      password: ""
    };
    login = () => {
      const { emailOrPhone, password } = this.state;
      console.log(this.state, "hello");
      this.props
        .login({ emailOrPhone, password })
        .then(() => this.props.navigation.navigate("HomeStack"));
    };

    componentWillMount() {
      // persistor.purge();
    }
    componentDidUpdate(prevState, prevProps) {
      if (this.props.autoLoggingIn) {
        console.log("updated", this.props);
        this.props.navigation.navigate("HomeStack");
      }
    }
    update = (field, text) => {
      this.setState({ [field]: text });
    };
    render() {
      const { emailOrPhone, password } = this.props;
      return (
        <View style={styles.login}>
          <TextInput
            placeholder="email/phone"
            style={styles.input}
            onChangeText={text => this.update("emailOrPhone", text)}
            value={emailOrPhone}
          />
          <TextInput
            placeholder="password"
            secureTextEntry
            style={styles.input}
            onChangeText={text => this.update("password", text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.login_button}
            onPress={() => this.login()}
          >
            <FuturaText style={styles.text}>Login</FuturaText>
          </TouchableOpacity>
        </View>
      );
    }
  }
);
