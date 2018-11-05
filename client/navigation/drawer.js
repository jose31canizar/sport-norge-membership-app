import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RegisterForPushNotifications from "../services/push-notifications";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class Drawer extends Component {
  componentDidMount() {
    RegisterForPushNotifications();
  }
  render() {
    const clubs = [...Array(9)].map((_, i) => "Stack" + (i + 1));
    const { navigation } = this.props;
    const index = navigation.state.routes[0].index;
    const currentRoute = navigation.state.routes[0].routes[index];

    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          paddingTop: 60
        }}
      >
        {clubs
          .filter(club => club !== currentRoute.routeName)
          .map((club, i) => (
            <TouchableOpacity
              style={{ padding: 5 }}
              key={"club" + i}
              onPress={() => {
                navigation.navigate(club);
                this.props.toggleDrawer();
              }}
            >
              <Text>{club}</Text>
            </TouchableOpacity>
          ))}
      </View>
    );
  }
}

const toggleDrawer = dispatch =>
  dispatch({ type: "Navigation/FORCE_CLOSE_DRAWER" });

export default connect(
  null,
  dispatch => ({ toggleDrawer: () => dispatch(toggleDrawer) })
)(withNavigation(Drawer));
