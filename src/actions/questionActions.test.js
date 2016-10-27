import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from '../constants/questionConstants'
import {
  newQuestionRequest,
  newQuestionResponseFailure,
  newQuestionResponseSuccess,
} from './questionActions'

describe('question actions', () => {
  it('newQuestionRequest should create an action', () => {

    let expected = {
      type: NEW_QUESTION_REQUEST,
    }

    let actual = newQuestionRequest()

    expect(actual).toEqual(expected)
  })

  it('newQuestionResponseFailure should create an action', () => {

    let expected = {
      error: {
        code: 1,
        message: 'No Questions Exception',
      },
      timestamp: 1,
      type: NEW_QUESTION_RESPONSE_FAILURE,
    }

    let error = {
      code: 1,
      message: 'No Questions Exception',
    }

    let action = newQuestionResponseFailure(error)

    action.timestamp = expected.timestamp

    let actual = action;
    expect(actual).toEqual(expected)
  })

  it('newQuestionResponseFailure should have a timestamp', () => {

    let expected = true

    let action = newQuestionResponseFailure()

    let actual = Number.isInteger(action.timestamp)

    expect(actual).toEqual(expected)
  })

  it('newQuestionResponseSuccess should create an action', () => {

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
      type: NEW_QUESTION_RESPONSE_SUCCESS,
    }

    let questionAndAnswers = {
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
    }

    let action = newQuestionResponseSuccess(
      questionAndAnswers.question, 
      questionAndAnswers.answers
    )

    action.timestamp = expected.timestamp

    let actual = action;
    expect(actual).toEqual(expected)
  })

  it('newQuestionResponseSuccess should have a timestamp', () => {

    let expected = true

    let action = newQuestionResponseSuccess()

    let actual = Number.isInteger(action.timestamp)

    expect(actual).toEqual(expected)
  })
})