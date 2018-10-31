import { REHYDRATE, PURGE } from "redux-persist";
const INITIAL_STATE = {
  emailOrPhone: "",
  password: "",
  autoLoggingIn: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "persist/REHYDRATE":
      const { emailOrPhone, password } = action.payload.auth;
      console.log(emailOrPhone, password, "rehydrate");
      if (emailOrPhone && password) {
        return { ...state, emailOrPhone, password };
      }
      //return empty object to clear
      return state;
    case "persist/PURGE":
      return INITIAL_STATE;
    case "LOGOUT":
      return INITIAL_STATE;
    case "LOGIN":
      return state;
    case "LOGIN_SUCCESS":
      console.log("success!");
      const { emailOrPhone: e, password: p } = action;
      return { ...state, emailOrPhone: e, password: p, autoLoggingIn: true };
    default:
      return state;
  }
}
