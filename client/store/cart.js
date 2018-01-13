import axios from 'axios'

/**
* ACTION TYPES
*/
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

/**
* INITIAL STATE
*/
const defaultCart = []

/**
* ACTION CREATORS
*/
export const addProductToCart = cartProduct => ({type: ADD_PRODUCT_TO_CART, cartProduct})

/**
* THUNK CREATORS
*/
export const createOrderProductInstance = orderProductBody => dispatch => axios.post(`api/orderProducts`, orderProductBody)
 .then( res => dispatch(addProductToCart(res.data)))
 .catch( err => console.log(err))

/**
* REDUCER
*/
export default function (state = defaultCart, action) {
 switch (action.type) {
   case ADD_PRODUCT_TO_CART:
     return [...state, action.cartProduct]
   default:
     return state
 }
}
