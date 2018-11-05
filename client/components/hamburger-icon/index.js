import React, { Component } from "react";
import { TouchableHighlight, Animated, Easing } from "react-native";
import { connect } from "react-redux";
import { Svg } from "expo";
const { G, Circle, Rect, Line } = Svg;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

let rotate = function(centerX, centerY, radius, angle) {
  let x1, y1, x2, y2;
  x1 = centerX + radius * Math.cos(angle);
  y1 = centerY + radius * Math.sin(angle);
  x2 = centerX - radius * Math.cos(angle);
  y2 = centerY - radius * Math.sin(angle);

  return { x1, y1, x2, y2 };
};

class HamburgerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      cross: new Animated.Value(0)
    };
    this.animated = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animated, {
      fromValue: 0,
      toValue: 1,
      duration: 400,
      easing: Easing.bezier(0.645, 0.045, 0.355, 1)
    }).start();
    //middle line
    this.state.cross.addListener(progress => {
      const { x1, x2, y1, y2 } = rotate(25, 15.5, 22.5, progress.value * 0.04);
      const { x1: x13, x2: x23, y1: y13, y2: y23 } = rotate(
        25,
        15.5,
        22.5,
        -progress.value * 0.04
      );
      this.lineOne.setNativeProps({
        x1: (2.5 + progress.value).toString(),
        x2: (47.5 - progress.value).toString(),
        y1: (2.5 + progress.value * 0.66).toString(),
        y2: (2.5 + progress.value * 0.66).toString()
      });
      this.lineTwo.setNativeProps({
        x1: x1.toString(),
        x2: x2.toString(),
        y1: y1.toString(),
        y2: y2.toString()
      });
      this.lineThree.setNativeProps({
        x1: x13.toString(),
        x2: x23.toString(),
        y1: y13.toString(),
        y2: y23.toString()
      });
      this.lineFour.setNativeProps({
        x1: (2.5 + progress.value * 0.75).toString(),
        y1: (28.5 - progress.value * 0.75).toString(),
        y2: (28.5 - progress.value * 0.75).toString()
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if ((!prevProps.toggled && this.props.toggled) || this.props.force_close) {
      Animated.timing(this.state.cross, {
        toValue: 0,
        duration: 250,
        delay: 150
      }).start();
    } else if (!this.props.toggled) {
      Animated.timing(this.state.cross, {
        toValue: 19.5,
        duration: 250,
        delay: 150
      }).start();
    }
  }
  handlePress = () => {
    this.setState(
      prev => ({ open: !prev.open }),
      () => {
        if (this.state.open) {
          this.props.openDrawer();
          this.setState({ open: true });
          Animated.timing(this.state.cross, {
            toValue: 19.5,
            duration: 250,
            delay: 150
          }).start();
        } else {
          this.setState({ open: false });
          Animated.timing(this.state.cross, {
            toValue: 0,
            duration: 250,
            delay: 150
          }).start();
          this.props.closeDrawer();
        }
      }
    );
  };
  render() {
    const translateX = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0]
    });
    const translateY = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    });
    const transform = [{ translateX }];

    //"15.5"

    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.handlePress}
      >
        <AnimatedSvg
          width={70}
          height={40}
          viewBox="0 -25 70 70"
          style={{ transform, opacity: this.animated }}
        >
          <Line
            x1="2.5"
            y1="2.5"
            x2="47.5"
            y2="2.5"
            fill="none"
            stroke="#000"
            strokeLineCap="round"
            strokeMiterLimit="10"
            strokeWidth="5"
            ref={ref => (this.lineOne = ref)}
          />
          <AnimatedLine
            x1="2.5"
            y1="15.5"
            x2="47.5"
            y2="15.5"
            fill="none"
            stroke="#000"
            strokeLineCap="round"
            strokeMiterLimit="10"
            strokeWidth="5"
            ref={ref => (this.lineTwo = ref)}
          />
          <AnimatedLine
            x1="2.5"
            y1="15.5"
            x2="47.5"
            y2="15.5"
            fill="none"
            stroke="#000"
            strokeLineCap="round"
            strokeMiterLimit="10"
            strokeWidth="5"
            ref={ref => (this.lineThree = ref)}
          />
          <Line
            x1="2.5"
            y1="28.5"
            x2="17"
            y2="28.5"
            fill="none"
            stroke="#000"
            strokeLineCap="round"
            strokeMiterLimit="10"
            strokeWidth="5"
            ref={ref => (this.lineFour = ref)}
          />
        </AnimatedSvg>
      </TouchableHighlight>
    );
  }
}

export default connect(state => ({
  isDrawerOpen: state.nav.isDrawerOpen,
  toggled: state.nav.toggled,
  force_close: state.nav.force_close
}))(HamburgerIcon);
