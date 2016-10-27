import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

export const newQuestionRequest = () => ({
  type: NEW_QUESTION_REQUEST,
})

export const newQuestionResponseFailure = error => ({
  error,
  type: NEW_QUESTION_RESPONSE_FAILURE,
  timestamp: Date.now(),
})

export const newQuestionResponseSuccess = (json) => ({
  question: json.result.question,
  answers: json.result.answers,
  type: NEW_QUESTION_RESPONSE_SUCCESS,
  timestamp: Date.now(),
})

export const fetchNewQuestion = () => dispatch => {
  dispatch(newQuestionRequest())
  return fetch('api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(json => dispatch(newQuestionResponseSuccess(json)))
}