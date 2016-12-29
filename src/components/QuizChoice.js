import React, { Component, PropTypes } from 'react'

class QuizChoice extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }

  handleClick = e => {
    const {
      onChange,
      value,
    } = this.props
    onChange(value)
  }


  render() {
    const {
      text,
      value,
    } = this.props

    return (
      <li className='answer-wrapper'>
        <label className={'answer-label'}>
          <input 
            className='radio-button'
            name='quizzes'
            onChange={this.handleClick}
            type='radio'
            value={value}
          />
          {text}
        </label>
      </li>
    )
  }
}

export default QuizChoice
