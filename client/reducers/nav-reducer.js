import { AppNavigator } from "../navigation/main-tab-navigator";
import { DrawerActions } from "react-navigation";

let initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Main")
);

function nav(state = initialState, action) {
  console.log("action.type", action.type);
  if (
    action.type === "Navigation/TOGGLE_DRAWER" ||
    action.type === "Navigation/FORCE_CLOSE_DRAWER"
  ) {
    return {
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
      closeId: state.closeId === 0 ? 1 : 0,
      force_close: true
    };
  } else if (action.type === "Navigation/DRAWER_OPEN") {
    return {
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
      closeId: state.closeId === 0 ? 1 : 0,
      toggled: false,
      force_close: false
    };
  }
  const newState = AppNavigator.router.getStateForAction(action, state);
  // console.log(newState);

  return (
    {
      ...newState,
      toggled: false,
      force_close: action.type === "Navigation/DRAWER_CLOSED" ? true : false
    } || state
  );
}

export default nav;
