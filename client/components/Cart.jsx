import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {updateCartProduct, createOrderProductInstance} from '../store'

export const cartView = (props) => {
  const {cart, currentOrder} = props
  return (
    <div>
    {cart && cart.map(product => (
      <div key={product.id}>
        Name: {product.name} <br/>
        Price: {product.price}<br/>
        Amount: {product.OrderProducts.quantity}<br/>
        ------<br/>
      </div>
      )
    )}

    </div>
  )
};

const mapState = ({currentOrder, cart}) => {
  return {
  }

}


export default connect(mapState, null)(cartView);
