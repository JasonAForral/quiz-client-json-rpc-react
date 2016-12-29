import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

//import { fetchUserInfo } from '../actions/sessionActions'

class Profile extends Component {
  componentDidMount() {
    const { 
      dispatch,
    } = this.props
    // dispatch(fetchUserInfo())
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
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session,
  userInfo: state.userInfo,
})

export default connect(mapStateToProps)(Profile)
