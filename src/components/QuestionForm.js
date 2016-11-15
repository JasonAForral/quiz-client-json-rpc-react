import React, { Component, PropTypes } from 'react'
import Answer from './Answer'
import Question from './Question'

class QuestionForm extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    correctId: PropTypes.number.isRequired,
    guessId: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    submitText: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      guessId: -1,
    }
  }

  handleChange = guessId => {
    this.setState({guessId})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      correctId,
      onSubmit,
      question,
    } = this.props
    const {
      guessId
    } = this.state
    if (-1 === guessId && undefined === correctId) {
      return false
    }
    this.submitInput.focus()
    onSubmit(question.id, guessId)
    this.setState({guessId: -1})
    return false
  }

  render() {
    const {
      answers,
      correctId,
      guessId,
      question,
      submitText,
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
              correctId={correctId}
              disabled={disabled}
              guessId={guessId}
              onChange={this.handleChange}
              text={answer.text}
              value={answer.id}
            />)}
          </ul>
        </div>
        <div>
          <button
            className='button'
            ref={input => this.submitInput = input}
            type='submit'
          >
            {submitText}
          </button>
        </div>
      </form>
    )
  }
}

export default QuestionForm
