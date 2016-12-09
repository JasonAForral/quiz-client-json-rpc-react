import quiz from './quiz'
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
  GET_QUIZZES_REQUEST,
  GET_QUIZZES_RESPONSE_FAILURE,
  GET_QUIZZES_RESPONSE_SUCCESS,
} from '../constants/quizConstants'
import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_RESPONSE_FAILURE,
  CREATE_ACCOUNT_RESPONSE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE_FAILURE,
  LOGIN_RESPONSE_SUCCESS,
} from '../constants/securityConstants'

describe('quiz reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 0,
    }

    let state = undefined

    let action = {}

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle NEW_QUESTION_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      quizId: 2,
      timestamp: 1,
    }

    let state = {
      answers: [
        'old stuff',
      ],
      correctCount: 0,
      question: 'old stuff',
      doneCount: 0,
      correctId: 'old stuff',
      guessid: 'old stuff',
      guessIsCorrect: 'old stuff',
    }

    let action = {
      quizId: 2,
      timestamp: 1,
      type: NEW_QUESTION_REQUEST,
    }

    let actual = quiz(state, action)

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

    let actual = quiz(state, action)

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

    let state = {
      correctId: 2,
      guessId: 2,
      guessIsCorrect: true,
    }

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

    let actual = quiz(state, action)

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

    let actual = quiz(state, action)

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

    let actual = quiz(state, action)

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

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle GET_QUIZZES_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
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
      answers: [],
      correctCount: 0,
      doneCount: 0,
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
      answers: [],
      correctCount: 0,
      doneCount: 0,
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

  // Login Actions ****************

  it('should handle LOGIN_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 1,
    }

    let state = undefined

    let action = {
      guessId: 1,
      timestamp: 1,
      type: LOGIN_REQUEST,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_RESPONSE_FAILURE action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      error: {
        code: 20,
        message: 'Invalid login credentials',
      },
      timestamp: 1,
    }

    let state = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 0,
    }

    let action = {
      error: {
        code: 20,
        message: 'Invalid login credentials',
      },
      timestamp: 1,
      type: LOGIN_RESPONSE_FAILURE,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_RESPONSE_SUCCESS action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 1,
      username: 'HatTrick',
    }

    let state = undefined

    let action = {
      timestamp: 1,
      type: LOGIN_RESPONSE_SUCCESS,
      username: 'HatTrick',
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  // Create Account Actions ****************

  it('should handle CREATE_ACCOUNT_REQUEST action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 1,
    }

    let state = undefined

    let action = {
      guessId: 1,
      timestamp: 1,
      type: CREATE_ACCOUNT_REQUEST,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_ACCOUNT_RESPONSE_FAILURE action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      error: {
        code: 30,
        message: 'Username Exists',
      },
      timestamp: 1,
    }

    let state = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 0,
    }

    let action = {
      error: {
        code: 30,
        message: 'Username Exists',
      },
      timestamp: 1,
      type: CREATE_ACCOUNT_RESPONSE_FAILURE,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_ACCOUNT_RESPONSE_SUCCESS action', () => {

    let expected = {
      answers: [],
      correctCount: 0,
      doneCount: 0,
      timestamp: 1,
    }

    let state = undefined

    let action = {
      timestamp: 1,
      type: CREATE_ACCOUNT_RESPONSE_SUCCESS,
    }

    let actual = quiz(state, action)

    expect(actual).toEqual(expected)
  })
})

