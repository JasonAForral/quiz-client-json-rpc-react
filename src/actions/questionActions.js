import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

export const newQuestionRequest = (quizId, timestamp) => ({
  quizId,
  timestamp,
  type: NEW_QUESTION_REQUEST,
})

export const newQuestionResponseFailure = json => ({
  error: json.error,
  timestamp: json.id,
  type: NEW_QUESTION_RESPONSE_FAILURE,
})

export const newQuestionResponseSuccess = json => ({
  answers: json.result.answers,
  question: json.result.question,
  timestamp: json.id,
  type: NEW_QUESTION_RESPONSE_SUCCESS,
})

export const fetchNewQuestion = quizId => dispatch => {
  let now = Date.now()
  dispatch(newQuestionRequest(quizId, now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'newQuestion',
        params: {
          quizId, 
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
        return dispatch(newQuestionResponseSuccess(json))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(newQuestionResponseFailure(json))
      }
    })
}
