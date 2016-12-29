import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Navbar from './Navbar'

import Counter from '../components/Counter'
import Error from '../components/Error'
import QuestionForm from '../components/QuestionForm'
import SelectQuizForm from '../components/SelectQuizForm'

import { fetchAnswerQuestion } from '../actions/answerActions'
import { fetchNewQuestion } from '../actions/questionActions'
import { fetchGetQuizzes } from '../actions/quizActions'

class App extends Component {
  static propTypes = {
    questions: PropTypes.object.isRequired,
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
      questions,
    } = this.props
    const {
      correctCount,
      doneCount,
    } = questions
    dispatch(fetchAnswerQuestion(questionId, guessId, correctCount, doneCount))
  }

  handleNextQuestion = () => {
    const {
      dispatch,
      questions,
    } = this.props

    const {
      quizId
    } = questions

    dispatch(fetchNewQuestion(quizId))
  }

  handleTab = e => {

  }

  handleLogin = e => {
    e.preventDefault()
  }

  render() {
    const {
      questions,
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
    } = questions

    const {
      quizzes,
    } = quiz

    const haveQuizzes = undefined !== quizzes
    const quizSelected = undefined !== quizId

    if (haveQuizzes && !quizSelected) {
      return (
        <div className='container'>
        <Navbar/>
          <div className='display'>
            <div className='dialog'>
              <h2>Select a Quiz:</h2>
              <SelectQuizForm
                quizzes={quizzes}
                onSubmit={this.handleSelectQuiz}
              />
              <div className='wrapper-inner'>
                <Error error={quiz.error} />
              </div>
              <div className='wrapper-inner'>
              </div>
            </div>
          </div>
        </div>
      )
    }
    const checked = undefined !== correctId
    
    const submitFunction = (checked ? this.handleNextQuestion : this.handleSubmitAnswer)
    const submitText = (checked ? 'Next Question' : 'Submit Answer')

  return (
      <div className='container'>
        <Navbar/>
        <div className='display'>
          <div className='dialog'>
            {quizSelected && 
              <div>
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
            <Error error={error} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  quiz: state.quiz,
})

export default connect(mapStateToProps)(App)