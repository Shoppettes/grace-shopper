import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createOrderProductInstance, updateOrderProductInstance} from '../store';

class Products extends Component {
  constructor(props) {
    super(props);
    //this.onClick = this.onClick.bind(this);
  }

  render () {
    const {order, category,search} = this.props;
    var products = !category ? this.props.products : this.props.products.filter(product => product.category === cateogory)
    products = products.filter(product => product.name.match(search.searchInp));
    return (

      <div id="products-wrapper">
        <div className="row">
          {products && products.map(product => (
            <div className="col-xs-4" key={product.id}>
              <div className="thumbnail">
               { product.photos[0] && <img src={product.photos[0].imgURL} />}
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
                <button onClick={() => this.props.addItemToCart(event, order, product)}>Add item to cart.</button>
              </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
}

  /*onClick(order, productId) {
    event.preventDefault();
    this.props.addItemToCart(order, productId)
  }
}*/

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
    addItemToCart(event, order, product) {
      dispatch(createOrderProductInstance(order, product))
    }
  }
}

export default connect(mapState, mapDispatch)(Products);




//
