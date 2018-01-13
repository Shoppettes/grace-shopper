import React, {Component} from 'react';
import {CardElement} from 'react-stripe-elements';

export default class CardSection extends Component {
    render() {
        return (
            <label>
                Card details
                <CardElement style={{base:{fontSize: '18px'}}} />
            </label>
        )
    }
}
