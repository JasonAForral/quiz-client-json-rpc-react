import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE_FAILURE,
  LOGOUT_RESPONSE_SUCCESS,
} from '../constants/securityConstants'

const initialState = {
  fetchingLogin: false,
  fetchingLogout: false,
  timestamp: 0,
}

export default function session(state = initialState, action) {
  switch (action.type) {


    case LOGIN_REQUEST:
      return {
        ...state,
        fetchingLogin: action.fetchingLogin,
        error: action.error,
        timestamp: action.timestamp,
      }
    case LOGIN_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        fetchingLogin: action.fetchingLogin,
        timestamp: action.timestamp,
      }
    case LOGIN_RESPONSE_SUCCESS:
      return {
        ...state,
        fetchingLogin: action.fetchingLogin,
        username: action.username,
        timestamp: action.timestamp,
      }

    case LOGOUT_REQUEST:
      return {
        ...state,
        fetchingLogout: action.fetchingLogout,
        error: action.error,
        timestamp: action.timestamp,
      }
    case LOGOUT_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        fetchingLogout: action.fetchingLogout,
        timestamp: action.timestamp,
      }
    case LOGOUT_RESPONSE_SUCCESS:
      return {
        ...state,
        fetchingLogout: action.fetchingLogout,
        username: undefined,
        timestamp: action.timestamp,
      }

    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        timestamp: action.timestamp,
      }
    case CREATE_ACCOUNT_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        timestamp: action.timestamp,
      }
    case CREATE_ACCOUNT_RESPONSE_SUCCESS:
      return {
        ...state,
        timestamp: action.timestamp,
        username: action.username,
      }

    default:
      return state
  }
}