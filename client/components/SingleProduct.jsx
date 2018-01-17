import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getChosenProductFromDb, createOrderProductInstance, updateOrderProductInstance} from '../store'
import notification from 'toastr'


class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.loadChosenProduct(this.props.match.params.productId);
  }

  render () {
    notification.options.positionClass = "toast-top-right"
    const {order, product} = this.props;
    console.log(product, 'product')
    return (
      <div id="single-product-wrapper">
        <div className="single-product-img-container" key={product && product.id}>

                <img className="single-product-img" src={product.imageURL} />
        </div>
        <div className="caption-container">
            <h5>
              <span>{product && product.name}</span><br/>
              <span>${product.price}</span>
            </h5>
            <button onClick={() => this.props.addItemToCart(event, order.id, product.id)}>Add item to cart.</button>
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
    addItemToCart (event, orderId, productId) {
      dispatch(createOrderProductInstance(orderId, productId))
      notification.success('Item added to cart!')
    }
  }
};

export default connect(mapState, mapDispatch)(SingleProduct);
