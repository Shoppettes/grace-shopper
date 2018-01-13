import React from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';
import {connect} from 'react-redux'


class CheckoutForm extends React.Component {
  constructor(props) { /*this.props is the stripe object: 
  
    */
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken().then(({token}) => {
      console.log('Received Stripe token:', token);
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  render() {
    console.log('props', this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button>Confirm order</button>
      </form>
    );
  }
}


export default injectStripe(connect()(CheckoutForm));

