import question from './question'
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


describe('question reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      answers: [],
      error: {
        code: -1,
        message: '',
      },
      question: {
        id: -1,
        text: '',
      },
      timestamp: 0
    }

    let state = undefined

    let action = {}

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_REQUEST action', () => {

    let expected = {
      answers: [],
      error: {
        code: -1,
        message: '',
      },
      question: {
        id: -1,
        text: '',
      },
      timestamp: 1,
    }

    let state = undefined

    let action = {
      timestamp: 1,
      type: NEW_QUESTION_REQUEST,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_RESPONSE_FAILURE action', () => {

    let expected = {
      answers: [],
      error: {
        code: 1,
        message: 'No Questions Exception',
      },
      question: {
        id: -1,
        text: '',
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
      error: {
        code: -1,
        message: '',
      },
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

  /********************* Answer Actions ***********************/

  it('should handle ANSWER_QUESTION_REQUEST action', () => {

    let expected = {
      answers: [],
      error: {
        code: -1,
        message: '',
      },
      guessId: 1,
      question: {
        id: -1,
        text: '',
      },
      timestamp: 1,
    }

    let state = undefined

    let action = {
      guessId: 1,
      timestamp: 1,
      type: ANSWER_QUESTION_REQUEST,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle ANSWER_QUESTION_RESPONSE_FAILURE action', () => {

    let expected = {
      answers: [],
      error: {
        code: -32602,
        message: 'Invalid params',
      },
      question: {
        id: -1,
        text: '',
      },
      timestamp: 1,
    }

    let state = undefined

    let action = {
      error: {
        code: -32602,
        message: 'Invalid params',
      },
      timestamp: 1,
      type: ANSWER_QUESTION_RESPONSE_FAILURE,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle ANSWER_QUESTION_RESPONSE_SUCCESS action', () => {

    let expected = {
      correctId: 1,
      extra: 'extra',
      guessId: 2,
      guessIsCorrect: false,
      timestamp: 3,
    }

    let state = {
      extra: 'extra',
      guessId: 2,
    }

    let action = {
      correctId: 1,
      guessIsCorrect: false,
      timestamp: 3,
      type: ANSWER_QUESTION_RESPONSE_SUCCESS,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })
})

