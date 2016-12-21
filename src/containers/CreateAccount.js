import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Error from '../components/Error'
import Input from '../components/Input'
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
      session,
    } = this.props
    const {
      error,
      username,
    } = session
    const {
      isMismatch,
    } = this.state
    return (
      <div className='container'>
        <SecurityNav username={username} />
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
              <div className='wrapper-inner'>
                  <Error error={error} />
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

              // <label className='label'>
              //   <input
              //     autoComplete='username'
              //     className='input'
              //     maxLength='256'
              //     placeholder='Username'
              //     onInput={this.handleUsernameInput}
              //     title="username"
              //   />
              //   <InputArrow />
              // </label>
              // <label className='label'>
              //   <input
              //     title="8+ character password"
              //     autoComplete='new-password'
              //     className='input'
              //     minLength='8'
              //     type='password'
              //     placeholder='Password'
              //     onInput={this.handlePasswordInput} />
              //   <InputArrow />
              // </label>
              // <label className='label'>
              //   <input
              //     className={this.getRetypeClass(isMismatch)} type='password' placeholder='Retype Password'
              //     onInput={this.handlePassword2Input}
              //   />
              //   <InputArrow />
              // </label>
              // <label className='label'>
              //   <input
              //     autoComplete='email'
              //     className='input'
              //     type='email'
              //     placeholder='Email Address'
              //     onInput={this.handleEmailInput}
              //   />
              //   <InputArrow />
              // </label>


const mapStateToProps = state => ({
  // quiz: state.quiz,
  session: state.session,
})

export default connect(mapStateToProps)(CreateAccount)