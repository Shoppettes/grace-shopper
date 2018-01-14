import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateOrderProductInstance, removeOrderProductInstance} from '../store'

export const Cart = (props) => {
  const {order, productsInCart, updateItemAmountInCart} = props;

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
            Quantity: {product.OrderProducts.quantity}<br/>
            <select className="custom-select" onChange={(event) => updateItemAmountInCart(order, product.id, event.target.value)}>
              <option selected>Update Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
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
    updateItemAmountInCart (order, productId, quantity) {
      let orderId = order.id
      dispatch(updateOrderProductInstance(orderId, productId, quantity))
    },
    removeItemFromCart () {
      let orderId = order.id
      dispatch(removeOrderProductInstance(orderId, productId))
    }
  }
}





export default connect(mapState, mapDispatch)(Cart)
