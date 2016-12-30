import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  GET_ACTIVE_SESSION_REQUEST,
  GET_ACTIVE_SESSION_RESPONSE_FAILURE,
  GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
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
  fetchingGetActiveSession: false,
  timestamp: 0,
}

export default function session(state = initialState, action) {
  switch (action.type) {

    case GET_ACTIVE_SESSION_REQUEST:
      return {
        ...state,
        fetchingGetActiveSession: action.fetchingGetActiveSession,
        error: undefined,
        timestamp: action.timestamp,
      }
    case GET_ACTIVE_SESSION_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        fetchingGetActiveSession: action.fetchingGetActiveSession,
        timestamp: action.timestamp,
      }
    case GET_ACTIVE_SESSION_RESPONSE_SUCCESS:
      console.log(action.username)
      return {
        ...state,
        fetchingGetActiveSession: action.fetchingGetActiveSession,
        username: action.username,
        timestamp: action.timestamp,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        fetchingLogin: action.fetchingLogin,
        error: undefined,
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
        error: undefined,
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
        error: undefined,
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
