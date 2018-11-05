import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  View,
  PanResponder,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import { Icon } from "expo";

const height = Dimensions.get("window").height;
export default class ClosableModal extends Component {
  state = { prev: height - 80, showModal: false };
  componentWillMount() {
    this.animatedValue = new Animated.Value(height - 80);
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        Math.abs(gestureState.dx) >= 1 || Math.abs(gestureState.dy) >= 1,
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.vy < -0.5) {
          this.open();
        } else if (gestureState.vy > 0.5) {
          this.close();
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({ prev: this.animatedValue._value });
      }
    });
  }
  open = () => {
    this.setState({ showModal: true });
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 400,
      easing: Easing.cubic
    }).start();
  };
  close = () => {
    this.setState({ showModal: false }, () => this.props.toggleModal(false));
    Animated.timing(this.animatedValue, {
      toValue: height - 80,
      duration: 400,
      easing: Easing.cubic
    }).start();
  };
  toggleModal = show => {
    if (show) this.close();
    else this.open();
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.showModal !== this.props.showModal;
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.showModal && this.props.showModal) {
      this.open();
    } else if (prevProps.showModal && !this.props.showModal) {
      this.close();
    }
  }
  render() {
    const { showModal, toggleModal } = this.props;
    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateY }],
          padding: 20,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          width: "100%",
          height: Dimensions.get("window").height
        }}
        {...this.panResponder.panHandlers}
      >
        <TouchableOpacity
          onPress={() => {
            toggleModal(!showModal);
          }}
          style={{ marginLeft: "auto" }}
        >
          <Icon.Ionicons
            name={Platform.OS === "ios" ? "ios-close" : "md-home"}
            size={36}
            color="#333"
          />
        </TouchableOpacity>
        {this.props.children}
      </Animated.View>
    );
  }
}
