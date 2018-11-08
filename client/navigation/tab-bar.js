import React, { Component } from "react";
import {
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

export const TabBar = connect(state => ({ direction: state.nav.direction }))(
  class extends Component {
    state = {
      animatedValue: new Animated.Value(0)
    };
    componentDidUpdate(prevProps, prevState) {
      if (this.props.direction === "down") {
        this.slideDown();
      } else if (this.props.direction === "up") {
        this.slideUp();
      }
    }
    slideDown = () => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        easing: Easing.ease.inOut,
        duration: 400
      }).start();
    };
    slideUp = () => {
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        easing: Easing.ease.inOut,
        duration: 400
      }).start();
    };
    render() {
      const {
        navigation,
        renderIcon,
        activeTintColor,
        inactiveTintColor,
        jumpTo,
        openTabBar,
        navigation: {
          state: { routes }
        }
      } = this.props;

      const index = navigation.state.index;
      const currentRoute = navigation.state.routes[index];
      let translateY = this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 60]
      });
      return (
        <Animated.View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 15,
            transform: [
              { translateY: currentRoute.routeName !== "Home" ? 0 : translateY }
            ],
            position: "absolute",
            bottom: 0
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
        </Animated.View>
      );
    }
  }
);

const styles = StyleSheet.create({
  tab: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
