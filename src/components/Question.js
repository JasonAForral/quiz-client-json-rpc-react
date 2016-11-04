import React, { Component, PropTypes } from 'react'

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
  }

  render() {
    const { question } = this.props
    if (!question) {
      return null
    }
    return (
      <span>
        <p>
          {question.text}
        </p>
      </span>
    )
  }
}

export default Question