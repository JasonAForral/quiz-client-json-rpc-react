import {
  NEXT_QUESTION,
} from '../constants/quizConstants'

export const nextQuestion = timestamp => ({
  timestamp,
  type: NEXT_QUESTION,
})

// export const fetchNextQuestion = () => dispatch => {
//   dispatch(fetchNewQuestion())
// }