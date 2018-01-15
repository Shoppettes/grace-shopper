import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const Home = (props) => {
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

const mapState = null;

const mapDispatch = null;

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
