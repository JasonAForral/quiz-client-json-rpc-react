import {
  NEXT_QUESTION,
} from '../constants/quizConstants'
import {
  nextQuestion,
} from './quizActions'


describe('question actions', () => {
  it('nextQuestion should create an action', () => {

    let expected = {
      timestamp: 1,
      type: NEXT_QUESTION,
    }

    let actual = nextQuestion(1)

    expect(actual).toEqual(expected)
  })
})