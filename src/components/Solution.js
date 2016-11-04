import React, { Component, PropTypes } from 'react'

class Solution extends Component {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    correctId: PropTypes.number.isRequired,
    guessChecked: PropTypes.bool.isRequired,
    guessIsCorrect: PropTypes.bool.isRequired,
  }

  findAnswerText(id){
    
  }

  showMessage(isCorrect){
    if (isCorrect) {
      return (
        <p>
          Correct!
        </p>
      )
    } else {
      return (
        <p>
          Incorrect
        </p>
      )
    }
  }

  render() {
    const {
      answers,
      correctId,
      guessIsCorrect,
    } = this.props
    if (undefined === correctId) {
      return null
    }
    
    return (
      <span>
        {this.showMessage(guessIsCorrect)}
      </span>
    )
  }
}

export default Solution