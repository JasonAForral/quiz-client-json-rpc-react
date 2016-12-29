import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    correctCount: PropTypes.number.isRequired,
    doneCount: PropTypes.number.isRequired,
  }

  render() {
    const { 
      correctCount,
      doneCount,
    } = this.props
    return (
      <table className='counter'>
        <tr>
          <td>{correctCount}</td>
          <td>/</td>
          <td>{doneCount}</td>
        </tr>
      </table>
    )
  }
}

export default Counter
