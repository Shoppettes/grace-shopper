import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const Home = (props) => {
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

const mapState = null;

const mapDispatch = null;

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
