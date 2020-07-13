import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
} from '../actions/actionSession';
import { getToken } from '../sessionSelectors/sessionSelectors';

export const signup = (credentials) => (dispatch) => {
  dispatch(signupRequest());
  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then((res) => dispatch(signupSuccess(res.data)))
    .catch((error) => {
      dispatch(signupError(error.response.data));
    });
};

export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((error) => {
      dispatch(loginError(error.response.data));
    });
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) {
    return;
  }

  dispatch(refreshUserRequest());

  const opiotns = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .get('http://localhost:4040/auth/current', opiotns)
    .then((res) => {
      dispatch(refreshUserSuccess(res));
    })
    .catch((error) => {
      dispatch(refreshUserError(error));
    });
};
