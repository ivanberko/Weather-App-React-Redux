import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError,
} from '../actions/actionSession';
import sessionApi from '../../services/sessionApi';

export const signup = (credentials) => (dispatch) => {
  dispatch(signupRequest());
  sessionApi
    .signup(credentials)
    .then((res) => {
      dispatch(signupSuccess(res));
    })
    .catch((error) => {
      dispatch(signupError(error));
    });
};

export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  sessionApi
    .login(credentials)
    .then((res) => {
      dispatch(loginSuccess(res));
    })
    .catch((error) => {
      dispatch(loginError(error));
    });
};
