import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
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

export const loginRequest = timestamp => ({
  timestamp,
  type: LOGIN_REQUEST,
})

export const loginResponseFailure = json => ({
  error: json.error,
  timestamp: json.id,
  type: LOGIN_RESPONSE_FAILURE,
})

export const loginResponseSuccess = json => ({
  username: json.result.username,
  timestamp: json.id,
  type: LOGIN_RESPONSE_SUCCESS,
})

export const fetchLogin = (username, password) => dispatch => {
  let now = Date.now()
  dispatch(loginRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'Login',
        parameters: {
          username,
          password,
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
        return dispatch(loginResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(loginResponseFailure(json))
      }
    })
}