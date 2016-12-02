import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Error from '../components/Error'
import SecurityNav from '../components/SecurityNav'
import { fetchLogin } from '../actions/securityActions'

class Login extends Component {

  handleLogin = e => {
    e.preventDefault()
    const {
      dispatch,
    } = this.props
    dispatch(fetchLogin('hattrick', 'hathathat'))
  }

  render() {
    const {quiz} = this.props
    const {error} = quiz
    return (
      <SecurityNav>
        This is the login form.
        <form onSubmit={this.handleLogin} className='login-form'>
          <input className='input' placeholder='Username' />
          <br />
          <input className='input' type='password' placeholder='Password' />
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