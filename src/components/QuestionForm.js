import React, { Component, PropTypes } from 'react'
import Answer from './Answer'
import Question from './Question'

class QuestionForm extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    guessId: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
  }

  handleChange = (guessId) => {
    this.setState({guessId})
  }

  handleSubmit = (e) => {
    const {
      onSubmit,
      question,
    } = this.props
    const {
      guessId
    } = this.state
    e.preventDefault()
    onSubmit(question.id, guessId)
    return false
  }

  render() {
    const {
      answers,
      guessId,
      question,
    } = this.props
    if (!question) {
      return null
    }
    const disabled = undefined !== guessId
    return (
      <form id='question-from' onSubmit={this.handleSubmit}>
        <Question text={question.text} />
        <div>
          <ul className='answer-list'>
          {answers.map(answer =>
            <Answer
              key={answer.id}
              disabled={disabled}
              onChange={this.handleChange}
              text={answer.text}
              value={answer.id}
            />)}
          </ul>
        </div>
        <input
          className='button'
          disabled={disabled}
          type='submit'
          value='Submit'
        />
      </form>
    )
  }
}

export default QuestionForm
