export const TypeSession = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',

  LOGOUT: 'LOGOUT',
};

export const logitRequest = () => ({
  type: TypeSession.LOGIN_REQUEST,
});

export const logitSuccess = (res) => ({
  type: TypeSession.LOGIN_SUCCESS,
  payload: { res },
});

export const logitError = (error) => ({
  type: TypeSession.LOGIN_ERROR,
  payload: { error },
});

export const logOut = () => ({
  type: TypeSession.LOGOUT,
});
