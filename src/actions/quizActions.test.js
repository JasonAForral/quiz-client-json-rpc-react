import {
  UPDATE_COUNTER,
} from '../constants/quizConstants'
import {
  updateCounter,
} from './quizActions'


describe('quiz actions', () => {
  it('updateCounter should create an action', () => {

    let expected = {
      correctCount: 4,
      questionsDoneCount: 5,
      type: UPDATE_COUNTER,
    }

    let oldState = {
      correctCount: 3,
      questionsDoneCount: 4,
      guessIsCorrect: true, 
    }

    let actual = updateCounter(oldState)

    expect(actual).toEqual(expected)
  })

    it('updateCounter should create an action wrong', () => {

    let expected = {
      correctCount: 3,
      questionsDoneCount: 5,
      type: UPDATE_COUNTER,
    }

    let oldState = {
      correctCount: 3,
      questionsDoneCount: 4,
      guessIsCorrect: false, 
    }

    let actual = updateCounter(oldState)

    expect(actual).toEqual(expected)
  })
})