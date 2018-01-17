import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createOrderProductInstance, updateOrderProductInstance} from '../store';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    const {order, category,search} = this.props;
    var products = !category ? this.props.products : this.props.products.filter(product => product.category === cateogory)
    if(search.searchInp) {
      products = products.filter(product => product.name.match(search.searchInp))
      search.searchInp = ''
      search.redirect = false
    }

    return (

      <div id="products-wrapper">
        <div className="row">
          {products && products.map(product => (
            <div className="col-xs-4" key={product.id}>
              <div className="thumbnail">
                <img className="product-img" src={product.imageURL} />
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
                <button onClick={() => this.props.addItemToCart(event, order, product.id)}>Add item to cart.</button>
              </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
}



const mapState = (state) => {
  return {
    products: state.products,
    category: state.category,
    order: state.currentOrder,
    search: state.search
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addItemToCart (event, order, productId) {
      event.preventDefault()
      if (!order.products.find(product => product.id === productId)) {
        let orderId = order.id
        dispatch(createOrderProductInstance(orderId, productId))
      }
      else dispatch(updateOrderProductInstance(order.id, productId, {'increment': true}))
    }
  }
}

export default connect(mapState, mapDispatch)(Products);


