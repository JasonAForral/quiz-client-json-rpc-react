import {
  GET_QUIZZES_REQUEST,
  GET_QUIZZES_RESPONSE_FAILURE,
  GET_QUIZZES_RESPONSE_SUCCESS,
} from '../constants/quizConstants'

export const getQuizzesRequest = timestamp => ({
  timestamp,
  type: GET_QUIZZES_REQUEST,
})

export const getQuizzesResponseFailure = json => ({
  error: json.error,
  timestamp: json.id,
  type: GET_QUIZZES_RESPONSE_FAILURE,
})

export const getQuizzesResponseSuccess = json => ({
  quizzes: json.result.quizzes,
  timestamp: json.id,
  type: GET_QUIZZES_RESPONSE_SUCCESS,
})

export const fetchGetQuizzes = () => dispatch => {
  let now = Date.now()
  dispatch(getQuizzesRequest(now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'getQuizzes',
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
        return dispatch(getQuizzesResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(getQuizzesResponseFailure(json))
      }
    })
}