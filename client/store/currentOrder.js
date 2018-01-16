import axios from 'axios'
//import { currentId } from 'async_hooks';

// action types
const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
const CLEAR_CURRENT_ORDER = 'CLEAR_CURRENT_ORDER';

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

export function submitOrder(orderInfo) { //this action also needs to update the order.status to 'awaiting shipment'
  return function(dispatch) {
    axios.put(`/api/orders/${orderInfo.id}`, {orderInfo})
    .then(() => {
      axios.delete(`/api/orders/${orderInfo.id}`)
    })
    // .then(() => history.push('/checkout-confirm')) /**this component is not yet defined */
    .then(dispatch(clearCurrentOrder()))
    .catch(err => console.log(err))
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

/**
 * export const submitCart = orderInfo => (dispatch, getState) =>
  axios
    .post('/api/orders', orderInfo)
    .then(res => {
      dispatch(getCartOrder(res.data))
      return res.data
    })
    .then(order => history.push(`/checkout-confirm/${order.id}`))
    .then(axios.delete('/api/cart'))
    .then(dispatch(resetCart()))
    .catch(err => console.log(err))
 

export default function(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return Object.assign({}, state, { cart: action.cart })
    case RESET_CART:
      return Object.assign({}, defaultCart)
    case GET_CART_ORDER:
      return Object.assign({}, defaultCart, { lastOrder: action.lastOrder })
    case UPDATE_USER_INFO:
      return Object.assign({}, state, action.userInfo)
    case UPDATE_ORDER_TOTAL:
      return Object.assign({}, state, { orderTotal: action.orderTotal })
    default:
      return state
  }
}

*/