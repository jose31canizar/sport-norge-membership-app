import axios from "axios";
import { API } from "../api";

export const login = ({ emailOrPhone, password }) => dispatch => {
  dispatch({
    type: "LOGIN",
    emailOrPhone,
    password
  });
  // return this.storeData({
  //   emailOrPhone: this.state.emailOrPhone,
  //   password: this.state.password
  // });
  return Promise.resolve(2);
  dispatch(loginSuccess({ emailOrPhone, password }));
  // axios
  //   .post(`http://${API}/login`, { emailOrPhone, password })
  //   .then(function(response) {
  //     console.log(response);
  //     dispatch(loginSuccess(response));
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
};

const loginSuccess = res => dispatch =>
  dispatch({ type: "LOGIN_SUCCESS", ...res });

export const logout = () => dispatch => ({ type: "persist/PURGE" });
