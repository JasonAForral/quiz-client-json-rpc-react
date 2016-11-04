import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Error from '../components/Error'
import { fetchNewQuestion } from '../actions/questionActions'
import { fetchAnswerQuestion } from '../actions/answerActions'

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

  render() {
    const {
      quiz,
    } = this.props
    return (
      <div className='wrapper'>
        <div className='wrapper-inner'>
          <Question question={quiz.question} />
          {quiz.answers.map(answer =>
            <Answer
              key={answer.id}
              name={answer.id}
              onClick={this.handleSubmitAnswer}
              text={answer.text}
            />)}
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