import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Elements} from 'react-stripe-elements'
import InjectedCheckoutForm from './InjectedCheckoutForm.jsx'

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

