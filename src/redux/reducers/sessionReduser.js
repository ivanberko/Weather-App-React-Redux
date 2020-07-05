import { combineReducers } from 'redux';
import { TypeSession } from '../actions/actionSession';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case TypeSession.LOGIN_SUCCESS:
      return payload.res.user;

    case TypeSession.LOGOUT:
      return null;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case TypeSession.LOGIN_SUCCESS:
      return payload.res.token;

    case TypeSession.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case TypeSession.LOGIN_SUCCESS:
      return true;

    case TypeSession.LOGOUT:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case TypeSession.LOGIN_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  authenticated,
  error,
});
