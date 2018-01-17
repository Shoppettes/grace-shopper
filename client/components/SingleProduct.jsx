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
    console.log(product, 'product')
    return (
      <div id="single-product-wrapper">
        <div className="col-xs-4" key={product && product.id}>
              <div>
                <img className="single-product-img" src={product.imageURL} />
              </div>
                <div className="caption">
                  <h5>
                    <span>{product && product.name}</span>
                  </h5>
                </div>
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
    addItemToCart(event, order, product) {
      dispatch(createOrderProductInstance(order, product))
    }
  }
};

export default connect(mapState, mapDispatch)(SingleProduct);
