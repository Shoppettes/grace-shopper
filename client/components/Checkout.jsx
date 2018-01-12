import React, {Component} from 'react';
import {connect} from 'redux';

class Checkout extends Component => {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentOrder(); // loads state with currentOrder
    // if currentOrder.id (if exists) use that order to render items in order and all personal information
    // if not, use state.cart to render items in "order" and an empty form for entering information
    // create reducer for currentOrder; create thunk that does a get request for orderId
  }

  return (
    <div>
      <span>This is the Checkout component.</span>
    </div>
  )
};


const mapStateToProps = state => {
  return {
    user: state.currentUser
    order:
    isLoggedIn:
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentOrder () {
      dispatch(getCurrentOrderFromDb(user.id))
    }
  }
}


// is user logged in, do they have an order (4 possibilities)
//

// state if LoggedIn - user.order or if not - cart

export default Checkout;
