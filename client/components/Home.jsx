import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Redirect, transitionTo} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSearch} from '../store'
import notification from 'toastr'


const Home = (props) => {
  notification.options.positionClass = "toast-top-right"
  const { searchForProduct, products, search} = props
  console.log(search);
  return (
    <div>
      {search.redirect &&
        <Redirect to="/products" />
      }
     <div id="home-content-wrapper">
      <div className="content-container">
        <div className="title-container">
            <img className="title-logo-img" src="./title-logo.jpg" />
            <div className="subtitle-text">A realy short catchphase that captures the essence of our store.</div>
            <div className="search-bar-container">
              <form onSubmit={(event) => searchForProduct(event, products)} className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="getProduct"  />
              <button className="btn btn-outline-succesmy-2 my-sm-0"  type="submit">Search</button>
              </form>
            </div>
        </div>
        <div className="bottom-img-container">
          <img className="home-bg-img" src="./city-of-dino.jpg" />
        </div>
      </div>
    </div>
    </div>
  )
}

const mapState = state => {
  return {
    chosenProduct: state.chosenProduct,
    products: state.products,
    search: state.search
  }
}

const mapDispatch = dispatch => {
  return {

    searchForProduct(event, products) {
      event.preventDefault();
      const filteredProducts = products.filter(product => product.name.match(event.target.getProduct.value));
      if (filteredProducts.length > 0) {
        return dispatch(setSearch(true, event.target.getProduct.value))}
      else notification.error('Product does not exist')
  }

 }
}

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
