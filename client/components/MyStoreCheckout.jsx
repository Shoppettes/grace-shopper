import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './Checkout.jsx'
import {setCurrentUser, getCurrentUser} from '../store'

const MyStoreCheckout = (props) => {
    const {order, productsInCart, handleChange, handleClick, user} = props;
    console.log('user', user)
      return (
        <div id="checkout-wrapper">
          <div className="checkout-table-container">
            <h3>Checkout</h3>
            <div className="checkout-table-container">
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {productsInCart && productsInCart.map(product => {
                  <tr>
                    <td>{product.name}</td>
                    <td>c</td>
                    <td>${product.price}</td>
                </tr>
                })}
                
                <tr>
                <td scope="col">Item Name</td>
                <td scope="col">x</td>
                <td scope="col">x</td>
                </tr>
                <tr>
                <td scope="col">Item Name</td>
                <td scope="col">x</td>
                <td scope="col">$$$</td>
                </tr>
                <tr>
                <td scope="col"></td>
                <td scope="col"></td>
                <td scope="col">$$$</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="user-form-container">
          <h3>Order Info</h3>
          <div className="shipping-form-container">
            <form>
            <div className="form-group">
              <label for="inputAddress">Shipping Address</label>
              <input type="text" 
              name="inputAddress" 
              value={props.user.billingAddress}
              className="form-control" 
              id="inputAddress" 
              placeholder="1234 Main St. New York, NY 10023" 
              onChange = {props.handleChange}/>
            </div>
            <div className="form-group">
              <label for="inputAddress2">Billing Address</label>
              <input type="text" 
              name="inputAddress2"
              value={props.user.shippingAddress} 
              className="form-control" 
              id="inputAddress2" 
              placeholder="555 Maple Ln. San Francisco, CA 94123" />
            </div>
            <div className="form-group">
              <div className="form-check" onClick={props.handleClick}>
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                  same as shipping
                </label>
              </div>
            </div>
            </form>
          </div>
          <div className="payment-container">
                 <Checkout />
          </div>
        </div>
      </div>
      )
    }
  
  const mapState = (state) => {
    return {
      order: state.currentOrder,
      productsInCart: state.products,
      user: state.user
    }
  }
  
  const mapDispatch = (dispatch)=> {
    return {
      // updateItemAmountInCart (orderId, productId, quantity) {
      //   dispatch(updateOrderProductInstance(orderId, productId, quantity))
      // },
      // removeItemFromCart (orderId, productId) {
      //   dispatch(removeOrderProductInstance(orderId, productId))
      // },
      handleChange(evt) {
        evt.preventDefault();
        dispatch(setCurrentUser({[evt.target.name] : evt.target.value}))
      },

      handleClick(evt) {
        evt.preventDefault();
        dispatch(getCurrentUser());
      }
      //promo submit?
    }
  }
  
  
export default connect(mapState, mapDispatch)(MyStoreCheckout)

/**
 * import React from 'react'
import { connect } from 'react-redux'
import { updateUserInfo, validateCode } from '../store'
import StripeCheckoutComponent from './stripeCheckout'

/**
 * COMPONENT

const Checkout = props => {
  return (
    <div>
      <h3>Checkout Information</h3>
      <form name="checkoutForm">
        <div>
          <label htmlFor="userEmail">
            <small>Your email address: </small>
          </label>
          <input
            name="userEmail"
            type="text"
            placeholder="yourName@domain.com"
            value={props.userEmail}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="shippingAddress">
            <small>Shipping address:</small>
          </label>
          <input
            name="shippingAddress"
            type="text"
            placeholder="123 Main Street, New York, NY 10021"
            value={props.shippingAddress}
            onChange={props.handleChange}
          />
        </div>
      </form>
      <StripeCheckoutComponent />
    </div>
  )
}

const mapState = ({ cart }) => ({
  shippingAddress: cart.shippingAddress,
  userEmail: cart.userEmail
})

const mapDispatch = dispatch => ({
  handleChange: evt => {
    dispatch(updateUserInfo({ [evt.target.name]: evt.target.value }))
  },
  promoSubmit: evt => {
    evt.preventDefault()
    const code = evt.target.code.value
    dispatch(validateCode(code))
  }
})

export default connect(mapState, mapDispatch)(Checkout)
 */
  
/**
 *   
 */

 /**
  *  <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
  */