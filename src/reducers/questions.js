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
  correctCount: 0,
  doneCount: 0,
  timestamp: 0,
}

export default function questions(state = initialState, action) {
  switch (action.type) {

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
        correctCount: action.correctCount,
        correctId: action.correctId,
        doneCount: action.doneCount,
        guessIsCorrect: action.guessIsCorrect,
        timestamp: action.timestamp,
      }

    // new question 

    case NEW_QUESTION_REQUEST:
      return {
        ...state,
        answers: [],
        correctId: undefined,
        guessid: undefined,
        guessIsCorrect: undefined,
        question: undefined,
        quizId: action.quizId,
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
        correctId: undefined,
        guessId: undefined,
        guessIsCorrect: undefined,
        question: action.question,
        timestamp: action.timestamp,
      }

    default:
      return state
  }
}