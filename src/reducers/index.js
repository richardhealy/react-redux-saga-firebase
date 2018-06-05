import { types } from '../actions';
import { strings } from '../strings';

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  message:null
}

const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGIN_WITH_EMAIL.REQUEST:
    case types.REGISTER_WITH_EMAIL.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
        message:null
      }
    case types.LOGIN.SUCCESS:
    case types.LOGIN_WITH_EMAIL.SUCCESS:
    case types.CREATE_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true
      }
    case types.LOGIN.FAILURE:
    case types.LOGIN_WITH_EMAIL.FAILURE:
    case types.REGISTER_WITH_EMAIL.FAILURE:
    case types.CREATE_USER.FAILURE:
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
        message: action.error.message
      }
    case types.PASSWORD_CHANGE.SUCCESS:
      return {
        ...state,
        message: strings.MESSAGES.PASSWORD_CHANGE.SUCCESS
      }
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    case types.SYNC_USER:
      return {
        ...state,
        loggedIn: action.user != null,
        user: action.user
      }
    default:
      return state
  }
}

export default authReducer;