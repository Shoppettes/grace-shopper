// import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {fetchAdminData} from './store'

// class AdminPanel extends Component {
//   constructor () {
//     super ()
//   }

//   componentDidMount () {
//     fetchAdminData ()
//   }

//   render () {
//     const {products, categories, orders, users} = this.props;

//     return (

//     )
//   }
// }

// const mapState = (state) => {
//   return {
//     products: state.products,
//     categories: state.categories,
//     orders: state.admin.orders,
//     users: state.admin.users
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadAdminData () {
//       dispatch(fetchAdminData())
//     }
//   }
// }
// export default connect(mapState, mapDispatch)(Cart)
