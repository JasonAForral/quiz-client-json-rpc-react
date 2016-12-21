import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Error from '../components/Error'
import InputArrow from '../components/InputArrow'
import SecurityNav from '../components/SecurityNav'
import { fetchLogin } from '../actions/securityActions'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsernameInput = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput = e => {
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
    } = this.props
    dispatch(fetchLogin(username, password))
  }

  render() {
    const {
      session,
    } = this.props
    const {
      error,
    } = session
    return (
      <SecurityNav>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin} className='form'>
          <label className='label'>
            <input
              autoComplete='username'
              className='input'
              placeholder='Username'
              onInput={this.handleUsernameInput}
            />
            <InputArrow />
          </label>
          <label className='label'>
            <input
              autoComplete='password'
              className='input'
              type='password'
              placeholder='Password'
              onInput={this.handlePasswordInput}
            />
            <InputArrow />
          </label>
          <button className='button' type='submit'>Do the thing!</button>
        <div className='wrapper-inner'>
            <Error error={error} />
        </div>
        </form>
      </SecurityNav>
    )
  }
}

const mapStateToProps = state => ({
  // quiz: state.quiz,
  session: state.session,
})

export default connect(mapStateToProps)(Login)