import { combineReducers } from "redux";
import auth from "./AuthReducer";
import offer from "./OfferReducer";
import store from "./StoreReducer";

export default combineReducers({
  auth,
  offer,
  store
});
