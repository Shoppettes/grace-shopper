import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

const Home = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (

    <div id="page-content-wrapper">
    <div className="container-fluid">
        <h1>Simple Sidebar</h1>
        <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
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
