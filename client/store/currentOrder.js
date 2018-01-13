import axios from 'axios'
//import { currentId } from 'async_hooks';

// action types
const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER'
const CLEAR_CURRENT_ORDER = 'CLEAR_CURRENT_ORDER'

// initial state
const defaultOrder = {}

// action creators
 export const setCurrentOrder = currentOrder => ({type: SET_CURRENT_ORDER, currentOrder});
 export const clearCurrentOrder = () => ({type: CLEAR_CURRENT_ORDER});

// thunk creators
export const createdOrderOnDb = currentUser => dispatch => //sets Order to defaultOrder after creation
 axios.post('api/orders', {userId: currentUser.id})
  .then(res => dispatch(setCurrentOrder(res.data)))
  .catch(err => console.log(err))

//  export const getCurrentOrder = order => dispatch =>
//   axios.get(`api/orders/${order.id}`)
//     .then(res => dispatch(setCurrentOrder(res.data)))
//     .catch(err => console.log(err))

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
