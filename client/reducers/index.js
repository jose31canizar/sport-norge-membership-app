import { combineReducers } from "redux";
import auth from "./auth-reducer";
import offer from "./offer-reducer";
import store from "./store-reducer";
import nav from "./nav-reducer";

export default combineReducers({
  auth,
  offer,
  store,
  nav
});
