import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import notification from 'toastr'
import {createOrderProductInstance, updateOrderProductInstance, clearChosenCategory} from '../store';


class Products extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    notification.options.positionClass = "toast-top-right"
    const {order, category, search, resetCategory} = this.props;
    let {chosenCategory} = this.props
    var products = this.props.products
    if(chosenCategory !== null) {
      console.log('in here')
      products = chosenCategory.products
      resetCategory()
    }

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
                <img className="product-img" src={product.imageURL}/>
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
    search: state.search,
    chosenCategory: state.chosenCategory
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addItemToCart (event, order, productId) {
      event.preventDefault()

      if (!order.products.find(product => product.id === productId)) {
        let orderId = order.id
        dispatch(createOrderProductInstance(orderId, productId))
        notification.success('Item added to cart!')
      }
      else dispatch(updateOrderProductInstance(order.id, productId, {'increment': true}))
    },
    resetCategory () {
      dispatch(clearChosenCategory())

    }
 }
}

export default connect(mapState, mapDispatch)(Products);
