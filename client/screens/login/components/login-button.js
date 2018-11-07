import React, { Component } from "react";
import { Platform, TouchableHighlight, View, Text } from "react-native";
import { styles } from "../style";
import { FuturaText } from "../../../components/styled-text";
import Icon from "react-native-vector-icons";
import { withNavigation } from "react-navigation";

export default withNavigation(
  class LoginButton extends Component {
    state = {
      selected: false
    };
    setSelected = selected => {
      console.log(selected);
      this.setState({ selected });
    };

    render() {
      const { name, showIcon, to, onPress, customStyle } = this.props;
      const { setSelected } = this;
      const { selected } = this.state;
      const { navigate } = this.props.navigation;
      return (
        <TouchableHighlight
          underlayColor="white"
          style={[styles.login_button, customStyle]}
          onPress={() => (to ? navigate(to) : onPress())}
          onShowUnderlay={() => setSelected(true)}
          onHideUnderlay={() => setSelected(false)}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {showIcon ? (
              <Icon.Ionicons
                name="ios-mail-outline"
                color="white"
                size={24}
                style={{ marginRight: 10 }}
              />
            ) : null}
            <FuturaText
              style={[
                styles.login_name,
                selected ? { color: "black" } : { color: "white" }
              ]}
            >
              {name}
            </FuturaText>
          </View>
        </TouchableHighlight>
      );
    }
  }
);
