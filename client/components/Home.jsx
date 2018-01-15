import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const Home = (props) => {
  return (
    <div>
      <div id="dino-landing-image"></div>
    </div>
  )
}

const mapState = null;

const mapDispatch = null;

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
