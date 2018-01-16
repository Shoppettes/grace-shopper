import React from 'react';
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

const onToken = (amount, description, order, handleSuccess) => token => 
  axios.post(PAYMENT_SERVER_URL, 
    {
      description, 
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(() => {
      console.log('handle success')
      console.dir(handleSuccess)
      handleSuccess(order)
      alert('Payment successful!')
      // if (!user.id) {
      //   axios.put(`/api/orders/${order.id}/newUser`, {email : user.email})
      // }
      // else {
      //   axios.put(`/api/orders/${order.id}`, {orderStatus: 'awaiting shipment'})
      // } 
      //I think this logic needs to go in the "handleSuccess" function
    })
    // .catch(() => alert('Payment error'))

/**COMPONENT */
const Checkout = ({order, handleSuccess}) => {
  let amount = 100;
  let description = 'one description for an order';
  let name = 'Mary sue'
  console.log('order ', order)
  return (
    <div>
      <StripeCheckout
        name={name}
        description={description} /**this is a description of all the items in the order */
        amount={fromDollarToCent(amount)} /**this is the total of the order */
        token={onToken(amount, description, order, handleSuccess)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
      />
    </div>
  )
}
    

const createDescription = (cartArr) => { 
  let description = cartArr.map(cartItem => {
    return cartItem.description
  }).join(', ');

  console.log(description);
  return description;
}


const mapState = ({currentOrder, products}) => { 
  return {
    order: currentOrder,
    amount: currentOrder.total,
    products: products,
    description: createDescription(products)

  }
}

const mapDispatch = dispatch => {
  return {
    handleSuccess: order => {
      dispatch(submitOrder(order))
    }
  }
}
export default connect(mapState, mapDispatch)(Checkout);


/**
 * import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { submitCart } from '../store'

const STRIPE_PUBLISHABLE = 'pk_test_BjdBrWKAZMF0Lwo9Pncz4SxF'
const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://choko-hopper.herokuapp.com/auth/checkout'
    : 'http://localhost:8080/auth/checkout'

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100

const onToken = (amount, description, handleSuccess, cart) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(() => {
      handleSuccess(cart)
      alert('Payment Successful')
    })
    .catch(() => alert('Payment Error'))

const Checkout = ({ description, amount, handleSuccess, cart }) => (
  <div>
    <StripeCheckout
      name="Your Chocolate Order"
      description={description}
      amount={fromUSDToCent(amount)}
      token={onToken(amount, description, handleSuccess, cart)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  </div>
)

const findDescription = (cart, products) => {
  let cartProducts = cart.cart.map(cartItem => {
    let result = products.find(product => product.id === cartItem.productId)
    return result ? result.name : result
  }
  )
  return cartProducts.length
    ? cartProducts.reduce((accumulator, item) => {
      return accumulator + ', ' + item
    })
    : ''
}

const mapState = ({ products, cart }) => ({
  products,
  cart,
  amount: cart.orderTotal,
  description: findDescription(cart, products)
})
const mapDispatch = dispatch => ({
  handleSuccess: cart => {
    dispatch(submitCart(cart))
  }
})
export default connect(mapState, mapDispatch)(Checkout)
 */