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
export function findOrCreateOrder (currentUser) {
  return function (dispatch) {
  axios.post('api/orders', {userId: currentUser.id})
    .then(res => dispatch(setCurrentOrder(res.data)))
    .catch(err => console.log(err))
  }
}

export function createOrderProductInstance (orderId, productId) {
  return function (dispatch) {
    axios.post('api/orderProducts', {orderId, productId})
      .then(res => dispatch(setCurrentOrder(res.data)));
      .catch(err => console.log(err));
  }
}


// import {createOrderProductInstance, updateOrderProductInstance} from '../store';

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
