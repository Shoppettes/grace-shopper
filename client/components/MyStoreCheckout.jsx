import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './Checkout.jsx'
import {setCurrentOrder} from '../store'

const MyStoreCheckout = (props) => {
    const {order, productsInCart, handleChange, handlePromoSubmit, user} = props;
    let amount = calcTotal(productsInCart);
    
    console.log('amount ', amount)
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
                <tr>
                  <td>Order Total:</td>
                  <td></td>
                  <td>${amount}</td>
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
              name="shippingAddress" 
              value={props.order.shippingAddress}
              className="form-control" 
              id="inputAddress" 
              placeholder="1234 Main St. New York, NY 10023" 
              onChange = {props.handleChange}/>
            </div>
            <div className="form-group">
              <label for="inputAddress2">Billing Address</label>
              <input type="text" 
              name="billingAddress"
              value={props.order.billingAddress} 
              className="form-control" 
              id="inputAddress2" 
              placeholder="555 Maple Ln. San Francisco, CA 94123" />
            </div>
            <div className="form-group">
              <div className="promo-code" onSubmit={props.handlePromoSubmit}>
                <label for="promo-code">Enter promo code</label>
                <input type="text"
                name="promo-code"
                className="form-control"
                id="promo-code"
                placeholder="enter promo code here"
                />
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
  
  const calcTotal = (cartArr) => {
      if (cartArr && cartArr.length) {
        return cartArr.map(cartProduct => +cartProduct.price).reduce((prev, curr) => prev + curr).toFixed(2)
      }
      else {
        return 0;
      }
    }
  
  const mapState = ({currentOrder, user}) => {
    return {
      order: currentOrder,
      productsInCart: currentOrder.products,
      user: user
    }
  }
  
  const mapDispatch = (dispatch, ownProps)=> {
    return {
     
      handleChange(evt) {
        evt.preventDefault();
        const shippingAddress = evt.target.shippingAddress.value
        const billingAddress = evt.target.billingAddress.value
        // ownProps.order.shippingAddress = shippingAddress
        // ownProps.order.billingAddress = billingAddresss
        dispatch(setCurrentOrder(ownProps.order))
      },
      handlePromoSubmit(evt) {
        evt.preventDefault();
        dispatch(setCurrentUser(evt.target.value)) //**update order total on state
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

