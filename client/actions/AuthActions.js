import { API } from "../api";
import { doSignInWithEmailAndPassword } from "../firebase/auth";

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
  // return Promise.resolve(2);
  return doSignInWithEmailAndPassword(emailOrPhone, password)
    .then(() => dispatch(loginSuccess({ emailOrPhone, password })))
    .catch(err => console.log(err));

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

const loginSuccess = res => dispatch => {
  console.log(res, "success");
  dispatch({ type: "LOGIN_SUCCESS", ...res });
};

export const logout = () => dispatch => ({ type: "persist/PURGE" });
