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
  UPDATE_COUNTER,
} from '../constants/quizConstants'

const initialState = {
  answers: [],
  correctCount: 0,
  questionsDoneCount: 0,
  timestamp: 0,
}

export default function quiz(state = initialState, action) {
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
        correctId: action.correctId,
        guessIsCorrect: action.guessIsCorrect,
        timestamp: action.timestamp,
      }
    case NEW_QUESTION_REQUEST:
      return {
        ...state,
        answers: [],
        correctId: undefined,
        guessid: undefined,
        guessIsCorrect: undefined,
        question: undefined,
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
    case UPDATE_COUNTER:
      return {
        ...state,
        correctCount: action.correctCount, 
        questionsDoneCount: action.questionsDoneCount,
      }
    default:
      return state
  }
}