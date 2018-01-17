import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addAdminData} from '../store';
import {Redirect} from 'react-router-dom';

class AddComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {keys, type, submitHandler, redirect} = this.props
    keys = keys.filter(key => key!=='id')
    console.log('aaaaa', keys, type)
    return (
      <div>
        {redirect &&
        <Redirect to="/admin-panel" />
      }
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={(event) => submitHandler(event, keys, type, redirect)}>
            {keys.map(key => (
              <div className="form-group">
              <label>{key}</label>
              <input
                name={key}
                className="form-control"
              />
            </div>
            ))
            }
            <button type="submit" className="btn btn-block btn-primary">Add</button>
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
    redirect: state.adminItem.redirect
  }
}


const mapDispatch = dispatch => {
  return {
    submitHandler(event, keys, type) {
      event.preventDefault();
      let inputValue = {};
      keys.forEach(key => inputValue[key] = event.target[key].value)
      console.log(type, inputValue);
      dispatch(addAdminData(type, inputValue ))

    }
  }
};

export default connect(mapState, mapDispatch)(AddComponent);

// searchForProduct(event, products) {
//   event.preventDefault();
//   const filteredProducts = products.filter(product => product.name.match(event.target.getProduct.value));
//   if (filteredProducts) {
//     console.log(filteredProducts)
//     return dispatch(setSearch(true, event.target.getProduct.value))}
// }
