import {
  ANSWER_QUESTION_REQUEST,
  ANSWER_QUESTION_RESPONSE_FAILURE,
  ANSWER_QUESTION_RESPONSE_SUCCESS,
} from '../constants/answerConstants'


export const answerQuestionRequest = (guessId, timestamp) => ({
  guessId,
  timestamp,
  type: ANSWER_QUESTION_REQUEST,
})

export const answerQuestionResponseFailure = json => ({
  error: json.error,
  type: ANSWER_QUESTION_RESPONSE_FAILURE,
  timestamp: json.id,
})

export const answerQuestionResponseSuccess = (json, guessId) => ({
  correctId: json.result.answerId,
  guessIsCorrect: (json.result.answerId === guessId),
  type: ANSWER_QUESTION_RESPONSE_SUCCESS,
  timestamp: json.id,
})

export const fetchAnswerQuestion = (questionId, guessId) => dispatch => {
  let now = Date.now()
  dispatch(answerQuestionRequest(guessId, now))
  return fetch('api', {
      body: JSON.stringify({
        id: now,
        jsonrpc: '2.0',
        method: 'answerQuestion',
        params: {
          questionId,
          answerId: guessId,
        },
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
        return dispatch(answerQuestionResponseSuccess(json, guessId))
      } else if (json.hasOwnProperty('error')) {
        return dispatch(answerQuestionResponseFailure(json))
      }
    })
}