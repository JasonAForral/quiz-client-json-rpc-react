import React, { Component, PropTypes } from 'react'

class Input extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    minLength: PropTypes.bool.isRequired,
    onInput: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  render() {
    const {
      disabled,
      label,
      minLength,
      onInput,
      placeholder,
      type,
    } = this.props
    return (
      <div>
      <label className='label'>
        <input
          className='input'
          minLength={minLength}
          onInput={onInput}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
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
