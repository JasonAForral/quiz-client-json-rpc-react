import {
  ANSWER_QUESTION_REQUEST,
  ANSWER_QUESTION_RESPONSE_FAILURE,
  ANSWER_QUESTION_RESPONSE_SUCCESS,
} from '../constants/answerConstants'


export const answerQuestionRequest = timestamp => ({
  timestamp,
  type: ANSWER_QUESTION_REQUEST,
})

export const answerQuestionResponseFailure = json => ({
  error: json.error,
  type: ANSWER_QUESTION_RESPONSE_FAILURE,
  timestamp: json.id,
})

export const answerQuestionResponseSuccess = (json) => ({
  answerId: json.result.answerId,
  type: ANSWER_QUESTION_RESPONSE_SUCCESS,
  timestamp: json.id,
})
