import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getChosenProductFromDb, createOrderProductInstance, updateOrderProductInstance} from '../store'


class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    this.props.loadChosenProduct(this.props.match.params.productId);
  }

  render () {
    const {order, product} = this.props;
    return (
      <div id="single-product-wrapper">
        <span>Product Name</span>
        <div className="col-xs-4" key={product.id}>
              <a className="thumbnail" href="#">
                <img src= "" />
                <div className="caption">
                  <h5>
                    <span>{product.name}</span>
                  </h5>
                </div>
              </a>
              <button onClick={() => this.onClick(order, product.id)}>Add item to cart.</button>
            </div>
      </div>
    )
  }

  onClick(order, productId) {
    event.preventDefault();
    this.props.addItemToCart(order, productId)
  }
};

const mapState = (state) => {
  return {
    product: state.chosenProduct,
    order: state.currentOrder
  }
};

const mapDispatch = (dispatch) => {
  return {
    loadChosenProduct(productId) {
      dispatch(getChosenProductFromDb(productId))
    },
    // I need to update the functionality here to reflect what's been implemented in Cart but didn't have time to put the select quantity button in. It's very hard to see with current CSS.
    addItemToCart (order, productId) {
      if (!order.products.find(product => product.id === productId)) {
        let orderId = order.id
        dispatch(createOrderProductInstance(orderId, productId))
      }
      else dispatch(updateOrderProductInstance(order.id, productId, 'increment'))
    }
  }
};

export default connect(mapState, mapDispatch)(SingleProduct);
