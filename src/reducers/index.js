import { combineReducers } from 'redux'
import quiz from './quiz'
import session from './session'

const rootReducer = combineReducers({
  quiz,
  session,
})

export default rootReducer