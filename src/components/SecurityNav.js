import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class SecurityNav extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='wrapper-inner'>
          {this.props.children}
          <Link to='/login' activeClassName='active-tab' className='login-tab'>Log in</Link>
          <Link to='/create-account' activeClassName='active-tab' className='login-tab'>Create Account</Link>
        </div>
      </div>
    )
  }
}

export default SecurityNav