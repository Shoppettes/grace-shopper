import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getChosenProductFromDb } from '../store'


const singleProduct = (props) => {
  let { chosenProduct, setProduct} = props;
  setProduct(props.match.params.id);
  return (
    <div>
      <span>Product Name</span>
      <div className="col-xs-4" key={props.id}>
            <a className="thumbnail" href="#">
              <img src= "" />
              <div className="caption">
                <h5>
                  <span>product.name</span>
                </h5>
              </div>
            </a>
          </div>
    </div>
  )
};

const mapState = ({chosenProduct}) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {
    setProduct(productId) {
      dispatch(getChosenProductFromDb(productId))
    }
  }
};

export default connect(mapState, mapDispatch)(singleProduct);


