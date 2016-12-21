import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  }

  render() {
    const {
      children,
      to,
    } = this.props

    return (
      <Link to={to} activeClassName='active-nav-link' className='nav-link'>{children}</Link>
    )
  }
}

export default NavLink
