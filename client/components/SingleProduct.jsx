import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getChosenProductFromDb} from '../store'


class SingleProduct extends Component {
  componentDidMount () {
    this.props.loadChosenProduct(this.props.match.params.productId);
  }

  render () {
    const {product} = this.props;
    return (
      <div>
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
            </div>
      </div>
    )
  }
};

const mapState = (state) => {
  return {
    product: state.chosenProduct
  }
};

const mapDispatch = (dispatch) => {
  return {
    loadChosenProduct(productId) {
      dispatch(getChosenProductFromDb(productId))
    }
  }
};

export default connect(mapState, mapDispatch)(SingleProduct);
