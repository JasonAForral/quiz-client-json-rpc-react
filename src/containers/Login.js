import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Error from '../components/Error'
import Input from '../components/Input'
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
      username
    } = session
    return (
      <div className='container'>
        <SecurityNav username={username} />
        <div className='display'>
          <div className='dialog'>
            <h2>Login</h2>
            <form onSubmit={this.handleLogin} className='form'>
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
              <button className='button' type='submit'>Login</button>
            </form>
            <div className='wrapper-inner'>
              <Error error={error} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // quiz: state.quiz,
  session: state.session,
})

export default connect(mapStateToProps)(Login)