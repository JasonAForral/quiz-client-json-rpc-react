import {
  NEXT_QUESTION,
} from '../constants/quizConstants'

export const nextQuestion = oldState => ({
  correctCount: oldState.correctCount + (oldState.guessIsCorrect ? 1 : 0),
  questionsDoneCount: oldState.questionsDoneCount + 1,
  type: NEXT_QUESTION,
})