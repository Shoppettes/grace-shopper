import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {updateCartProduct, createOrderProductInstance} from '../store'
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
  console.log('Flag: ', props)
  const {products, order, cart, clickHandler, isLoggedIn, category} = props;

  // conditionally rendering the clickHandler and assigning first arg based on whether user logged in
  // addToDb (thunk) and addToCart (action) not actually created yet
  //const clickHandler = isLoggedIn ? addToDb : addToCart;
  //const orderId = isLoggedIn ? order.id : null;
  let renderedProducts = category.id ? products.filter(product => product.category.id === category.id) : products;
  console.log('Flag2: ', products)
  return (
    <div>
      <h3>This is the Products component.</h3>
      {cart && cart.map(product => (
        <div key={product.id}>
          Name: {product.name}
          Price: {product.price}
          Amount: {product.orderProducts.quantity}
          ------
        </div>
        )
      )}

    </div>
  )
};

const mapState = (state) => {
  return {
    products: state.products,
    // we haven't tested isLoggedIn yet
    isLoggedIn: !!state.user.id,
    category: state.chosenCategory,
    cart: state.cart,
    order: state.currentOrder
  }
}

const mapDispatch = (dispatch) => {
  return {
    clickHandler (orderId, productId, cart) {
      if (!cart.find( product => product.id === productId)) dispatch(createOrderProductInstance({orderId, productId}))
      else dispatch(updateCartProduct(orderId, productId, 'increment'))
    },
    // neither of these functions is defined yet, we are using them as placeholders
    addToDb() {
      dispatch(addOrderProductToDb({orderId: 7, productId: 8}))
      // this is what we think addOrderProductToDb should do
      // check for existing order associated with the current users
      // if yes, create new instance on OrderProduct model with current product and associated users
      // if not, create a new order, then create a new instance on OrderProduct model with current product and associated users
    },
    addToCart() {
      dispatch(addOrderProductToCart())
    }
  }
}


export default connect(mapState, mapDispatch)(Products);

/*

*/
