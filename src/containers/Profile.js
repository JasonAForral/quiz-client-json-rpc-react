import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

import Error from '../components/Error'

import { fetchGetSessionInfo } from '../actions/sessionActions'

class Profile extends Component {
  componentDidMount() {
    const { 
      dispatch,
    } = this.props
    dispatch(fetchGetSessionInfo())
  }

  render() {
    const {
      session,
    } = this.props
    const {
      email,
      error,
      fetchingSessionInfo,
      isActive,
      username,
    } = session
    return (
      <div className='container'>
        <Navbar/>
        <div className='display'>
          <div className='dialog'>
          <h2>{username}</h2>
          Current Email address: {email}
          <br/>
          Active: {isActive ? 'yes' : 'no'}
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

export default connect(mapStateToProps)(Profile)
