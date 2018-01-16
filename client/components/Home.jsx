import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Redirect, transitionTo} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProductByName, setSearch, setSearchInput} from '../store'


const Home = (props) => {
  console.log('aaaa');
  const {chosenProduct, searchForProduct, changeHandler, products, search} = props
  console.log(search);
  // if(!search) {
  return (
    <div>
      {search.redirect && <Redirect to='/products'/>}
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
// else {
//   return (<Redirect to='/products'/>)
// }
// }

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
      console.log('i am here ')
      event.preventDefault();
      const filteredProducts = products.filter(product => product.name.match(event.target.getProduct.value));
      if (filteredProducts) {
        console.log(filteredProducts)
        return dispatch(setSearch(true, event.target.getProduct.value))}
  }

 }
}

// withRouter wrapper makes sure that updates are not blocked
export default withRouter(connect(mapState, mapDispatch)(Home))
