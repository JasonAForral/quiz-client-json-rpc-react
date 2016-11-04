import React, { Component, PropTypes } from 'react'

class Error extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  }

  render() {
    const { error } = this.props
    if (!error) {
      return null
    }
    return (
      <span>
        <p className='errorBox'>
          {error.message}
        </p>
      </span>
    )
  }
}

export default Error