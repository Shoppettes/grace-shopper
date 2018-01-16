import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './Checkout.jsx'
import {setCurrentUser, getCurrentUser} from '../store'

const MyStoreCheckout = (props) => {
    const {order, productsInCart, handleChange, handleClick, user} = props;

    console.log('user', user)
    console.log('productsInCart ', productsInCart)
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
                  return (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.OrderProducts.quantity}</td>
                      <td>${product.price}</td>
                    </tr>
                  )
                    
                })}
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
  
  
  const mapState = ({currentOrder, user}) => {
    return {
      order: currentOrder,
      productsInCart: currentOrder.products,
      user: user
    }
  }
  
  const mapDispatch = (dispatch)=> {
    return {
     
      handleChange(evt) {
        evt.preventDefault();
        dispatch(setCurrentUser({[evt.target.name] : evt.target.value}))
      },

      handleClick(evt) {
        evt.preventDefault();
        dispatch(getCurrentUser());
      }, 
      handlePromoSubmit(evt) {
        evt.preventDefault();
        dispatch(updateOrder({})) //**update order total on state
      }
      
    }
  }
  
  
export default connect(mapState, mapDispatch)(MyStoreCheckout)

/*
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './Checkout.jsx'
import {setCurrentUser, getCurrentUser} from '../store'

const MyStoreCheckout = (props) => {
    const {order, productsInCart, handleChange, handleClick, user} = props;

    console.log('user', user)
    console.log('productsInCart ', productsInCart)
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
                <tr>
                {productsInCart && productsInCart.map(product => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.OrderProducts.quantity}</td>
                      <td>${product.price}</td>
                    </tr>
                  )
                    
                })}
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
          
            </form>
          </div>
          <div className="payment-container">
                 <Checkout />
          </div>
        </div>
      </div>
      )
    }
  
  
  const mapState = ({currentOrder, user}) => {
    return {
      order: currentOrder,
      productsInCart: currentOrder.products,
      user: user
    }
  }
  
  const mapDispatch = (dispatch)=> {
    return {
     
      handleChange(evt) {
        evt.preventDefault();
        dispatch(setCurrentUser({[evt.target.name] : evt.target.value}))
      },

      handleClick(evt) {
        evt.preventDefault();
        dispatch(getCurrentUser());
      }, 
      handlePromoSubmit(evt) {
        evt.preventDefault();
        dispatch(updateOrder({})) //**update order total on state
      }
      
    }
  }
  
  
export default connect(mapState, mapDispatch)(MyStoreCheckout)

/**
 *   return function (dispatch) {
    axios.put(`/api/orderProducts/${orderId}/${productId}/${quantity}`)
      .then(res => dispatch(setCurrentOrder(res.data)))
      .catch(err => console.log(err))
  }
}
 */

 /**
  *  <div className="form-group">
              <div className="form-check" onClick={props.handleClick}>
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                  
                </label>
              </div>
            </div>
  */
