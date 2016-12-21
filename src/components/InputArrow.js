import React, { Component, PropTypes } from 'react'

class InputArrow extends Component {
  static propTypes = {
  }

  render() {
    return (
      <svg viewBox="0 0 20 20" className="icon">
          <path d="M0 0 L10 10 L0 20"></path>
      </svg>
    )
  }
}

export default InputArrow