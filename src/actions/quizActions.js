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
