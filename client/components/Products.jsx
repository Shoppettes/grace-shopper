import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createOrderProductInstance, updateOrderProductInstance} from '../store';

class Products extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render () {
    const {order, category, products} = this.props;
    return (
      <div>
        <div className="row">
          {products && products.map(product => (
            <div className="col-xs-4" key={product.id}>
              <a className="thumbnail" href="#"></a>
              <div className="caption">
                <h5>
                  <div>
                    <span>{product.name}</span>
                  </div>
                  <span>{product.price}</span>
                </h5>
                <div>
                  <Link to={`/products/${product.id}`}>See more</Link>
                </div>
                <button onClick={() => this.onClick(order, product.id)}>Add item to cart.</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  onClick(order, productId) {
    event.preventDefault();
    this.props.addItemToCart(order, productId)
  }
};

const mapState = (state) => {
  return {
    products: state.products,
    category: state.category,
    order: state.currentOrder
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addItemToCart (order, productId) {
      if (!order.products.find(product => product.id === productId)) {
        let orderId = order.id
        console.log('!!!!!!', orderId)
        dispatch(createOrderProductInstance(orderId, productId))
      }
      else dispatch(updateOrderProductInstance(order.id, productId, {'increment': true}))
    }
  }
}

export default connect(mapState, mapDispatch)(Products);


















//
