
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAdminData, setAdminItems} from '../store'

class AdminPanel extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    this.props.loadAdminData()
  }

  render () {
    let {products, categories, orders, users, adminItem, adminFields} = this.props;
    const adminData = [{name: 'products', items: products},
                       {name: 'categories', items: categories},
                       {name: 'orders', items: orders},
                       {name: 'users', items: users}];
     adminItem.redirect = false;
     adminFields = [];

    return (
      <div>
      {adminData.map(data => (
     <div>
        <Link to="/admin-view" onClick={() => this.props.clickHandler(event, data)}> View or edit {data.name} </Link>
     </div>
    ))}
    </div>
    )}
}

const mapState = (state) => {
  return {
    products: state.admin.products,
    categories: state.admin.categories,
    orders: state.admin.orders,
    users: state.admin.users,
    adminItem: state.adminItem,
    adminFields: state.adminFields
  }
}

const mapDispatch = dispatch => {
  return {
    loadAdminData () {
      dispatch(fetchAdminData())
    },
    clickHandler (event, items){
      event.preventDefault();
      dispatch(setAdminItems(items));
    }
  }
}
export default connect(mapState, mapDispatch)(AdminPanel)

