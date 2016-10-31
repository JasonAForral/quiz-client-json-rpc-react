import React, { Component, PropTypes } from 'react'

class Error extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    const { text } = this.props
    return (
      <span>
        <p>
          {text}
        </p>
      </span>
    )
  }
}

export default Error