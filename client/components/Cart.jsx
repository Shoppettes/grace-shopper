import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {updateCartProduct, getCartByOrder} from '../store'

export const cartView = (props) => {
  const {cart, currentOrder, getCart} = props

  return (
    <div>

    <h3>You have {cart.length} items in your cart</h3> <br/>
    {cart.length > 0 && cart.map(product => (
      <div key={product.id}>
        ----------<br/>
        Name: {product.name} <br/>
        Price: {product.price}<br/>
        Amount: {product.OrderProducts.quantity}<br/>
        ------<br/>
      </div>
      )
    )}

    </div>
  )
};

const mapState = (state, ownProps) => {
  console.log(state)
  return {
    currentOrder: state.currentOrder,
    cart: getCart(1)
  }
}

const mapDispatch = dispatch => {
  return {
    getCart (orderId) {
      dispatch(getCartByOrder(orderId))
    }
  }
}


export default connect(mapState, mapDispatch)(cartView)
