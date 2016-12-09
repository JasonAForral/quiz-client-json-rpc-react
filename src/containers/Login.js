import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Error from '../components/Error'
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
      quiz,
    } = this.props
    const {
      error,
    } = quiz
    return (
      <SecurityNav>
        This is the login form.
        <form onSubmit={this.handleLogin} className='login-form'>
          <input
            autoComplete='username'
            className='input'
            placeholder='Username'
            onInput={this.handleUsernameInput}
          />
          <br />
          <input
            autoComplete='password'
            className='input'
            type='password'
            placeholder='Password'
            onInput={this.handlePasswordInput}
          />
          <br />
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
  quiz: state.quiz,
})

export default connect(mapStateToProps)(Login)