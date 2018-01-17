import axios from 'axios';
import Promise from 'bluebird';

// action types
const GET_ADMIN_DATA = 'GET_ADMIN_DATA'

// initial state
const defaultAdminData = {orders: [], users: [], products: [], categories: []};

// action creators
export const getAdminData = (orders, users, products, categories) => ({type: GET_ADMIN_DATA, orders, users, products, categories })

// thunk creators
//fetchadminorders: gets all orders from the database axios.get(/orders). then()getAdminData(orders). then(axios.get)
// get all orders, once res comes nack from backend, assign var let orders = res.data
// get all users, once res comes ack, assign var let users = res.data
// dispatch getAdminData thunk (orders, users)

export function fetchAdminData(){
  return function (dispatch) {
    let pro1 = axios.get('/api/orders');
    let pro2 = axios.get('/api/users');
    let pro3 = axios.get('/api/products');
    let pro4 = axios.get('/api/categories');
    Promise.all([pro1, pro2, pro3, pro4])
      .spread((orders, users, products, categories ) => {
        dispatch(getAdminData(orders.data, users.data, products.data, categories.data))
      })
    }
}


// reducer
export default function( state = defaultAdminData, action) {
  switch (action.type) {
    case GET_ADMIN_DATA:
      return {orders: action.orders, users: action.users, products: action.products, categories: action.categories}
    default:
      return state
  }
}
