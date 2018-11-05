import { API } from "../api";
import { doSignInWithEmailAndPassword, getId } from "../firebase/auth";
import { doCreateUser } from "../firebase/db";

export const login = ({ emailOrPhone, password }) => dispatch => {
  dispatch({
    type: "LOGIN",
    emailOrPhone,
    password
  });
  return doSignInWithEmailAndPassword(emailOrPhone, password)
    .then(() => doCreateUser(getId(), "jose canizares", emailOrPhone))
    .then(() => dispatch(loginSuccess({ emailOrPhone, password })))
    .catch(err => console.log(err));
};

const loginSuccess = res => dispatch => {
  dispatch({ type: "LOGIN_SUCCESS", ...res });
};

export const logout = () => dispatch => ({ type: "persist/PURGE" });
