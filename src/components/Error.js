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
      <div>
        <p className='error-box'>
          {error.message}
        </p>
      </div>
    )
  }
}

export default Error
