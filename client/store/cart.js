[]
import axios from 'axios'

/**
* ACTION TYPES
*/
const ADD_ORDER_PRODUCT_TO_CART = 'ADD_ORDER_PRODUCT_TO_CART'

/**
* INITIAL STATE
*/
const defaultCart = []

/**
* ACTION CREATORS
*/
export const addOrderProductToCart = orderProuct => ({type: ADD_ORDER_PRODUCT_TO_CART, orderProuct})

/**
* THUNK CREATORS
*/
export const createOrderProductInstance = orderProductBody => dispatch => axios.post(`api/orderProducts`)
 .then( res => dispatch(setChosenProduct(res.data)))
 .catch( err => console.log(err))

/**
* REDUCER
*/
export default function (state = defaultChosenProduct, action) {
 switch (action.type) {
   case SET_CHOSEN_PRODUCT:
     return action.chosenProduct
   default:
     return state
 }
}
