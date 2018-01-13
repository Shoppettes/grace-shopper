import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {updateCartProduct, getCartByOrder, getCart} from '../store'

export const cartView = (props) => {
  const {cart, currentOrder, uploadCart, clickHandler} = props
  return (
    <div>

    <h3>You have {cart.length} items in your cart</h3> <br/>
    {cart.length > 0 && cart.map(product => (
      <div key={product.id}>
        ----------<br/>
        Name: {product.name} <br/>
        Price: {product.price}<br/>
        Amount: {product.OrderProducts.quantity}<br/>
        <button onClick={clickHandler.bind(this, currentOrder.id, product.id, cart)}>Remove</button>
        ------<br/>
      </div>
      )
    )}

    </div>
  )
};

const mapState = (state) => {
  console.log(state)
  return {
    currentOrder: state.currentOrder,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    uploadCart(orderId) {
      dispatch(getCartByOrder(orderId))
    },
    clickHandler (orderId, productId, cart) {
       dispatch(updateCartProduct(orderId, productId, 'decrement'))
    }
  }
}


export default connect(mapState, mapDispatch)(cartView)
