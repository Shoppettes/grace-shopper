import axios from 'axios';
import Promise from 'bluebird';

// action types
const GET_ADMIN_DATA = 'GET_ADMIN_DATA'

// initial state
const defaultAdminData = {orders: [], users: []};

// action creators
export const getAdminData = (orders, users) => ({type: GET_ADMIN_DATA, orders, users })

// thunk creators
//fetchadminorders: gets all orders from the database axios.get(/orders). then()getAdminData(orders). then(axios.get)
// get all orders, once res comes nack from backend, assign var let orders = res.data
// get all users, once res comes ack, assign var let users = res.data
// dispatch getAdminData thunk (orders, users)

export function fetchAdminData(){
  return function (dispatch) {
    let pro1 = axios.get('/api/orders');
    let pro2 = axios.get('/api/users');
    Promise.all([pro1, pro2])
      .spread((orders, users) => {
        dispatch(getAdminData(orders.data, users.data))
      })
    }
}


// reducer
export default function( state = defaultAdminData, action) {
  switch (action.type) {
    case GET_ADMIN_DATA:
      return {orders: action.orders, users: action.users}
    default:
      return state
  }
}
