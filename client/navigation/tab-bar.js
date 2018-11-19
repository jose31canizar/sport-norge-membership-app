import React, { Component } from "react";
import {
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { Svg } from "expo";

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
      console.log(Dimensions.get("screen").width);
      let translateY = this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 95]
      });
      return (
        <Animated.View
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingVertical: 15,
            paddingHorizontal: 45,
            transform: [
              { translateY: currentRoute.routeName !== "Home" ? 0 : translateY }
            ],
            position: "absolute",
            bottom: 0
          }}
        >
          {/* 47,60 */}
          <Svg
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "transparent"
            }}
            viewBox="0 0 100 100"
            height={60}
            width={Dimensions.get("screen").width}
          >
            <Svg.Path
              d="M-295 0L-57 0C-17 0 14 35 17 35A43 30 0 0 0 77 35C120 0 127 0 154 0L395 0 395 100 -295 100z"
              fill="white"
            />
          </Svg>

          {routes &&
            routes.map((route, index) => {
              const focused = index === navigation.state.index;
              const tintColor = focused ? activeTintColor : inactiveTintColor;

              if (route.routeName == "Camera") {
                return (
                  <TouchableWithoutFeedback
                    key={route.key}
                    style={[styles.tab]}
                    onPress={() => jumpTo(route.key)}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        transform: [{ translateY: -30 }]
                      }}
                    >
                      {renderIcon({
                        route,
                        index,
                        focused,
                        tintColor
                      })}
                    </View>
                  </TouchableWithoutFeedback>
                );
              }

              return (
                <TouchableWithoutFeedback
                  key={route.key}
                  style={styles.tab}
                  onPress={() => jumpTo(route.key)}
                >
                  <View style={{ transform: [{ translateY: 10 }] }}>
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
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "blue"
  }
});
