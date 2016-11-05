import React, { Component, PropTypes } from 'react'

class NextQuestion extends Component {
  static propTypes = {
    onClick: PropTypes.object.isRequired,
  }

  handleClick = e => {
    const {
      onClick
    } = this.props
    onClick(name)
  }


  render() {
    const { onClick } = this.props
    return (
      <button
        className='button'
        onClick={this.handleClick}
      >
        Next Question
      </button>
    )
  }
}

export default NextQuestion