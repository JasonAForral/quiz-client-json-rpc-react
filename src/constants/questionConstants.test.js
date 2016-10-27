import {
  NEW_QUESTION_REQUEST,
  NEW_QUESTION_RESPONSE_FAILURE,
  NEW_QUESTION_RESPONSE_SUCCESS,
} from './questionConstants'

describe('question constants', () => {
  it('NEW_QUESTION_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== NEW_QUESTION_REQUEST

    expect(actual).toEqual(expected)
  })

  it('NEW_QUESTION_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== NEW_QUESTION_RESPONSE_FAILURE

    expect(actual).toEqual(expected)
  })

  it('NEW_QUESTION_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== NEW_QUESTION_RESPONSE_SUCCESS

    expect(actual).toEqual(expected)
  })
})
