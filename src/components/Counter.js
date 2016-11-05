import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    correctCount: PropTypes.number.isRequired,
    questionsDoneCount: PropTypes.number.isRequired,
  }

  render() {
    const { 
      correctCount,
      questionsDoneCount,
    } = this.props
    return (
      <table className='counter'>
        <tr>
          <td>{correctCount}</td>
          <td>/</td>
          <td>{questionsDoneCount}</td>
        </tr>
      </table>
    )
  }
}

export default Counter