import { API } from "../api";
import { doSignInWithEmailAndPassword } from "../firebase/auth";

export const login = ({ emailOrPhone, password }) => dispatch => {
  dispatch({
    type: "LOGIN",
    emailOrPhone,
    password
  });
  return doSignInWithEmailAndPassword(emailOrPhone, password)
    .then(() => dispatch(loginSuccess({ emailOrPhone, password })))
    .catch(err => console.log(err));
};

const loginSuccess = res => dispatch => {
  console.log(res, "success");
  dispatch({ type: "LOGIN_SUCCESS", ...res });
};

export const logout = () => dispatch => ({ type: "persist/PURGE" });
