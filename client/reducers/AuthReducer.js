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
        return { ...state, emailOrPhone, password, autoLoggingIn: true };
      }
      return state;
    case "persist/PURGE":
      return INITIAL_STATE;
    case "LOGOUT":
      return INITIAL_STATE;
    case "LOGIN":
      console.log(action);
      const { emailOrPhone: e, password: p } = action;
      return { ...state, emailOrPhone: e, password: p };
    case "LOGIN_SUCCESS":
      const { emailOrPhone: e1, password: p2 } = action;
      return { ...state, emailOrPhone: e1, password: p2 };
    default:
      return state;
  }
}
