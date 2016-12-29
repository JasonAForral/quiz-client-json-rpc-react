import questions from './questions'
import {
  ANSWER_QUESTION_REQUEST,
  ANSWER_QUESTION_RESPONSE_FAILURE,
  ANSWER_QUESTION_RESPONSE_SUCCESS,
} from '../constants/answerConstants'
import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'

describe('question reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 0,
    }

    let state = undefined

    let action = {}

    let actual = questions(state, action)

    expect(actual).toEqual(expected)
  })

  /********************* Answer Actions ***********************/

  it('should handle ANSWER_QUESTION_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      guessId: 1,
      timestamp: 1,
    }

    let state = undefined

    let action = {
      guessId: 1,
      timestamp: 1,
      type: ANSWER_QUESTION_REQUEST,
    }

    let actual = questions(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle ANSWER_QUESTION_RESPONSE_FAILURE action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      error: {
        code: -32602,
        message: 'Invalid params',
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

    let actual = questions(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle ANSWER_QUESTION_RESPONSE_SUCCESS action', () => {

    let expected = {
      correctCount: 4,
      correctId: 1,
      doneCount: 5,
      extra: 'extra',
      guessId: 2,
      guessIsCorrect: false,
      timestamp: 3,
    }

    let state = {
      extra: 'extra',
      correctCount: 4,
      doneCount: 4,
      guessId: 2,
    }

    let action = {
      correctCount: 4,
      correctId: 1,
      doneCount: 5,
      guessIsCorrect: false,
      timestamp: 3,

      type: ANSWER_QUESTION_RESPONSE_SUCCESS,
    }

    let actual = questions(state, action)

    expect(actual).toEqual(expected)
  })

  /********************* Question Actions ***********************/

  it('should handle NEW_QUESTION_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 1,
      doneCount: 1,
      quizId: 2,
      timestamp: 1,
    }

    let state = {
      answers: [
        'old stuff',
      ],
      correctCount: 1,
      question: 'old stuff',
      doneCount: 1,
      correctId: 'old stuff',
      guessid: 'old stuff',
      guessIsCorrect: 'old stuff',
    }

    let action = {
      quizId: 2,
      timestamp: 1,
      type: NEW_QUESTION_REQUEST,
    }

    let actual = questions(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_RESPONSE_FAILURE action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
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

    let actual = questions(state, action)

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
      correctCount: 0,
      doneCount: 0,
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

    let actual = questions(state, action)

    expect(actual).toEqual(expected)
  })
})
