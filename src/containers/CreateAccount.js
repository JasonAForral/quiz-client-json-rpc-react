import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

import Error from '../components/Error'
import Input from '../components/Input'
import { fetchCreateAccount } from '../actions/securityActions'

class CreateAccount extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      password2: '',
      email: '',
      isMismatch: false,
    }
  }

  handleUsernameInput = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput = e => {
    this.setState({
      password: e.target.value,
      isMismatch: false,
    })
  }

  handlePassword2Input = e => {
    this.setState({
      password2: e.target.value,
      isMismatch: false,
    })
  }

  handleEmailInput = e => {
    this.setState({
      email: e.target.value
    })
  }

  handleCreateAccount = e => {
    e.preventDefault()
    const {
      username,
      password,
      password2,
      email,
    } = this.state
    const {
      dispatch,
    } = this.props

    const isMismatch = password !== password2 

    if (isMismatch || '' === username || '' === password || '' === email) {
      this.setState({
        isMismatch,
      })
      return
    }

    console.log('send')
    dispatch(fetchCreateAccount(username, password, password2, email))
  }

  getRetypeClass(isMismatch) {
    return isMismatch ? 'input mismatch' : 'input'
  }

  render() {
    const {
      session,
    } = this.props
    const {
      error,
    } = session
    const {
      isMismatch,
    } = this.state
    return (
      <div className='container'>
        <Navbar/>
        <div className='display'>
          <div className='dialog'>
            <h2>Create Account</h2>
            <form onSubmit={this.handleCreateAccount} className='form'>
              <Input 
                label='Username'
                onInput={this.handleUsernameInput}
                type='text'
              />
              <Input 
                label='Password'
                onInput={this.handlePasswordInput}
                type='password'
              />
              <Input 
                label='Retype Password'
                onInput={this.handlePassword2Input}
                type='password'
              />
              {isMismatch && <div
                className='input-error'
              >Passwords do not match!
              </div>}
              <Input 
                label='Email Address'
                onInput={this.handleEmailInput}
                type='email'
              />
              <button className='button' type='submit'>Create Account</button>
              <Error error={error} />
            </form>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(CreateAccount)
