import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

const Home = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
      <div id="site-greeting">Welcome to the Modern Dino</div>
      {children}
      <div id="dino-landing-image">
        <img src="/city-of-dino.jpg"></img>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null, mapDispatch)(Home))

/**
 * PROP TYPES
 */
Home.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
}
