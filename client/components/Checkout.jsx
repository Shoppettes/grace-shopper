import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Elements} from 'react-stripe-elements'
import InjectedCheckoutForm from './InjectedCheckoutForm'

/**
 * const {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} = ReactStripeElements
 */

class Checkout extends Component  {
    render() {
        return (
            <Elements>
                <InjectedCheckoutForm />
            </Elements>
        )
    }
}

export default Checkout;

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <h1>Available Elements</h1>
        <Elements>
          <CardForm />
        </Elements>
      </div>
    )
  }
}
