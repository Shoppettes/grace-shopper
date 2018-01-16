import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getChosenProductFromDb, createOrderProductInstance, updateOrderProductInstance} from '../store'


class SingleProduct extends Component {
  constructor(props) {
    super(props);
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
              <button onClick={() => this.props.addItemToCart(event, order, product)}>Add item to cart.</button>
            </div>
      </div>
    )
  }
}

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
    addItemToCart (event, order, product) {
      dispatch(createOrderProductInstance(order, product))
    }
  }
};

export default connect(mapState, mapDispatch)(SingleProduct);
