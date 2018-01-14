import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {updateCartProduct, createOrderProductInstance, getCartByOrder} from '../store';

const Products = (props) => {
  const {cart, currentOrder, category, products, clickHandler} = props;
  console.log('products', products)
  // conditionally rendering the clickHandler and assigning first arg based on whether user logged in
  // addToDb (thunk) and addToCart (action) not actually created yet
  //const clickHandler = isLoggedIn ? addToDb : addToCart;
  //const orderId = isLoggedIn ? order.id : null;
  //let renderedProducts = category.id ? products.filter(product => product.category.id === category.id) : products;
  //clickHandler(1, 3, cart)
  return (
    <div>
      <h3>This is the Products component.</h3>

      <div className="row">
      {products && products.map(product => (
        <div className="col-xs-4" key={product.id}>
        <a className="thumbnail" href="#"></a>
          <div className="caption">
            <h5>
              <div> 
                <span>{product.name}</span>
              </div>
              <span>{product.price}</span>
            </h5>
            <div>
              <Link to={`/products/${product.id}`}>See more</Link>
            </div>
            <button onClick={clickHandler.bind(this, currentOrder.id, product.id, cart)}>Add item to cart.</button> 
          </div>
      </div>
      ))}
      </div>

    </div>
  )
};

const mapState = (state) => {
  return {
    currentOrder: state.currentOrder,
    cart: state.cart,
    products: state.products,
    category: state.category
  }
}

const mapDispatch = (dispatch) => {
  return {
    clickHandler (orderId, productId, cart) {
      if (!cart.find( product => product.id == productId)) dispatch(createOrderProductInstance({orderId, productId}))
      else dispatch(updateCartProduct(orderId, productId, 'increment'))
    },
    getCart (orderId) {
      dispatch(getCartByOrder(orderId))
    }
    // neither of these functions is defined yet, we are using them as placeholders
    // addToDb() {
    //   dispatch(addOrderProductToDb({orderId: 7, productId: 8}))
      // this is what we think addOrderProductToDb should do
      // check for existing order associated with the current users
      // if yes, create new instance on OrderProduct model with current product and associated users
      // if not, create a new order, then create a new instance on OrderProduct model with current product and associated users
    //},
    // addToCart() {
    //   dispatch(addOrderProductToCart())
    // }
  }
}


export default connect(mapState, mapDispatch)(Products);

/*

*/
