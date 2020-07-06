import {
  loginRequest,
  loginSuccess,
  loginError,
} from '../actions/actionSession';
import sessionApi from '../../services/sessionApi';

const login = (credentials) => (dispatch) => {
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

export default login;
