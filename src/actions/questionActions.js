import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

export const newQuestionRequest = timestamp => ({
  timestamp,
  type: NEW_QUESTION_REQUEST,
})

export const newQuestionResponseFailure = json => ({
  error: json.error,
  type: NEW_QUESTION_RESPONSE_FAILURE,
  timestamp: json.id,
})

export const newQuestionResponseSuccess = (json) => ({
  question: json.result.question,
  answers: json.result.answers,
  type: NEW_QUESTION_RESPONSE_SUCCESS,
  timestamp: json.id,
})

export const fetchNewQuestion = () => dispatch => {
  let now = Date.now()
  dispatch(newQuestionRequest(now))
  return fetch('api', {
      body: {
        id: now,
        jsonrpc: '2.0',
        method: 'getQuestion',
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    .then(response => response.json())
    .then(json => {
      if (json.hasOwnProperty('result')) {
        return dispatch(newQuestionResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(newQuestionResponseFailure(json))
      }
    })
}