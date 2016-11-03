import {
  ANSWER_QUESTION_REQUEST,
  ANSWER_QUESTION_RESPONSE_FAILURE,
  ANSWER_QUESTION_RESPONSE_SUCCESS,
} from '../constants/answerConstants'
import {
  answerQuestionRequest,
  answerQuestionResponseFailure,
  answerQuestionResponseSuccess,
} from './answerActions'

describe('answer actions', () => {
  it('answerQuestionRequest should create an action', () => {

    let expected = {
      guessId: 2,
      timestamp: 1,
      type: ANSWER_QUESTION_REQUEST,
    }

    let actual = answerQuestionRequest(2, 1)

    expect(actual).toEqual(expected)
  })

  it('answerQuestionResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: -32602,
        message: 'Invalid params',
      },
      timestamp: 1,
      type: ANSWER_QUESTION_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: -32602,
        message: 'Invalid params',
        
      },
      id: 1,
    }

    let actual = answerQuestionResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('answerQuestionResponseSuccess should create an action', () => {

    let expected = {
      correctId: 2,
      guessIsCorrect: false,
      timestamp: 1,
      type: ANSWER_QUESTION_RESPONSE_SUCCESS,
    }

    let json = {
      result: {
        answerId: 2,
      },
      id: 1,
      type: ANSWER_QUESTION_RESPONSE_SUCCESS,
    }

    let guessId = 1

    let action = answerQuestionResponseSuccess(json, guessId)

    let actual = action;
    expect(actual).toEqual(expected)
  })

})