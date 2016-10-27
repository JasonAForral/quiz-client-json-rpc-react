import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

const initialState = {
  timestamp: 0,
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case NEW_QUESTION_REQUEST:
      return {
        ...state,
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
    default:
      return state
  }
}