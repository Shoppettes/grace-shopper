import React from 'react';
import {connect} from 'react-redux'
import {getChosenProductFromDb} from '../store'
/**
 * import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../history';
import {Navbar, Sidebar, Footer, Home, Products, SingleProduct, Checkout} from '../components';
import {fetchCurrentUser, getProductsFromDb} from '../store';
 */
// let products = [
//   {
//     name: 'Dino bow tie',
//     description: 'Impress all the lady dinos with this fashionable bow tie.',
//     price: 12.99,
//     quantity: 82,
//     isAvailable: true,
//     imgUrl: '<img src="../../public/dino-pics/dino-bow-tie.jpeg" />'
  
//   }
// ]
  // , {
  //   name: 'Brontasaurus bike',
  //   description: 'This classic dino bike will always be in style! Comes with an adjustable seat for all leg lengths.',
  //   price: 199.99,
  //   quantity: 68,
  //   isAvailable: true,
  //   imgUrl: '<a href="http://tinypic.com?ref=2nrm1rq" target="_blank"><img src="http://i63.tinypic.com/2nrm1rq.jpg" border="0" alt="dinosaur riding bike"></a>'
  // } , {
  //   name: 'Triceri-top hat',
  //   description: 'Perfect for the gentleman dino, carnivore or herbivore.',
  //   price: 33.99,
  //   quantity: 54,
  //   isAvailable: true, 
  //   imgUrl: '<a href="http://tinypic.com?ref=21ah4rl" target="_blank"><img src="http://i65.tinypic.com/21ah4rl.jpg" border="0" alt="dino stealing top hat"></a>'
  // } , {
  //   name: 'Tea-rex',
  //   description: 'Entertain your friends or just relax at home with this calming tea blend.',
  //   price: 5.99,
  //   quantity: 52,
  //   isAvailable: true, 
  //   imgUrl: '<a href="http://tinypic.com?ref=2s9twty" target="_blank"><img src="http://i66.tinypic.com/2s9twty.jpg" border="0" alt="dinosaurs drinking tea"></a>'
  // }, {
  //   name: 'CAKE',
  //   description: 'Perfect for any and all special occasion! Yum!',
  //   price: 19.99,
  //   quantity: 90,
  //   isAvailable: true, 
  //   imgUrl: '<a href="http://tinypic.com?ref=107wgol" target="_blank"><img src="http://i65.tinypic.com/107wgol.jpg" border="0" alt="baby dinosaur eating birthday cake"></a>"></a>'
  // }
// ];


const Products = (props) => {
  const {products} = props;
  console.log('products ', products)
  return (
    <div>
      <h3>This is the Products component.</h3>
      <div className="row">
      {products.data && products.data.map(product => (
        <div className="col-xs-4" key={product.id}>
        <a className="thumbnail" href="#"> 
          <img src= {product.imgUrl}/>
          <div className="caption">
            <h5>
              <span>{product.name}</span>
            </h5>
          </div>
        </a>
      </div>
      ))}
      </div>
    </div>
  )
};

const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatch = (dispatch) => {
  return {
    getChosenProduct() {
      dispatch(getChosenProductFromDb())
    },

    addToCart() {
      dispatch()
    }
  }
}
/**const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.auth.currentUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchCurrentUser())
      dispatch(getProductsFromDb())
    }
  }
}

// export default connect(null, mapDispatch)(Root) */

export default connect(mapState, mapDispatch)(Products);

/*     

*/