import {
  GET_QUIZZES_REQUEST,
  GET_QUIZZES_RESPONSE_FAILURE,
  GET_QUIZZES_RESPONSE_SUCCESS,
} from '../constants/quizConstants'
import {
  getQuizzesRequest,
  getQuizzesResponseFailure,
  getQuizzesResponseSuccess,
} from './quizActions'

describe('quiz actions', () => {
  it('getQuizzesRequest should create an action', () => {

    let expected = {
      timestamp: 1,
      type: GET_QUIZZES_REQUEST,
    }

    let actual = getQuizzesRequest(1);

    expect(actual).toEqual(expected)
  })

  it('getQuizzesResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 3,
        message: 'No Quizzes Exception',
      },
      timestamp: 1,
      type: GET_QUIZZES_RESPONSE_FAILURE,
    }

    let json = { 
      error: {
        code: 3,
        message: 'No Quizzes Exception',
      },
      id: 1,
    }

    let actual = getQuizzesResponseFailure(json)

    expect(actual).toEqual(expected)
  })

  it('getQuizzesResponseSuccess should create an action', () => {

    let expected = {
      quizzes: [
        {
          id: 1,
          text: 'State Capitals',
        },
        {
          id: 2,
          text: "Atomic Numbers"
        }
      ],
      timestamp: 1,
      type: GET_QUIZZES_RESPONSE_SUCCESS,
    }

    let json = {
      result: {
        quizzes: [
          {
            id: 1,
            text: 'State Capitals',
          },
          {
            id: 2,
            text: "Atomic Numbers"
          }
        ],
      },
      id: 1,
      type: GET_QUIZZES_RESPONSE_SUCCESS,
    }

    let actual = getQuizzesResponseSuccess(json)

    expect(actual).toEqual(expected)
  })
})
