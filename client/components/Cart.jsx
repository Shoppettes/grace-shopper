import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateOrderProductInstance, removeOrderProductInstance} from '../store'

export const Cart = (props) => {
  const {order, productsInCart} = props;

  return (
    <div>
      <h3>My Cart</h3>
      {!productsInCart.length ? <span>You do not have any items in your cart.</span> :
      productsInCart.map(product =>
        (
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

const mapState = (state) => {
  return {
    order: state.currentOrder,
    productsInCart: state.currentOrder.products
  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Cart)
