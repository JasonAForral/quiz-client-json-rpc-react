import React, { Component, PropTypes } from 'react'

class Answer extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
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
      disabled,
      name,
      text,
    } = this.props
    return (
      <span className='button-wrapper'>
        <button 
          className='button'
          disabled={disabled}
          onClick={this.handleClick}
        >
          {text}
        </button>
      </span>
    )
  }
}

export default Answer