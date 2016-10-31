import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Error from '../components/Error'
import { fetchNewQuestion } from '../actions/questionActions'

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const { dispatch, } = this.props
    dispatch(fetchNewQuestion())
  }

  render() {
    const {actions, question} = this.props
    return (
      <div>
        <Question text={question.question.text} />
        {question.answers.map(answer =>
          <Answer key={answer.id} text={answer.text} />
        )}
        <Error text={question.error.message} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question,
})

export default connect(mapStateToProps)(App)