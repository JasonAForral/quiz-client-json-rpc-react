import question from './question'
import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

describe('question reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      timestamp: 0,
    }

    let state = undefined

    let action = {}

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_REQUEST action', () => {

    let expected = {
      timestamp: 0,
    }

    let state = undefined

    let action = {
      type: NEW_QUESTION_REQUEST,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_RESPONSE_FAILURE action', () => {

    let expected = {
      error: {
        code: 1,
        message: 'No Questions Exception',
      },
      timestamp: 1,
    }

    let state = undefined

    let action = {
      error: {
        code: 1,
        message: 'No Questions Exception',
      },
      timestamp: 1,
      type: NEW_QUESTION_RESPONSE_FAILURE,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_RESPONSE_SUCCESS action', () => {

    let expected = {
      answers: [
        {
          id: 1,
          text: 'A type of dog.',
        },
        {
          id: 2,
          text: 'Something you wear on your head.',
        },
        {
          id: 3,
          text: 'Something you eat.',
        },
        {
          id: 4,
          text: 'A type of tree.',
        },
      ],
      question: {
        id: 1,
        text: 'What is a hat?',
      },
      timestamp: 1,
    }

    let state = undefined

    let action = {
      answers: [
        {
          id: 1,
          text: 'A type of dog.',
        },
        {
          id: 2,
          text: 'Something you wear on your head.',
        },
        {
          id: 3,
          text: 'Something you eat.',
        },
        {
          id: 4,
          text: 'A type of tree.',
        },
      ],
      question: {
        id: 1,
        text: 'What is a hat?',
      },
      timestamp: 1,
      type: NEW_QUESTION_RESPONSE_SUCCESS,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })
})

