import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Answer from '../components/Answer'
import Counter from '../components/Counter'
import Error from '../components/Error'
import NextQuestion from '../components/NextQuestion'
import Question from '../components/Question'
import Solution from '../components/Solution'
import { fetchAnswerQuestion } from '../actions/answerActions'
import { fetchNewQuestion } from '../actions/questionActions'
import { nextQuestion } from '../actions/quizActions'

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

  handleSubmitAnswer = answerId => {
    const {
      dispatch,
      quiz,
    } = this.props
    dispatch(fetchAnswerQuestion(quiz.question.id, answerId))
  }

  handleNextQuestion = () => {
    const {
      dispatch,
    } = this.props
    dispatch(nextQuestion())
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
            questionsDoneCount={quiz.questionsDoneCount}
          />
          <Question question={quiz.question} />
          {quiz.answers.map(answer =>
            <Answer
              key={answer.id}
              name={answer.id}
              onClick={this.handleSubmitAnswer}
              text={answer.text}
            />)}
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