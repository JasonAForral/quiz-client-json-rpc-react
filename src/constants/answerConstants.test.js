import {
  ANSWER_QUESTION_REQUEST,
  ANSWER_QUESTION_RESPONSE_FAILURE,
  ANSWER_QUESTION_RESPONSE_SUCCESS,
} from './answerConstants'

describe('answer constants', () => {
  it('ANSWER_QUESTION_REQUEST should not be undefined', () => {

    let expected = true

    let actual = undefined !== ANSWER_QUESTION_REQUEST

    expect(actual).toEqual(expected)
  })

    it('ANSWER_QUESTION_RESPONSE_FAILURE should not be undefined', () => {

    let expected = true

    let actual = undefined !== ANSWER_QUESTION_REQUEST

    expect(actual).toEqual(expected)
  })

    it('ANSWER_QUESTION_RESPONSE_SUCCESS should not be undefined', () => {

    let expected = true

    let actual = undefined !== ANSWER_QUESTION_REQUEST

    expect(actual).toEqual(expected)
  })
})
