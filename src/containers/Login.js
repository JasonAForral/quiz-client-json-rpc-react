import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SecurityNav from '../components/SecurityNav'

class Login extends Component {

  handleChangeTab = e => {

  }

  handleLogin = e => {
    e.preventDefault()
  }

  render() {
    return (
      <SecurityNav>
        This is the login form.
        <form onSubmit={this.handleLogin} className='login-form'>
          <input className='input' placeholder='Username' />
          <br />
          <input className='input' type='password' placeholder='Password' />
          <br />
          <button className='button' type='submit'>Do the thing!</button>
        </form>
      </SecurityNav>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Login)