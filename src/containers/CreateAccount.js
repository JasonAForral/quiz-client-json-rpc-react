import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SecurityNav from '../components/SecurityNav'

class CreateAccount extends Component {

  handleChangeTab = e => {

  }

  handleLogin = e => {
    e.preventDefault()
  }

  render() {
    return (
      <SecurityNav>
        This is the create account form.
        <form onSubmit={this.handleLogin} className='login-form'>
          <input className='input' placeholder='Username' />
          <br />
          <input className='input' type='password' placeholder='Password' />
          <br />
          <input className='input' type='password' placeholder='Password again' />
          <br />
          <input className='input' type='email' placeholder='Email Address' />
          <br />
          <button className='button' type='submit'>Create Account</button>
        </form>
      </SecurityNav>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(CreateAccount)