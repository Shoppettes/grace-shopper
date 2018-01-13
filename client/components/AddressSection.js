import React, {Component} from 'react';
import {AddressElement} from 'react-stripe-elements';

class AddressSection extends Component {
    render() {
        return (
            <label>
                Address details
                <AddressElement style={{base:{fontSize: '18px'}}} />
            </label>
        )
    }
}

export default AddressSection;