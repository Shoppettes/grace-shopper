import React, {Component} from 'react';
import {connect} from 'react-redux'

class UserInfoForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    render() {
        const {currentOrder} = this.props;
         console.log('currentOrder ', currentOrder)
        return (
            <h1> future home of a form </h1>
        )
    }
    onSubmit(event) {
        event.preventDefault();
    
        this.props.checkoutCurrentOrder({
            orderStatus: 'awaiting shipment'
        })
    }
}



const mapState = (state) => {
    return {
        currentOrder: state.currentOrder
    }
}

const mapDispatch = function(dispatch) {
    return {
        checkoutCurrentOrder(orderInfo) {
            dispatch(setCurrentOrder(orderInfo))
        }
    }
}

export default connect(mapState, mapDispatch)(UserInfoForm);

