import React, { Component } from "react";
import { connect } from "react-redux";

const setTabBarState = direction => dispatch =>
  dispatch({ type: "SET_TAB_BAR_STATE", direction });

export default function(options, WrappedComponent, mapState = null) {
  return connect(
    mapState,
    dispatch => ({
      setTabBarState: direction => dispatch(setTabBarState(direction))
    })
  )(
    class extends Component {
      state = {
        direction: "up"
      };
      static navigationOptions = options;
      componentDidUpdate(prevProps, prevState) {
        const { direction } = this.state;
        if (prevState.direction !== direction) {
          this.props.setTabBarState(direction);
        }
      }
      onScroll = event => {
        const offset = event.nativeEvent.contentOffset.y;
        const direction = offset > this.state.offset ? "down" : "up";
        this.setState({ offset, direction });
      };
      render() {
        const { direction } = this.state;
        return (
          <WrappedComponent
            onScroll={this.onScroll}
            direction={direction}
            {...this.props}
          />
        );
      }
    }
  );
}
