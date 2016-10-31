import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

const initialState = {
  answers: [],
  error: {
    code: -1,
    message: '',
  },
  question: {
    id: -1,
    text: '',
  },
  timestamp: 0,
}

export default function question(state = initialState, action) {
  switch (action.type) {
    case NEW_QUESTION_REQUEST:
      return state
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