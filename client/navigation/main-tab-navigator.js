import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import TabBarIcon from "../components/tab-bar-icon";
import { TabBar } from "./tab-bar";
import Drawer from "./drawer";

import {
  Home,
  Activity,
  Discover,
  Profile,
  Offers,
  Stores,
  QRCodeViewer,
  Camera
} from "../screens";

import { connect } from "react-redux";

const Stack = createStackNavigator(
  {
    Home,
    Offers,
    Stores
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white"
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Stack,
    QRCodeViewer
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const HomeStacks = createTabNavigator(
  {
    Stack1: HomeStack,
    Stack2: HomeStack,
    Stack3: HomeStack,
    Stack4: HomeStack,
    Stack5: HomeStack,
    Stack6: HomeStack,
    Stack7: HomeStack,
    Stack8: HomeStack,
    Stack9: HomeStack
  },
  {
    tabBarComponent: () => <View />,
    swipeEnabled: false,
    animationEnabled: true
  }
);

const Piles = [
  {
    name: "Home",
    routes: { HomeStacks },
    headerTitle: "Home"
  },
  {
    name: "Activity",
    routes: { Activity },
    headerTitle: "Activity"
  },
  {
    name: "Camera",
    routes: { Camera },
    headerTitle: "Camera"
  },
  {
    name: "Discover",
    routes: { Discover },
    headerTitle: "Discover"
  },
  {
    name: "Profile",
    routes: { Profile },
    headerTitle: "Profile"
  }
];

export const Stacks = Piles.reduce(
  (acc, { name, routes, headerTitle }) => ({
    ...acc,
    [name]: {
      screen: createStackNavigator(
        Object.entries(routes).reduce(
          (acc, [routeKey, screen]) => ({
            ...acc,
            [routeKey]: {
              screen
            }
          }),
          {}
        ),
        {
          navigationOptions: {
            header: null
          }
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            name={headerTitle}
            fill="transparent"
            stroke={focused ? "#eb524b" : "#c4cbce"}
            strokeWidth={2}
          />
        )
      }
    }
  }),
  {}
);

const AppStacks = createBottomTabNavigator(Stacks, {
  tabBarComponent: TabBar,
  tabBarOptions: {
    style: { backgroundColor: "black", position: "absolute", bottom: 0 }
  }
});

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  "main",
  state => state.nav
);

export const AppNavigator = createDrawerNavigator(
  {
    Main: AppStacks
  },
  {
    drawerWidth: Dimensions.get("window").width,
    drawerPosition: "left",
    drawerLockMode: "locked-closed",
    contentComponent: props => <Drawer {...props} />
  }
);

let ReduxifyAppNavigator = reduxifyNavigator(AppNavigator, "main");

class AppWithNavigationState extends Component {
  componentDidMount() {}
  render() {
    const { dispatch, nav } = this.props;

    return <ReduxifyAppNavigator dispatch={dispatch} state={nav} />;
  }
}

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);

const styles = StyleSheet.create({
  tabbar: {
    height: 49,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "grey",
    backgroundColor: "#333"
  }
});
