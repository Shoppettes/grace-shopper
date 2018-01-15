import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './InjectedCheckoutForm.jsx';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateOrderProductInstance, removeOrderProductInstance} from '../store'

class MyStoreCheckout extends Component {
  constructor() {
    super();
    this.state = {stripe: null};
  }

  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    this.setState({stripe: window.Stripe('pk_test_4j8nxKms5tgqYitAFPPjBZ01')});
  }

  render () {
    const {order, productsInCart, updateItemAmountInCart, removeItemFromCart, stripe} = this.props;


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
                  <td>Item Name</td>
                  <td>c</td>
                  <td>$$$</td>
              </tr>
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
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
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
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
        </div>
        <div className="payment-container">
          <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <InjectedCheckoutForm />
          </Elements>
          </StripeProvider>
        </div>
      </div>
    )
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





export default connect(mapState, mapDispatch)(MyStoreCheckout)
