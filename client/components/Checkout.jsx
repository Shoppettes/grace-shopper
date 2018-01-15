import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

const STRIPE_PUBLISHABLE = 'pk_test_4j8nxKms5tgqYitAFPPjBZ01';

const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://dino-store.herokuapp.com/'
  : 'http://localhost:8080/'; //what is this?

const CURRENCY = 'USD'
const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
}

const errorPayment = data => {
  alert('Payment Error');
}

const onToken = (amount, description, user, order) => token => 
  axios.post(PAYMENT_SERVER_URL, 
    {
      description, 
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .then(() => {
      if (!user.id) {
        axios.put(`/api/orders/${order.id}/newUser`, {email : user.email})
      }
      else {
        axios.put(`/api/orders/${order.id}`, {orderStatus: 'awaiting shipment'})
      }
    })
    .catch(errorPayment)

const Checkout = ({user, name, description, amount, order}) => 
    <StripeCheckout
      name={name}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description, user, order)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />


const mapState = (state) => {
  return {
    user: state.currentUser,
    order: state.currentOrder
  }
}
export default connect(mapState)(Checkout);


