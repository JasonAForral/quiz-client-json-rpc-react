import React, { Component, PropTypes } from 'react'

class Answer extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    const { text } = this.props
    return (
      <span>
        <button>
          {text}
        </button>
      </span>
    )
  }
}

export default Answer