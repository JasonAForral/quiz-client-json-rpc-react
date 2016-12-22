import React, { Component, PropTypes } from 'react'
import NavLink from './NavLink'

class SecurityNav extends Component {
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

  expandToggle = e => {
    this.setState((prevState, props) => ({
      expanded: !prevState.expanded,
    }))
  }

  render() {
    const {
      expanded,
    } = this.state
    const {
      username
    } = this.props

    const loggedIn = undefined !== username

    return (
      <div>
        <nav className='navbar'>
          <span>
            <NavLink to='/'>Quiz</NavLink>
          </span>
          {(loggedIn && 
            <span>
              {username}
              <NavLink to='/logout'> Logout </NavLink>
            </span>
          ) ||
            <span>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/create-account'>Create Account</NavLink>
            </span>
          }
        </nav>
      </div>
    )
  }
}

export default SecurityNav