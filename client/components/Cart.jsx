import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateOrderProductInstance, removeOrderProductInstance} from '../store'

class Cart extends Component {
  constructor () {
    super ()
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render () {
    const {order, productsInCart, updateItemAmountInCart, removeItemFromCart} = this.props;

    return (
      <div id="cart-wrapper">
        <h3>My Cart</h3>
        {(!productsInCart || !productsInCart.length) ? <span>You do not have any items in your cart.</span> :
        productsInCart.map(product =>
          (
            <div key={product.id}>
              ----------<br/>
              Name: {product.name} <br/>
              Price: {product.price}<br/>
              Quantity: {product.OrderProducts.quantity}<br/>
              <select className="custom-select" onChange={(event) => this.onChange(order.id, product.id, event.target.value)}>
                <option selected>Update Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button onClick={() => this.onClick(order.id, product.id)}>Remove item from cart.</button>
              ------<br/>
            </div>
          )
        )}
        <br/><br/>
        <Link to="/checkout">checkout</Link>
      </div>
    )
  }

  onChange(orderId, productId, quantity) {
    event.preventDefault();
    this.props.updateItemAmountInCart(orderId, productId, quantity)
  }


  /*return (
    <div id="cart-wrapper">
      <h3>My Cart</h3>
      {!productsInCart.length ? <span>You do not have any items in your cart.</span> :
      productsInCart.map(product =>
        (
          <div key={product.id}>
            ----------<br/>
            Name: {product.name} <br/>
            Price: {product.price}<br/>
            Quantity: {product.OrderProducts.quantity}<br/>
          <select className="custom-select" onChange={(event) => updateItemAmountInCart(order.id, product.id, event.target.value)}>
              <option selected>Update Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={() => removeItemFromCart(order.id, product.id)}>Remove item from cart.</button>
            ------<br/>
          </div>
        )
      )}
    </div>
  )*/

  onClick(orderId, productId) {
    event.preventDefault();
    this.props.removeItemFromCart(orderId, productId);
  }

}

const mapState = (state) => {
  return {
    order: state.currentOrder,
    productsInCart: state.currentOrder.products
  }
}

const mapDispatch = dispatch => {
  return {
    updateItemAmountInCart (orderId, productId, quantity) {
      dispatch(updateOrderProductInstance(orderId, productId, quantity))
    },
    removeItemFromCart (orderId, productId) {
      dispatch(removeOrderProductInstance(orderId, productId))
    }
  }
}
export default connect(mapState, mapDispatch)(Cart)
