import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './Checkout.jsx'
import {setCurrentUser, submitOrder} from '../store'

const MyStoreCheckout = (props) => {
    const {order, productsInCart, handleSubmit, handleChangeShippingAddress, handleChangeBillingAddress,
       user} = props;
    let amount = calcTotal(productsInCart);
    console.log(props.user, 'user props' )
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
            <form onSubmit={(evt) => props.handleSubmit(evt, user, order)}>
            <div className="form-group">
              <label for="inputAddress">Shipping Address</label>

              <input type="text" 
              name="shippingAddress" 
              value={props.user.shippingAddress}
              className="form-control" 
              id="shippingAddress"
              placeholder="1234 Main St. New York, NY 10023" 
              onChange = {(event) => props.handleChangeShippingAddress(event, user) }/>
            </div>
            <div className="form-group">
              <label for="inputAddress2">Billing Address</label>
              <input type="text" 
              name="billingAddress"
              value={props.user.billingAddress} 
              className="form-control"
              id="billingAddress" 
              placeholder="555 Maple Ln. San Francisco, CA 94123" 
              onChange= {(event) => props.handleChangeBillingAddress(event, user)}/>
            </div>
            <div className="form-group">
              <label for="ccNum">Credit Card</label>
              <input type="text" 
              name="creditCardNumber" 
              value={props.user.creditCardNumber}
              className="form-control" 
              id="creditCardNumber"
              placeholder="XXXXXXXXXXXXXXXX" 
              onChange = {(event) => props.handleChangeCreditCard(event, user) }/>
              </div>
              <div className="form-group">
              <label for="ccv">CCV</label>
              <input type="text" 
              name="creditCardCCV" 
              value={props.user.creditCardNumber}
              className="form-control" 
              id="creditCardCCV"
              placeholder="XXX" 
              onChange = {(event) => props.handleChangeCreditCardCCV(event, user) }/>

            </div>
            <div className="form-group">
            <label for="expDate">Expiration Date</label>
            <input type="text" 
            name="expDate" 
            value={props.user.creditCardExpDate}
            className="form-control" 
            id="expDate"
            placeholder="01/19" 
            onChange = {(event) => props.handleChangeCCExpDate(event, user) }/>
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
            <button>Submit payment</button>
            </form>
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
      handleChangeShippingAddress(evt, user) {
        evt.preventDefault();
        user.shippingAddress = evt.target.value

        dispatch(setCurrentUser(user))
      },
      handleChangeBillingAddress(evt, user) {
        evt.preventDefault();

        user.billingAddress = evt.target.value
        dispatch(setCurrentUser(user))
      },
      handleChangeCreditCard(evt, user) {
        evt.preventDefault();
        user.creditCardNumber = evt.target.value
        dispatch(setCurrentUser(user))
      },
      handleChangeCreditCardCCV(evt, user) {

        evt.preventDefault();
        user.creditCardCCV = evt.target.value
        dispatch(setCurrentUser(user))
      },
      handleChangeCCExpDate(evt, user) {
        evt.preventDefault();

        user.creditCardExpDate = evt.target.value
        dispatch(setCurrentUser(user))

      },
      handlePromoSubmit(evt) {
        evt.preventDefault();
        dispatch(setCurrentUser(evt.target.value)) //**update order total on state
      },

      handleSubmit(evt, user, order) {
        evt.preventDefault();
        order.userId = user.id
        dispatch(submitOrder(user, order))
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

