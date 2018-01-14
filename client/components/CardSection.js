import React, {Component} from 'react';
import {injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement} from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};
const createOptions = () => {
  return {
    style: {
      base: {
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};


class _SplitForm extends Component{
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <span id="cc-number">
            <label>
              Card number
              <CardNumberElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(this.props.fontSize)}
              />
            </label>
            </span>
            <span id="exp-date">
              <label>
                Expiration date
                <CardExpiryElement
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onReady={handleReady}
                  {...createOptions(this.props.fontSize)}
                />
              </label>
            </span>
            <span id="cvc">
              <label>
                CVC
                <CardCVCElement
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onReady={handleReady}
                  {...createOptions(this.props.fontSize)}
                />
              </label>
            </span>
          <label>
            Postal code
            <PostalCodeElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </label>
          <div>
         <button id="payment-button">Pay</button>
        </div>
      </form>
    );
  }
}
export default injectStripe(_SplitForm);
