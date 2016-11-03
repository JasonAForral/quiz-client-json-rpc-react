import React, { Component, PropTypes } from 'react'

class Answer extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  handleClick = e => {
    const {
      name,
      onClick
    } = this.props
    onClick(name)
  }

  render() {
    const { 
      text,
      name,
    } = this.props
    return (
      <span className='button-wrapper'>
        <button 
          className='button'
          onClick={this.handleClick}
        >
          {text}
        </button>
      </span>
    )
  }
}

export default Answer