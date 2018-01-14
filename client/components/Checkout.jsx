import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './InjectedCheckoutForm.jsx';

class MyStoreCheckout extends React.Component {
  constructor() {
    super();
    this.state = {stripe: null};
  }
  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    this.setState({stripe: window.Stripe('pk_test_4j8nxKms5tgqYitAFPPjBZ01')});
  }
  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

export default MyStoreCheckout;
