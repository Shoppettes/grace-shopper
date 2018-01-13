import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';

import AddressSection from './AddressSection';
import CardSection from './CardSection';


class PaymentForm extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit= (ev) => {
        ev.preventDefault();
        this.props.stripe.createToken({name: 'Test User'}).then(({token}) => {
            console.log('Received Stripe token: ', token)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <AddressSection />
                <CardSection />
                <button>Confirm Order</button>
            </form>
        )
    }
}

export default injectStripe(PaymentForm)

