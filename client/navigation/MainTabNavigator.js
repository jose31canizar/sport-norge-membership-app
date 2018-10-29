import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/Home";
import LinksScreen from "../screens/Links";
import SettingsScreen from "../screens/Settings";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
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
          ? `ios-link${focused ? "" : "-outline"}`
          : "md-link"
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

export default createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    tabBarComponent: ({
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
    }
  }
);

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
