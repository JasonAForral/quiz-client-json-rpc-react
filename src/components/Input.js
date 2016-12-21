import React, { Component, PropTypes } from 'react'

class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  render() {
    const {
      label,
      onInput,
      placeholder,
      type,
    } = this.props
    return (
      <div>
      <label className='label'>
        <input
          className='input'
          onInput={onInput}
          placeholder={placeholder}
          type={type}
        />
        <svg viewBox="0 0 20 20" className="icon">
          <path d="M0 0 L10 10 L0 20"></path>
        </svg>
        
      </label>
      <div>{label}</div>
      </div>
    )
  }
}

export default Input
