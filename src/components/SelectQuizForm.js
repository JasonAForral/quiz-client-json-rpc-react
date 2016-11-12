import React, { Component, PropTypes } from 'react'
import QuizChoice from './QuizChoice'

class SelectQuizForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    quizzes: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      quizId: -1,
      searchFilter: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      quizId,
    } = this.state
    if (-1 === quizId){
      return false
    }
    const {
      onSubmit,
    } = this.props
    onSubmit(quizId)
  }

  handleChange = quizId => {
    this.setState({
      quizId,
      searchFilter: this.state.searchFilter,
    })
  }

  handleSearchChange = e => {
    this.setState({
      quizId: this.state.quizId,
      searchFilter: e.target.value.toLowerCase(),
    })
  }

  clearSelection () {
    this.setState({
      quizId: -1,
      searchFilter: this.state.searchFilter,
    })
  }

  render() {
    const {
      quizzes
    } = this.props
    const {
      quizId,
      searchFilter,
    } = this.state

    // text search
    const filteredQuizzes = quizzes.filter(quiz => {
      const out = quiz.text.toLowerCase().includes(searchFilter)
      if (!out && quizId === quiz.id) {
        this.setState({
          quizId: -1,
          searchFilter,
        })
      }
      return out 
    })

    return (
      <div className='wrapper-inner'>
        <p>Select a Quiz:</p>
        <p><input
          className='search-box'
          onChange={this.handleSearchChange}
          value={searchFilter}
        /></p>
        <form id='select-quiz-from' onSubmit={this.handleSubmit}>
          <div>
            <ul className='answer-list'>
            {filteredQuizzes.map(quiz => (
              <QuizChoice
                key={quiz.id}
                text={quiz.text}
                value={quiz.id}
                onChange={this.handleChange}
              />
            ))}
            </ul>
          </div>
          <div>
            <button
              className='button'
              type='submit'
            >Start
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SelectQuizForm
