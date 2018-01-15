import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

const Home = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (

    <div id="home-content-wrapper">
      <div className="content-container">
        <div className="title-container">
            <img className="title-logo-img" src="./title-logo.jpg" />
            <div className="subtitle-text">A realy short catchphase that captures the essence of our store.</div>
            <div className="search-bar-container">
              <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
        </div>
        <div className="bottom-img-container">
          <img className="home-bg-img" src="./city-of-dino.jpg" />
        </div>
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
