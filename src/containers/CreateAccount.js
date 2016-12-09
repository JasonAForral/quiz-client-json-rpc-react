import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Error from '../components/Error'
import SecurityNav from '../components/SecurityNav'
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
      quiz,
    } = this.props
    const {
      error,
    } = quiz
    const {
      isMismatch,
    } = this.state
    return (
      <SecurityNav>
        This is the create account form.
        <form onSubmit={this.handleCreateAccount} className='login-form'>
          <input
            autoComplete='username'
            className='input'
            maxLength='256'
            placeholder='Username'
            onInput={this.handleUsernameInput}
            title="username"
          />
          <br />
          <input
            title="8+ character password"
            autoComplete='new-password'
            className='input'
            minLength='8'
            type='password'
            placeholder='Password'
            onInput={this.handlePasswordInput} />
          <br />
          <input
            className={this.getRetypeClass(isMismatch)} type='password' placeholder='Retype Password'
            onInput={this.handlePassword2Input}
          /><br/>
          {isMismatch && <span
            className='input-error'
          >Passwords do not match!
          </span>}
          <br />
          <input
            autoComplete='email'
            className='input'
            type='email'
            placeholder='Email Address'
            onInput={this.handleEmailInput}
          />
          <br />
          <button className='button' type='submit'>Create Account</button>
        <div className='wrapper-inner'>
            <Error error={error} />
        </div>
        </form>
      </SecurityNav>
    )
  }
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(mapStateToProps)(CreateAccount)