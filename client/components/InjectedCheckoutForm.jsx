import React from 'react';
import {injectStripe, Elements} from 'react-stripe-elements';
import CardSection from './CardSection';
import UserInfoForm from './UserInfoForm.jsx'
import PaymentRequestForm from './PaymentForm.jsx'
import {connect} from 'react-redux'

class CheckoutForm extends React.Component {
  constructor(props) { /*this.props is the stripe object*/
    super(props);
  }


  render() {
    return (
      <div className="Checkout">
        <UserInfoForm />
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



export default CheckoutForm = injectStripe(connect()(CheckoutForm));

