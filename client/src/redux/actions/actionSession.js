export const TypeSession = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',

  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',

  LOGOUT: 'LOGOUT',
  INVALID_DATA: 'INVALID_DATA',
};

export const refreshUserRequest = () => ({
  type: TypeSession.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = (res) => ({
  type: TypeSession.REFRESH_USER_SUCCESS,
  payload: { res },
});

export const refreshUserError = (error) => ({
  type: TypeSession.REFRESH_USER_ERROR,
  payload: { error },
});

export const loginRequest = () => ({
  type: TypeSession.LOGIN_REQUEST,
});

export const loginSuccess = (res) => ({
  type: TypeSession.LOGIN_SUCCESS,
  payload: { res },
});

export const loginError = (error) => ({
  type: TypeSession.LOGIN_ERROR,
  payload: { error },
});

export const signupRequest = () => ({
  type: TypeSession.SIGNUP_REQUEST,
});

export const signupSuccess = (res) => ({
  type: TypeSession.SIGNUP_SUCCESS,
  payload: { res },
});

export const signupError = (error) => ({
  type: TypeSession.SIGNUP_ERROR,
  payload: { error },
});

export const logOut = () => ({
  type: TypeSession.LOGOUT,
});

export const invalidData = (error) => ({
  type: TypeSession.INVALID_DATA,
  payload: error,
});
