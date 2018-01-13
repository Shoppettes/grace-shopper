import React from 'react';
import {connect} from 'react-redux';
const ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

let PaymentForm = React.createClass({ //found this 'createClass' syntax on DavidWalsh blog, not sure
    //exactly what it means and if it is outdated
    mixins: [ReactScriptLoaderMixin],

    getInitialState: function() {
        return {
            stripeLoading: true,
            stripeLoadingError: false,
            submitDisabled: false,
            paymentError: null,
            paymentComplete: false,
            token: null
        };
    },

    getScriptURL: function() {
        return 'https://js.stripe.com/v2/';
    },

    onScriptLoaded: function() {
        if(!PaymentForm.getStripeToken) {
            Stripe.setPublishableKey('pk_test_4j8nxKms5tgqYitAFPPjBZ01');
            this.setState({ stripeLoading: false,stripeLoadingError: false});
        }
    },

    onScriptError: function() {
        this.setState({ stripeLoading: false, stripeLoadingError: true})
    },

    onSubmit: function(event) {

    },
    render: function() {
      if (this.state.stripeLoading) {
        return <div>Loading</div>;
      }
      else if (this.state.stripeLoadingError) {
        return <div>Error</div>;
      }
      else {
        return <div>Loaded!</div>;
      }
    }
  });


})
