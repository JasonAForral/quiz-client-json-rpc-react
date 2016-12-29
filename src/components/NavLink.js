import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavLink extends Component {
  static propTypes = {
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onlyActiveOnIndex: PropTypes.bool,
      }

  render() {
    const {
      children,
      onClick,
      onlyActiveOnIndex,
      to,
    } = this.props

    return (
      <Link
        activeClassName='active-nav-link'
        className='nav-link'
        onClick={onClick}
        onlyActiveOnIndex={onlyActiveOnIndex}
        to={to}
      >
        {children}
      </Link>
    )
  }
}

export default NavLink
