import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'
import {
  ANSWER_QUESTION_REQUEST,
  ANSWER_QUESTION_RESPONSE_FAILURE,
  ANSWER_QUESTION_RESPONSE_SUCCESS,
} from '../constants/answerConstants'
import {
  GET_QUIZZES_REQUEST,
  GET_QUIZZES_RESPONSE_FAILURE,
  GET_QUIZZES_RESPONSE_SUCCESS,
} from '../constants/quizConstants'

const initialState = {
  timestamp: 0,
}

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case GET_QUIZZES_REQUEST:
      return {
        ...state,
        quizzes: action.quizzes,
        timestamp: action.timestamp,
      }
    case GET_QUIZZES_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        timestamp: action.timestamp,
      }
    case GET_QUIZZES_RESPONSE_SUCCESS:
      return {
        ...state,
        quizzes: action.quizzes,
        timestamp: action.timestamp,
      }

    default:
      return state
  }
}