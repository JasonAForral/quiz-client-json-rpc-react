import quiz from './quiz'
import {
  GET_QUIZZES_REQUEST,
  GET_QUIZZES_RESPONSE_FAILURE,
  GET_QUIZZES_RESPONSE_SUCCESS,
} from '../constants/quizConstants'

describe('quiz reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      timestamp: 0,
    }

    let state = undefined

    let action = {}

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle GET_QUIZZES_REQUEST action', () => {

    let expected = {
      timestamp: 1,
    }

    let state = undefined

    let action = {
      timestamp: 1,
      type: GET_QUIZZES_REQUEST,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle GET_QUIZZES_RESPONSE_FAILURE action', () => {

    let expected = {
      error: {
        code: 3,
        message: 'No Quizzes Exception',
      },
      timestamp: 1,
    }

    let state = undefined

    let action = {
      error: {
        code: 3,
        message: 'No Quizzes Exception',
      },
      timestamp: 1,
      type: GET_QUIZZES_RESPONSE_FAILURE,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle GET_QUIZZES_RESPONSE_SUCCESS action', () => {

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
    }

    let state = undefined

    let action = {
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

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })
})
