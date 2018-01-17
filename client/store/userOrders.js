import axios from 'axios'

// action types
const SET_USER_ORDERS = 'SET_USER_ORDERS';

// initial state
const userOrders = []

// action creators
export const setUserOrders = userOrders => ({type: SET_USER_PRODUCTS, userOrders});

// thunk creators
export const fetchUserOrders = (userId) => dispatch =>
  axios.get('/api/users/:userId')
    .then(res => dispatch(setUserProducts(res.data.orders)))
    .catch(err => console.error('Fetching the current users order failed', err))

// reducer
export default function (state = userOrders, action) {
  switch (action.type) {
    case SET_USER_ORDERS:
      return action.userOrders
    default:
      return state
  }
}
