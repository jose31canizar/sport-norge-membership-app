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
import HomeScreen from "../screens/home";
import OffersScreen from "../screens/offers";
import StoresScreen from "../screens/stores";
import Drawer from "./drawer";

import QRCodeViewer from "../screens/qr-code-viewer";
import { connect } from "react-redux";

const Stack = createStackNavigator({
  Home: HomeScreen,
  Offers: OffersScreen,
  Stores: StoresScreen
});

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

const TabBar = props => <View />;

// const TabBar = ({
//   navigation,
//   renderIcon,
//   activeTintColor,
//   inactiveTintColor,
//   jumpTo,
//   navigation: {
//     state: { routes }
//   }
// }) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-around",
//         padding: 20
//       }}
//     >
//       {routes &&
//         routes.map((route, index) => {
//           const focused = index === navigation.state.index;
//           const tintColor = focused ? activeTintColor : inactiveTintColor;

//           return (
//             <TouchableWithoutFeedback
//               key={route.key}
//               style={styles.tab}
//               onPress={() => jumpTo(route.key)}
//             >
//               <View style={styles.tab}>
//                 {renderIcon({
//                   route,
//                   index,
//                   focused,
//                   tintColor
//                 })}
//               </View>
//             </TouchableWithoutFeedback>
//           );
//         })}
//     </View>
//   );
// };

let Stacks = createTabNavigator(
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
    tabBarComponent: TabBar,
    swipeEnabled: true,
    animationEnabled: true
  }
);

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  "main",
  state => state.nav
);

export const AppNavigator = createDrawerNavigator(
  {
    Main: Stacks
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
  },
  tab: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
