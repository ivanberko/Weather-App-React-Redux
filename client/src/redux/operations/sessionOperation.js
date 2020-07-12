import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError,
} from '../actions/actionSession';

export const signup = (credentials) => (dispatch) => {
  dispatch(signupRequest());
  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then((res) => dispatch(signupSuccess(res.data)))
    .catch((error) => {
      dispatch(signupError(error));
    });
};

export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((error) => {
      dispatch(loginError(error));
    });
};
