import {
  NEXT_QUESTION,
} from './quizConstants'

describe('question constants', () => {
  it('NEXT_QUESTION should not be undefined', () => {

    let expected = true

    let actual = undefined !== NEXT_QUESTION

    expect(actual).toEqual(expected)
  })
})