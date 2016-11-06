import {
  UPDATE_COUNTER,
} from '../constants/quizConstants'

export const updateCounter = oldState => ({
  correctCount: oldState.correctCount + (oldState.guessIsCorrect ? 1 : 0),
  questionsDoneCount: oldState.questionsDoneCount + 1,
  type: UPDATE_COUNTER,
})