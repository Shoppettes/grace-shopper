import axios from 'axios'
import Promise from 'bluebird';
//import { currentId } from 'async_hooks';

// action types
const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
const CLEAR_CURRENT_ORDER = 'CLEAR_CURRENT_ORDER';
const UPDATE_CURRENT_ORDER = 'UPDATE_CURRENT_ORDER'

// initial state
const defaultOrder = {}

// action creators
export const setCurrentOrder = currentOrder => ({type: SET_CURRENT_ORDER, currentOrder});
export const clearCurrentOrder = () => ({type: CLEAR_CURRENT_ORDER});


// thunk creators
export const fetchCurrentOrder = () => dispatch =>
  axios.get('/api/orders/currentOrder')
    .then(res => dispatch(setCurrentOrder(res.data || defaultOrder)))
    .catch(err => console.error('Fetching the current order failed', err))

export function findOrCreateOrder (currentUser) {
  return function (dispatch) {
  axios.post('/api/orders', {userId: currentUser.id})
    .then(res => dispatch(setCurrentOrder(res.data)))
    .catch(err => console.log(err))
  }
}

export function createOrderProductInstance (orderId, productId) {
  return function (dispatch) {
    axios.post(`/api/orderProducts/${orderId}/${productId}`)
      .then(res => dispatch(setCurrentOrder(res.data)))
      .catch(err => console.log(err));
  }
}

export function updateOrderProductInstance (orderId, productId, quantity) {
  return function (dispatch) {
    axios.put(`/api/orderProducts/${orderId}/${productId}/${quantity}`)
      .then(res => dispatch(setCurrentOrder(res.data)))
      .catch(err => console.log(err))
  }
}

export function removeOrderProductInstance (orderId, productId) {
  return function (dispatch) {
    axios.delete(`/api/orderProducts/${orderId}/${productId}`)
      .then((res) => dispatch(setCurrentOrder(res.data)))
      .catch(err => console.log(err))
  }
}

// submitOrder({billingAddress: highor, shippingL adhi}, {email: hjjr, n})

export function submitOrder(userInfo, orderInfo) { //this action also needs to update the order.status to 'awaiting shipment'
return function(dispatch) {
  let updateOrder = axios.put(`/api/orders/${orderInfo.id}`, orderInfo)
  if (userInfo){
    let updateUser = axios.put(`/api/users/${userInfo.id}`, userInfo )
    Promise.all([updateOrder, updateUser])
    .spread((updatedUser, updatedOrder) => {
      console.log('order submission successful', updatedUser, updatedOrder)
    })
    .catch(err => console.log(err))
  }



  }
}

// reducer
export default function (state = defaultOrder, action) {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return action.currentOrder
    case CLEAR_CURRENT_ORDER:
      return {}
    default:
      return state
  }
}
