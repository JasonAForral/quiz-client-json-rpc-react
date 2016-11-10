import React, { Component, PropTypes } from 'react'

class SelectQuizForm extends Component {
  static propTypes = {
    quizzes: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      quizId: -1,
    }
  }

  render() {
    const {
      quizzes
    } = this.props
    // add text search
    // const filteredQuizzes = quizzes.filter(quiz.text.includes)
    return (
      <div className='wrapper-inner'>
        <p>Select a Quiz:</p>
        {quizzes.map(quiz => (
          <div>
            <div className='button'>
              {quiz.text}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SelectQuizForm