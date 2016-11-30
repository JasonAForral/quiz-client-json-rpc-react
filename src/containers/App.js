import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import Error from '../components/Error'
import QuestionForm from '../components/QuestionForm'
import SelectQuizForm from '../components/SelectQuizForm'
import { fetchAnswerQuestion } from '../actions/answerActions'
import { fetchNewQuestion } from '../actions/questionActions'
import { fetchGetQuizzes } from '../actions/quizActions'

class App extends Component {
  static propTypes = {
    quiz: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const { 
      dispatch,
    } = this.props
    dispatch(fetchGetQuizzes())
  }


  handleSelectQuiz = quizId => {
    const {
      dispatch,
    } = this.props
    dispatch(fetchNewQuestion(quizId))
  }

  handleSubmitAnswer = (questionId, guessId) => {
    const {
      dispatch,
      quiz,
    } = this.props
    const {
      correctCount,
      doneCount,
    } = quiz
    dispatch(fetchAnswerQuestion(questionId, guessId, correctCount, doneCount))
  }

  handleNextQuestion = () => {
    const {
      dispatch,
      quiz,
    } = this.props
    dispatch(fetchNewQuestion(quiz.quizId))
  }

  handleTab = e => {

  }

  handleLogin = e => {
    e.preventDefault()
  }

  render() {
    const {
      quiz,
    } = this.props

    const {
      answers,
      correctCount,
      correctId,
      doneCount,
      error,
      guessId,
      guessIsCorrect,
      question,
      quizId,
      quizzes,
    } = quiz
    const haveQuizzes = undefined !== quizzes
    const quizSelected = undefined !== quizId
    const a = false

    if (a) {
      return (
        <div className='wrapper'>
          <div className='wrapper-inner'>
            This is the login form.
            <form onSubmit={this.handleLogin} className='login-form'>
              <input className='input' placeholder='Username' />
              <br />
              <input className='input' type='password' placeholder='Password' />
              <br />
              <button className='button' type='submit'>Do the thing!</button>
            </form>
            <button className='login-tab'>Log in</button>
            <button className='login-tab'>Create Account</button>
          </div>
        </div>
      )
    }

    if (haveQuizzes && !quizSelected) {
      return (
        <div className='wrapper'>
          <SelectQuizForm
            quizzes={quizzes}
            onSubmit={this.handleSelectQuiz}
          />
          <div className='wrapper-inner'>
            <Error error={error} />
          </div>
        </div>
      )
    }
    const checked = undefined !== correctId
    
    const submitFunction = (checked ? this.handleNextQuestion : this.handleSubmitAnswer)
    const submitText = (checked ? 'Next Question' : 'Submit Answer')

    return (
      <div className='wrapper'>
        {quizSelected && 
          <div className='wrapper-inner'>
          <Counter
            correctCount={correctCount}
            doneCount={doneCount}
          />
          <QuestionForm
            answers={answers}
            correctId={correctId}
            guessId={guessId}
            onSubmit={submitFunction}
            question={question}
            submitText={submitText}
            quizId={quizId}
          />
        </div>
        }
        <div className='wrapper-inner'>
          <Error error={error} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(mapStateToProps)(App)