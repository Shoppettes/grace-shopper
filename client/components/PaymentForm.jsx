import React, {Component} from 'react';
import {injectStripe, PaymentRequestButtonElement} from 'react-stripe-elements';

var stripe = Stripe('pk_test_4j8nxKms5tgqYitAFPPjBZ01');

class _PaymentRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canMakePayment: false,
      paymentRequest: stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1000,
        },
      }),
    };
  }
    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    componentDidMount(){
      console.log("AHHH WERE IN HERE!!!")
    const paymentRequest = this.props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000,
      },
    });

    paymentRequest.on('token', ({complete, token, ...data}) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success');
    });

    paymentRequest.canMakePayment().then(result => {
      this.setState({canMakePayment: !!result});
    });
  }

  render() {
    console.log(this.state.canMakePayment)
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            theme: 'light',
            height: '64px',
          },
        }}
      />
    ) : null;
  }
}
export default injectStripe(_PaymentRequestForm);
