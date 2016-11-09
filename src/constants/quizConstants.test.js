import {
  GET_QUIZZES_REQUEST,
  GET_QUIZZES_RESPONSE_FAILURE,
  GET_QUIZZES_RESPONSE_SUCCESS,
} from './quizConstants'

describe('question constants', () => {
  it('GET_QUIZZES_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== GET_QUIZZES_REQUEST

    expect(actual).toEqual(expected)
  })

  it('GET_QUIZZES_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== GET_QUIZZES_RESPONSE_FAILURE

    expect(actual).toEqual(expected)
  })

  it('GET_QUIZZES_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== GET_QUIZZES_RESPONSE_SUCCESS

    expect(actual).toEqual(expected)
  })
})
