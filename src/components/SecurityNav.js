import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class SecurityNav extends Component {
  render() {
    const ACTIVE = { background: 'white', color: '#369' }
    return (
      <div className='wrapper'>
        <div className='wrapper-inner'>
          {this.props.children}
          <Link to='/login' activeStyle={ACTIVE} className='login-tab'>Log in</Link>
          <Link to='/create-account' activeStyle={ACTIVE}className='login-tab'>Create Account</Link>
        </div>
      </div>
    )
  }
}

export default SecurityNav