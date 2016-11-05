import question from './quiz'
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
  NEXT_QUESTION
} from '../constants/quizConstants'


describe('quiz reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      questionsDoneCount: 0,
      timestamp: 0,
    }

    let state = undefined

    let action = {}

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      questionsDoneCount: 0,
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
      correctCount: 0,
      questionsDoneCount: 0,
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
      correctCount: 0,
      questionsDoneCount: 0,
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
      correctCount: 0,
      questionsDoneCount: 0,
      guessId: 1,
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
      correctCount: 0,
      questionsDoneCount: 0,
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
      timestamp: 3,
      type: ANSWER_QUESTION_RESPONSE_SUCCESS,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle correct NEXT_QUESTION action', () => {

    let expected = {
      answers: [
        { stuff: 'stuff'}
      ],
      correctCount: 6,
      question: 'stuff',
      questionsDoneCount: 7,
      timestamp: 3,
    }

    let state = {
      answers: [
        { stuff: 'stuff'}
      ],
      correctCount: 5,
      correctId: 2,
      guessId: 2,
      guessIsCorrect: true,
      question: 'stuff',
      questionsDoneCount: 6,
    }

    let action = {
      timestamp: 3,
      type: NEXT_QUESTION,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle incorrect NEXT_QUESTION action', () => {

    let expected = {
      answers: [
        { stuff: 'stuff'}
      ],
      correctCount: 0,
      question: 'stuff',
      questionsDoneCount: 2,
      timestamp: 4,
    }

    let state = {
      answers: [
        { stuff: 'stuff'}
      ],
      correctCount: 0,
      correctId: 2,
      guessId: 3,
      guessIsCorrect: false,
      question: 'stuff',
      questionsDoneCount: 1,
    }

    let action = {
      timestamp: 4,
      type: NEXT_QUESTION,
    }

    let actual = question(state, action)

    expect(actual).toEqual(expected)
  })
})

