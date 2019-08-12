import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="navbar navbar-expand">
      <a className="navbar-brand display-4" href="#">
        AUDIO HIVE
      </a>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link className="no-hover" to="/home">
            Home
          </Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <ul className="navbar-nav ml-auto">
          {/* The navbar will show these links before you log in */}
          <Link className="li-hover" to="/">
            HOME
          </Link>
          <Link className="li-hover" to="/concerts">
            CONCERTS
          </Link>
          <Link className="li-hover" to="/login">
            LOGIN
          </Link>
          <Link className="li-hover" to="/signup">
            SIGN UP
          </Link>
        </ul>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
