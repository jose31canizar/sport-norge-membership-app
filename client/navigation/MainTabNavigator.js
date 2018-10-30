import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/Home";
import LinksScreen from "../screens/Links";
import SettingsScreen from "../screens/Settings";
import OffersScreen from "../screens/Offers";
import Login from "../screens/Login";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Offers: OffersScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-pricetag${focused ? "" : "-outline"}`
          : "md-pricetag"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-options${focused ? "" : "-outline"}`
          : "md-options"
      }
    />
  )
};

const TabBar = ({
  navigation,
  renderIcon,
  activeTintColor,
  inactiveTintColor,
  jumpTo,
  navigation: {
    state: { routes }
  }
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20
      }}
    >
      {routes &&
        routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? activeTintColor : inactiveTintColor;

          return (
            <TouchableWithoutFeedback
              key={route.key}
              style={styles.tab}
              onPress={() => jumpTo(route.key)}
            >
              <View style={styles.tab}>
                {renderIcon({
                  route,
                  index,
                  focused,
                  tintColor
                })}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
    </View>
  );
};

// export default createBottomTabNavigator(
//   {
//     HomeStack
//   },
//   {
//     tabBarComponent: TabBar
//   }
// );

export default createSwitchNavigator({
  HomeStack,
  Login
});

const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "grey",
    backgroundColor: "#333"
  },
  tab: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
