import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Error from '../components/Error'
import { fetchNewQuestion } from '../actions/questionActions'
import { fetchAnswerQuestion } from '../actions/answerActions'

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
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
      question
    } = this.props
    dispatch(fetchAnswerQuestion(question.question.id, answerId))
  }

  render() {
    const {actions, question} = this.props
    return (
      <div className='wrapper'>
        <div className='wrapper-inner'>
          {'' !== question.question.text ? 
          <Question text={question.question.text} /> : ''}
          {question.answers.map(answer =>
            <Answer
              key={answer.id}
              name={answer.id}
              handleSubmitAnswer={this.handleSubmitAnswer}
              text={answer.text}
            />
          )}
          {'' !== question.error.message ?
             <Error text={question.error.message} /> : ''}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question,
})

export default connect(mapStateToProps)(App)