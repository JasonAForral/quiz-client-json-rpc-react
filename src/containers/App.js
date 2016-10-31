import React, { Component, PropTypes } from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Question from '../components/Question'
import Answer from '../components/Answer'
//import * as QuestionActions from '../actions/questionActions'
import { fetchNewQuestion } from '../actions/questionActions'

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const { dispatch, } = this.props
    // dispatch(QuestionActions.fetchNewQuestion())
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question,
})

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(QuestionActions, dispatch)
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default connect(mapStateToProps)(App)