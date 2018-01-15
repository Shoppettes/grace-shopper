import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createOrderProductInstance, updateOrderProductInstance} from '../store';
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Thumbnail = require('react-bootstrap').Thumbnail;

class Products extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render () {
    const {order, category} = this.props;
    const products = !category ? this.props.products : this.props.products.filter(product => product.category === category)

    return (

      <div id="products-wrapper">
        <div className="row">
          {products && products.map(product => (
            <div className="col-xs-4" key={product.id}>
              <div className="thumbnail">
                <img src={product.photos[0] && product.photos[0].imgURL} />
              </div>
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
          </div>>
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
        dispatch(createOrderProductInstance(orderId, productId))
      }
      else dispatch(updateOrderProductInstance(order.id, productId, {'increment': true}))
    }
  }
}

export default connect(mapState, mapDispatch)(Products);


















//
