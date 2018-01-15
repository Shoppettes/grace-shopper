import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import getProductByName from '../store'


const Home = (props) => {
  const {chosenProduct, searchForProduct} = props

  return (
    <div id="home-content-wrapper">
      <div className="content-container">
        <div className="title-container">
            <img className="title-logo-img" src="./title-logo.jpg" />
            <div className="subtitle-text">A realy short catchphase that captures the essence of our store.</div>
            <div className="search-bar-container">
              <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="getProduct" />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => searchForProduct(event)} type="submit">Search</button>
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

const mapState = state => {
  return {
    chosenProduct: state.chosenProduct
  }
}

const mapDispatch = dispatch => {
  return {
    searchForProduct(event) {
      let productName = event.target.name.getProduct
      dispatch(getProductByName(productName))
    },

    changeHandler(event) {

    },

    submitHandler(event) {
      event.preventDefault()
      if (chosenProduct) return console.log("console.log")
    }
  }

}

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
