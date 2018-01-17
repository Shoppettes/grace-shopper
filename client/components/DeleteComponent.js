import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteAdminData} from '../store';
import {Redirect, Link} from 'react-router-dom';

class DeleteComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {keys, type, submitHandler, redirect, item} = this.props
    console.log('aaaaa', keys, type, item)
    return (
      <div>
        {redirect &&
        <Redirect to="/admin-panel" />
      }
      <h1> {type}</h1>
            {keys.map(key => (
            <div>
              <span> {key}: {item[key]} </span>
            </div>
          )
          )}
          <h4>
           <button type="submit" className="btn btn-primary"  onClick={(event) => this.props.clickHandler(event,keys, type, item)} >
             <span className="glyphicon glyphicon-plus"></span> delete
           </button>
        </h4>
          </div>
         )

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
    clickHandler(event, keys, type, item) {

      event.preventDefault();
      console.log('aaaa')
      dispatch(deleteAdminData(type, item ))

    }
  }
};

export default connect(mapState, mapDispatch)(DeleteComponent);

// searchForProduct(event, products) {
//   event.preventDefault();
//   const filteredProducts = products.filter(product => product.name.match(event.target.getProduct.value));
//   if (filteredProducts) {
//     console.log(filteredProducts)
//     return dispatch(setSearch(true, event.target.getProduct.value))}
// }
