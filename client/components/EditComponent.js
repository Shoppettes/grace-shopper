import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editAdminData, getAllProducts} from '../store';
import {Redirect} from 'react-router-dom';

class EditComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {keys, type, submitHandler, redirect, item, changeHandler, products} = this.props
    console.log('aaaaa', keys, type, item)
    return (
      <div>
        {redirect &&
        <Redirect to="/admin-panel" />
      }
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={(event) => submitHandler(event, type, item, products)}>
            {keys.map(key => (
              <div className="form-group">
              <label>{key}</label>
              <input
                name={key}
                className="form-control"
                placeholder={item[key]}
                onChange={(event) => changeHandler(event, key, item)}
              />
            </div>
            ))
            }
            <button type="submit" className="btn btn-block btn-primary">Edit</button>
          </form>
        </div>
      </div>
      </div>
    );
  }


}

const mapState = state => {
  return {
    keys: state.adminFields,
    type: state.adminItems.name,
    item: state.adminItem.item,
    redirect: state.adminItem.redirect,
    products: state.admin.products
  }
}


const mapDispatch = dispatch => {
  return {
    submitHandler(event, type, item, products) {
      event.preventDefault();
      if (type === 'products') {dispatch(getAllProducts(products))}
      dispatch(editAdminData(type, item ))
    },
    changeHandler(event, key, item) {
      event.preventDefault();
      item[key] = event.target.value;
    }
  }
};

export default connect(mapState, mapDispatch)(EditComponent);

// searchForProduct(event, products) {
//   event.preventDefault();
//   const filteredProducts = products.filter(product => product.name.match(event.target.getProduct.value));
//   if (filteredProducts) {
//     console.log(filteredProducts)
//     return dispatch(setSearch(true, event.target.getProduct.value))}
// }
