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

const initialState = {
  answers: [],
  timestamp: 0,
}

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case NEW_QUESTION_REQUEST:
      return {
        ...state,
        timestamp: action.timestamp,
      }
    case NEW_QUESTION_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        timestamp: action.timestamp,
      }
    case NEW_QUESTION_RESPONSE_SUCCESS:
      return {
        ...state,
        answers: action.answers,
        question: action.question,
        timestamp: action.timestamp,
      }
    case ANSWER_QUESTION_REQUEST:
      return {
        ...state,
        guessId: action.guessId,
        timestamp: action.timestamp,
      }
    case ANSWER_QUESTION_RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        timestamp: action.timestamp,
      }
    case ANSWER_QUESTION_RESPONSE_SUCCESS:
      return {
        ...state,
        correctId: action.correctId,
        guessIsCorrect: action.guessIsCorrect,
        timestamp: action.timestamp,
      }
    default:
      return state
  }
}