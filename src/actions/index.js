export const types = {
  LOGIN: {
    REQUEST: 'LOGIN.REQUEST',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILURE: 'LOGIN.FAILURE'
  },
  LOGIN_WITH_EMAIL: {
    REQUEST: 'LOGIN_WITH_EMAIL.REQUEST',
    SUCCESS: 'LOGIN_WITH_EMAIL.SUCCESS',
    FAILURE: 'LOGIN_WITH_EMAIL.FAILURE'
  },
  LOGOUT: {
    REQUEST: 'LOGOUT.REQUEST',
    SUCCESS: 'LOGOUT.SUCCESS',
    FAILURE: 'LOGOUT.FAILURE'
  },
  REGISTER_WITH_EMAIL: {
    REQUEST: 'REGISTER_WITH_EMAIL.REQUEST',
    SUCCESS: 'REGISTER_WITH_EMAIL.SUCCESS',
    FAILURE: 'REGISTER_WITH_EMAIL.FAILURE'
  },
  CREATE_USER: {
    SUCCESS: 'CREATE_USER.SUCCESS',
    FAILURE: 'CREATE_USER.FAILURE'
  },
  PASSWORD_CHANGE: {
    REQUEST: 'PASSWORD_CHANGE.REQUEST',
    SUCCESS: 'PASSWORD_CHANGE.SUCCESS',
    FAILURE: 'PASSWORD_CHANGE.FAILURE'
  },
  PASSWORD_FORGET: {
    REQUEST: 'PASSWORD_FORGET.REQUEST',
    SUCCESS: 'PASSWORD_FORGET.SUCCESS',
    FAILURE: 'PASSWORD_FORGET.FAILURE'
  },
  SYNC_USER: 'SYNC_USER'
};

export const login = () => ({
  type: types.LOGIN.REQUEST
});

export const loginSuccess = credential => ({
  type: types.LOGIN.SUCCESS,
  credential
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error
});

export const loginWithEmail = (email, password) => ({
  type: types.LOGIN_WITH_EMAIL.REQUEST,
  email,
  password
});

export const loginWithEmailSuccess = credential => ({
  type: types.LOGIN_WITH_EMAIL.SUCCESS,
  credential
});

export const loginWithEmailFailure = error => ({
  type: types.LOGIN_WITH_EMAIL.FAILURE,
  error
});

export const registerWithEmail = (email, password) => ({
  type: types.REGISTER_WITH_EMAIL.REQUEST,
  email,
  password
});

export const registerWithEmailSuccess = credential => ({
  type: types.REGISTER_WITH_EMAIL.SUCCESS,
  credential
});

export const registerWithEmailFailure = error => ({
  type: types.REGISTER_WITH_EMAIL.FAILURE,
  error
});

export const passwordChange = (password) => ({
  type: types.PASSWORD_CHANGE.REQUEST,
  password
});

export const passwordChangeSuccess = credential => ({
  type: types.PASSWORD_CHANGE.SUCCESS
});

export const passwordChangeFailure = error => ({
  type: types.PASSWORD_CHANGE.FAILURE,
  error
});

export const passwordForget = (email) => ({
  type: types.PASSWORD_FORGET.REQUEST,
  email
});

export const passwordForgetSuccess = credential => ({
  type: types.PASSWORD_FORGET.SUCCESS
});

export const passwordForgetFailure = error => ({
  type: types.PASSWORD_FORGET.FAILURE,
  error
});

export const createUserSuccess = key => ({
  type: types.CREATE_USER.SUCCESS,
  key
});

export const createUserFailure = error => ({
  type: types.CREATE_USER.FAILURE,
  error
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
});

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error
});

export const syncUser = user => ({
  type: types.SYNC_USER,
  user
});