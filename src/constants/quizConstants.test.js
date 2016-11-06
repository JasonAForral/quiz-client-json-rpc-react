import {
  UPDATE_COUNTER,
} from './quizConstants'

describe('question constants', () => {
  it('UPDATE_COUNTER should not be undefined', () => {

    let expected = true

    let actual = undefined !== UPDATE_COUNTER

    expect(actual).toEqual(expected)
  })
})