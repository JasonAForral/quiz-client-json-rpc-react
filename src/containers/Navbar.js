import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, IndexLink, } from 'react-router'

import NavLink from '../components/NavLink'

import { fetchLogout } from '../actions/securityActions'


class Navbar extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    const expanded = false
    this.state = {
      expanded,
    }
  }

  handleLogout = e => {
    const {
      dispatch,
    } = this.props

    dispatch(fetchLogout(browserHistory))
  }

  render() {
    const {
      session
    } = this.props
    const {
      username
    } = session

    const loggedIn = undefined !== username

    return (
      <navbar>
        <nav className='navbar'>
          <span>
            <NavLink
              onlyActiveOnIndex={true}
              to='/'>Quiz</NavLink>
          </span>
          {(loggedIn && 
            <span>
              {username}
              <NavLink onClick={this.handleLogout}> Logout </NavLink>
            </span>
          ) ||
            <span>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/create-account'>Create Account</NavLink>
            </span>
          }
        </nav>
      </navbar>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(Navbar)
