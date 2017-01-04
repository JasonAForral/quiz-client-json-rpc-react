import {
  // GET_ACTIVE_SESSION_REQUEST,
  // GET_ACTIVE_SESSION_RESPONSE_FAILURE,
  // GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
  CLEAR_ERROR,
  GET_SESSION_INFO_REQUEST,
  GET_SESSION_INFO_RESPONSE_FAILURE,
  GET_SESSION_INFO_RESPONSE_SUCCESS,
} from '../constants/sessionConstants'

export const clearError = timestamp => ({
  timestamp,
  type: CLEAR_ERROR,
})

// export const getActiveSessionRequest = timestamp => ({
//   timestamp,
//   type: GET_ACTIVE_SESSION_REQUEST,
// })

// export const getActiveSessionResponseFailure = json => ({
//   error: json.error,
//   timestamp: json.id,
//   type: GET_ACTIVE_SESSION_RESPONSE_FAILURE,
// })

// export const getActiveSessionResponseSuccess = json => ({
//   timestamp: json.id,
//   type: GET_ACTIVE_SESSION_RESPONSE_SUCCESS,
//   username: json.result.username,
// })

// export const fetchGetActiveSession = () => dispatch => {
//   let now = Date.now()
//   dispatch(getActiveSessionRequest(now))
//   return fetch('api', {
//       body: JSON.stringify({
//         id: now,
//         jsonrpc: '2.0',
//         method: 'getActiveSession',
//       }),
//       credentials: 'same-origin',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       method: 'POST',
//     })
//     .then(response => response.json())
//     .then(json => {
//       if (json.hasOwnProperty('result')) {
//         return dispatch(getActiveSessionResponseSuccess(json))
//       } else if (json.hasOwnProperty('error')) {
//         return dispatch(getActiveSessionResponseFailure(json))
//       }
//     })
// }

export const getSessionInfoRequest = timestamp => ({
  timestamp,
  type: GET_SESSION_INFO_REQUEST,
})

export const getSessionInfoResponseFailure = json => ({
  error: json.error,
  timestamp: json.id,
  type: GET_SESSION_INFO_RESPONSE_FAILURE,
})

export const getSessionInfoResponseSuccess = json => ({
  email: json.result.email,
  isActive: json.result.isActive,
  timestamp: json.id,
  type: GET_SESSION_INFO_RESPONSE_SUCCESS,
  username: json.result.username,
})

export const fetchGetSessionInfo = () => dispatch => {
  let now = Date.now()
  dispatch(getSessionInfoRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'getSessionInfo',
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
        return dispatch(getSessionInfoResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(getSessionInfoResponseFailure(json))
      }
    })
}
