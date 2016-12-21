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
      <nav>
        {loggedIn && 
          <div className='navBig'>
            <NavLink to='/'> {username} </NavLink>
            <NavLink to='/logout'> Logout </NavLink>
          </div>
        }
        {!loggedIn && 
          <div className='navBig'>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/login'> Login </NavLink>
            <NavLink to='/create-account'> Create Account </NavLink>
          </div>
        }
      </nav>
    )
  }
}

export default SecurityNav