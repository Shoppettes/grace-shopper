import React, {Component} from 'react';
import {connect} from 'react-redux';
import {checkoutCurrentOrder} from '../store'


class UserInfoForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault();
    
        this.props.checkoutCurrentOrder({
            billingAddress: event.target.billingAddress.value,
            shippingAddress: event.target.shippingAddress.value,
            user: this.props.user.id,
            orderStatus: 'awaiting shipment'
        })
    }

    render() {
        const {currentOrder, user} = this.props;
         console.log('currentOrder ', currentOrder, 'user ', user)
        return (
            <div className="checkout-info-container">
                <div className="buffer local">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                            <input 
                            name="firstName"
                            type="firstName"
                            className="form-control"
                            required
                            ></input>

                        <label>Last Name</label>
                            <input 
                            name="firstName"
                            type="firstName"
                            className="form-control"
                            required
                            ></input>

                        <label>Billing Address</label>
                            <input 
                            name="billingAddress"
                            type="billingAddress"
                            className="form-control"
                            required
                            ></input>
                        
                        <label>Shipping Address</label>
                            <input 
                            name="billingAddress"
                            type="billingAddress"
                            className="form-control"
                            required
                            ></input>
                        
                    </div> 
                    <button type="submit" className="btn btn-block btn-primary">Submit info</button>
                </form>
                </div>
            </div>
        )
    }
}



const mapState = (state) => {
    return {
        currentOrder: state.currentOrder,
        user: state.user
    }
}

const mapDispatch = function(dispatch) {
    return {
        checkoutCurrentOrder(orderId) {
            dispatch(setCurrentOrder(orderInfo))
        }
    }
}

export default connect(mapState, mapDispatch)(UserInfoForm);

