import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

import Error from '../components/Error'
import Input from '../components/Input'

import { fetchLogin } from '../actions/securityActions'
import { clearError } from '../actions/sessionActions'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsernameInput = e => {
    this.props.dispatch(clearError())
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput = e => {
    this.props.dispatch(clearError())
    this.setState({
      password: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    const {
      password,
      username,
    } = this.state
    const {
      dispatch,
      router,
    } = this.props
    dispatch(clearError())
    dispatch(fetchLogin(username, password, router))
  }

  render() {
    const {
      session,
    } = this.props
    const {
      error,
      fetchingLogin,
    } = session
    return (
      <div className='container'>
        <Navbar/>
        <div className='display'>
          <div className='dialog'>
            <h2>Login</h2>
            <form onSubmit={this.handleLogin} className='form'>
              <Input 
                label='Username'
                onInput={this.handleUsernameInput}
                type='text'
                disabled={fetchingLogin}
              />
              <Input 
                label='Password'
                onInput={this.handlePasswordInput}
                type='password'
                disabled={fetchingLogin}
              />
              <button className='button' type='submit'>Login</button>
            </form>
            <Error error={error} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(Login)
