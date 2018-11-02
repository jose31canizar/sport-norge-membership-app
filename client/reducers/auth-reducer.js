import { REHYDRATE, PURGE } from "redux-persist";
const INITIAL_STATE = {
  emailOrPhone: "",
  password: "",
  autoLoggingIn: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "persist/REHYDRATE":
      if (action.payload) {
        const { emailOrPhone, password, autoLoggingIn } = action.payload.auth;
        //return empty object to clear
        // return {};
        return { ...state, emailOrPhone, password, autoLoggingIn };
      }

      return state;
    case "persist/PURGE":
      return {};
    case "LOGOUT":
      return INITIAL_STATE;
    case "LOGIN":
      return state;
    case "LOGIN_SUCCESS":
      const { emailOrPhone: e, password: p } = action;
      return { ...state, emailOrPhone: e, password: p, autoLoggingIn: true };
    default:
      return state;
  }
}
