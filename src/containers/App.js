import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import Error from '../components/Error'
import QuestionForm from '../components/QuestionForm'
import Solution from '../components/Solution'
import { fetchAnswerQuestion } from '../actions/answerActions'
import { fetchNewQuestion } from '../actions/questionActions'

class App extends Component {
  static propTypes = {
    quiz: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const { 
      dispatch,
    } = this.props
    dispatch(fetchNewQuestion())
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
    console.log(doneCount)
    dispatch(fetchAnswerQuestion(questionId, guessId, correctCount, doneCount))
  }

  handleNextQuestion = () => {
    const {
      dispatch,
      quiz,
    } = this.props
    dispatch(fetchNewQuestion())
  }

  render() {
    const {
      quiz,
    } = this.props
    return (
      <div className='wrapper'>
        <div className='wrapper-inner'>
          <Counter
            correctCount={quiz.correctCount}
            doneCount={quiz.doneCount}
          />
          <QuestionForm
            answers={quiz.answers}
            guessId={quiz.guessId}
            onSubmit={this.handleSubmitAnswer}
            question={quiz.question}
          />
          <Solution
            answers={quiz.answers}
            correctId={quiz.correctId}
            guessChecked={quiz.guessChecked}
            guessIsCorrect={quiz.guessIsCorrect}
            onClick={this.handleNextQuestion}
          />
          <Error error={quiz.error} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(mapStateToProps)(App)