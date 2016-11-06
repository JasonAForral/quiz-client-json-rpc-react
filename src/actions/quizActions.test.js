import {
  NEXT_QUESTION,
} from '../constants/quizConstants'
import {
  nextQuestion,
} from './quizActions'


describe('quiz actions', () => {
  it('nextQuestion should create an action', () => {

    let expected = {
      correctCount: 4,
      questionsDoneCount: 5,
      type: NEXT_QUESTION,
    }

    let oldState = {
      correctCount: 3,
      questionsDoneCount: 4,
      guessIsCorrect: true, 
    }

    let actual = nextQuestion(oldState)

    expect(actual).toEqual(expected)
  })

    it('nextQuestion should create an action wrong', () => {

    let expected = {
      correctCount: 3,
      questionsDoneCount: 5,
      type: NEXT_QUESTION,
    }

    let oldState = {
      correctCount: 3,
      questionsDoneCount: 4,
      guessIsCorrect: false, 
    }

    let actual = nextQuestion(oldState)

    expect(actual).toEqual(expected)
  })
})