import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserOrders} from '../store'


const PastOrders = (props) => {
  const {currentUser} = props
  const orders = currentUser.orders
  console.log('!!!!!!', orders)

  return (
    <div>
      <span>Welcome {currentUser.firstName}</span>
      Your Past Orders
      {
        orders.length && orders.map(order =>
          <div>{order.id} | {order.orderStatus}</div>
        )
      }
    </div>
  )
}


const mapState = (state) => {
  return {
    currentUser: state.user
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(PastOrders)
