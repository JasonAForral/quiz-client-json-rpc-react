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

export const createAccountRequest = timestamp => ({
  timestamp,
  type: CREATE_ACCOUNT_REQUEST,
})

export const createAccountResponseFailure = json => ({
  error: json.error,
  timestamp: json.id,
  type: CREATE_ACCOUNT_RESPONSE_FAILURE,
})

export const createAccountResponseSuccess = json => ({
  result: json.result,
  timestamp: json.id,
  type: CREATE_ACCOUNT_RESPONSE_SUCCESS,
})

export const getActiveSessionRequest = timestamp => ({
  timestamp,
  type: GET_ACTIVE_SESSION_REQUEST,
})

export const getActiveSessionResponseFailure = json => ({
  error: json.error,
  timestamp: json.id,
  type: GET_ACTIVE_SESSION_RESPONSE_FAILURE,
})

export const getActiveSessionResponseSuccess = json => ({
  timestamp: json.id,
  type: GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  username: json.result.username,
})

export const loginRequest = timestamp => ({
  timestamp,
  fetchingLogin: true,
  type: LOGIN_REQUEST,
})

export const loginResponseFailure = json => ({
  error: json.error,
  fetchingLogin: false,
  timestamp: json.id,
  type: LOGIN_RESPONSE_FAILURE,
})

export const loginResponseSuccess = json => ({
  fetchingLogin: false,
  timestamp: json.id,
  type: LOGIN_RESPONSE_SUCCESS,
  username: json.result.username,
})

export const fetchLogin = (username, password, router) => dispatch => {
  let now = Date.now()
  dispatch(loginRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'login',
        params: {
          username,
          password,
        },
      }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    .then(response => response.json())
    .then(json => {
      if (json.hasOwnProperty('result')) {
        router.push('/profile')
        return dispatch(loginResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(loginResponseFailure(json))
      }
    })
}

export const fetchGetActiveSession = () => dispatch => {
  let now = Date.now()
  dispatch(getActiveSessionRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'getActiveSession',
      }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    .then(response => response.json())
    .then(json => {
      if (json.hasOwnProperty('result')) {
        return dispatch(getActiveSessionResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(getActiveSessionResponseFailure(json))
      }
    })
}


export const fetchCreateAccount = (username, password, password2, email, router) => dispatch => {
  let now = Date.now()
  dispatch(createAccountRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'createAccount',
        params: {
          username,
          password,
          password2,
          email,
        }
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    .then(response => response.json())
    .then(json => {
      if (json.hasOwnProperty('result')) {
        router.push('/login')
        return dispatch(createAccountResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(createAccountResponseFailure(json))
      }
    })
}

export const logoutRequest = timestamp => ({
  fetchingLogout: true,
  timestamp,
  type: LOGOUT_REQUEST,
})

export const logoutResponseFailure = json => ({
  error: json.error,
  fetchingLogout: false,
  timestamp: json.id,
  type: LOGOUT_RESPONSE_FAILURE,
})

export const logoutResponseSuccess = json => ({
  fetchingLogout: false,
  timestamp: json.id,
  type: LOGOUT_RESPONSE_SUCCESS,
})

export const fetchLogout = router => dispatch => {
  let now = Date.now()
  dispatch(logoutRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'logout',
      }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    .then(response => response.json())
    .then(json => {
      if (json.hasOwnProperty('result')) {
        router.push('/login')
        return dispatch(logoutResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(logoutResponseFailure(json))
      }
    })
}
