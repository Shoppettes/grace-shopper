import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkout from './Checkout.jsx'
import {setCurrentUser} from '../store'

const MyStoreCheckout = (props) => {
    const {order, productsInCart, updateItemAmountInCart, removeItemFromCart, onClick} = props;
    console.log('props', props)
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
          <h3>Shipping Address</h3>
          <div className="shipping-form-container">
            <form>
            <div className="user-email">
              <label for="email">email</label>
              <input type="text" name="email"  className="form-control" id="inputAddress" placeholder="email@gmail.com" />
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" name="inputAddress" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input type="text" name="inputAddress2" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
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
            <div className="form-group">
              <div className="form-check" onClick={(event) => onClick(event)}>
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                  Check me out
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
      },
      onClick(evt) {
        evt.preventDefault();
        console.log('evt ', evt)
        const email = evt.target.email.value;
        const address1 = evt.target.inputAddress.value;
        const address2 = evt.target.inputAddress2.value;
        const city = evt.target.inputCity.value;
        const state = evt.target.inputState.value;
        const zip = evt.target.inputZip.value;
  
        dispatch(setCurrentUser({email, address1, address2, city, state, zip}))
      }
    }
  }
  
  
export default connect(mapState, mapDispatch)(MyStoreCheckout)
  