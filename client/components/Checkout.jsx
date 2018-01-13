import React, {Component} from 'react';
import {connect} from 'redux';
import {getCurrentOrder} from '../store'

class Checkout extends Component {
  componentDidMount() {
    this.props.getCurrentOrder(); // loads state with currentOrder
    // if currentOrder.id (if exists) use that order to render items in order and all personal information
    // if not, use state.cart to render items in "order" and an empty form for entering information
    // create reducer for currentOrder; create thunk that does a get request for orderId


    // maybe two different routes on our Root, one to /orders/checkout/guestcheckout
  }

  render () {
    return (
      <div>
        <span>This is the Checkout component.</span>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    user: state.currentUser
    //order:
    //isLoggedIn:
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentOrder () {
      dispatch(getCurrentOrder())
    }
  }
}


// is user logged in, do they have an order (4 possibilities)
//

// state if LoggedIn - user.order or if not - cart

export default Checkout;
