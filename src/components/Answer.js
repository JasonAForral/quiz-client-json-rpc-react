import React, { Component, PropTypes } from 'react'

class Answer extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
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
      correctId,
      disabled,
      guessId,
      onChange,
      text,
      value,
    } = this.props

    const incorrect = ((undefined !== correctId && value === guessId) ? ' incorrect-answer' : '')
    
    const correct = (value === correctId ? ' correct-answer' : '')
    
    return (
      <li className={'answer-wrapper' + incorrect + correct}>
      <label>
        <input 
          className='radio-button'
          id={value}
          disabled={disabled}
          name='answer'
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

export default Answer