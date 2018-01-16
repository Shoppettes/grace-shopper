import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProductByName, setSearchInput} from '../store'


const Home = (props) => {
  const {chosenProduct, searchForProduct, changeHandler, products} = props


  return (
    <div id="home-content-wrapper">
      <div className="content-container">
        <div className="title-container">
            <img className="title-logo-img" src="./title-logo.jpg" />
            <div className="subtitle-text">A realy short catchphase that captures the essence of our store.</div>
            <div className="search-bar-container">
              <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="getProduct" onChange={() => changeHandler} />
              <button className="btn btn-outline-succesmy-2 my-sm-0" onClick={() => searchForProduct(event, products)} type="submit">Search</button>
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
    chosenProduct: state.chosenProduct,
    products: state.products,
    searchInput: state.input
  }
}

const mapDispatch = dispatch => {
  return {

    changeHandler(event) {
        dispatch(setSearchInput(event.target.value))
    },

    onClick(event) {
      event.preventDefault()
      if (searchInput) return
  }

 }
}

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
