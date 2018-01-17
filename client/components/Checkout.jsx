import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

import {submitOrder} from '../store'


const STRIPE_PUBLISHABLE = 'pk_test_4j8nxKms5tgqYitAFPPjBZ01';

const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'

  ? 'https://dino-store.herokuapp.com/auth/stripe'
  : 'http://localhost:8080/auth/stripe'; //what is this?


const CURRENCY = 'USD'
const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
}

const errorPayment = data => {
  alert('Payment Error');
}

const onToken = (amount, description, order, handleSuccess, user) => token => 
  axios.post(PAYMENT_SERVER_URL, 
    {
      description, 
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(() => {
      handleSuccess(order, user)
      alert('Payment successful!')
    })
    // .catch(() => alert('Payment error'))

/**COMPONENT */
const Checkout = ({order, user, handleSuccess}) => {
  let amount = calcTotal(order.products);
  let name = 'Your order: ';
  let description = order.products && createDescription(order.products);
 
  return (
    <div>
      <StripeCheckout
        name={name}
        description={description} /**this is a description of all the items in the order */
        amount={fromDollarToCent(amount)} /**this is the total of the order */
        token={onToken(amount, description, order, handleSuccess, user)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
      />
    </div>
  )
}


    

const createDescription = (cartArr) => { 
 return cartArr.map(cartItem => {
    return cartItem.name
  }).join(', ');
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
    products: currentOrder.products,
    user: user
  }
}

const mapDispatch = dispatch => {
  return {
    handleSuccess: (order, user) => {
      dispatch(submitOrder(order, user))
    }
  }
}
export default connect(mapState, mapDispatch)(Checkout);