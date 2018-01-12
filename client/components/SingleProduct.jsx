import React from 'react';
import {connect} from 'react-redux';


const singleProduct = (props) => {
  let product = props.chosenProduct;
  return (
    <div>
      <span>Product Name</span>
      <div className="col-xs-4" key={props.id}>
            <a className="thumbnail" href="#">
              <img src= "https://vignette.wikia.nocookie.net/disney/images/1/1c/Dinosaur_Url-disneyscreencaps_com-7324.jpg/revision/latest/scale-to-width-down/516?cb=20110730154056" />
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

  }
};

export default connect(mapState, mapDispatch)(singleProduct);

