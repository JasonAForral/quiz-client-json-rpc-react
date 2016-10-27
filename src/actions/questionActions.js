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

export const newQuestionResponseSuccess = (question, answers) => ({
  question,
  answers,
  type: NEW_QUESTION_RESPONSE_SUCCESS,
  timestamp: Date.now(),
})