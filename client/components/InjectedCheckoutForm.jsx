import React from 'react';
import {injectStripe, Elements} from 'react-stripe-elements';
import CardSection from './CardSection';
import PaymentRequestForm from './PaymentForm.jsx'
//import {connect} from 'react-redux'

class CheckoutForm extends React.Component {
  constructor(props) { /*this.props is the stripe object:

    */
    super(props);
  }

  render() {
    console.log('propsaaa', this.props)
    return (
      <div className="Checkout">
       <Elements>
          <CardSection />
        </Elements>
        <Elements>
          <PaymentRequestForm />
        </Elements>
        </div>
    );
  }
}


export default injectStripe(CheckoutForm);

