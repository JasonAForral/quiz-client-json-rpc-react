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
      quizId: 2,
      timestamp: 1,
      type: NEW_QUESTION_REQUEST,
    }

    let actual = newQuestionRequest(2, 1)

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

    let json = { 
      error: {
        code: 1,
        message: 'No Questions Exception',
        
      },
      id: 1,
    }

    let actual = newQuestionResponseFailure(json)

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

    let json = {
      id: 1,
      result: {
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
      },
    }

    let action = newQuestionResponseSuccess(json)

    let actual = action;
    expect(actual).toEqual(expected)
  })
})
