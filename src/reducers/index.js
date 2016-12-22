import { combineReducers } from 'redux'
import questions from './questions'
import quiz from './quiz'
import session from './session'

const rootReducer = combineReducers({
  questions,
  quiz,
  session,
})

export default rootReducer