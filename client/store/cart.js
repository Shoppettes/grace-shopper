import axios from 'axios'

/**
* ACTION TYPES
*/
const SET_CART = 'SET_CART'
const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT'

/**
* INITIAL STATE
*/
const defaultCart = []

/**
* ACTION CREATORS
*/
export const setCart = cart => ({type: SET_CART, cart}) //will recieve array of products from order, aka the 'cart'
export const updateProductAmount = cartProduct => ({type: UPDATE_PRODUCT_AMOUNT, cartProduct})

/**
* THUNK CREATORS
*/
export const createOrderProductInstance = orderProductBody => dispatch =>
  axios.post(`api/orderProducts`, orderProductBody)
    .then( res => dispatch(setCart(res.data)))
    .catch( err => console.log(err))

 export const updateCartProduct = (orderId, productId, actionToTake) => dispatch =>
  axios.put(`api/orderProducts/${orderId}/${productId}?${actionToTake}`)
    .then( res => dispatch(updateProductAmount(res.data)))
    .catch(err => console.log(err))


/**
* REDUCER
*/
export default function (state = defaultCart, action) {
 switch (action.type) {
   case SET_CART:
     return action.cart
   case UPDATE_PRODUCT_AMOUNT:
     return state.map( product => {
       if ( product.id === action.cartProduct.id) return action.cartProduct
       else return product
     })
   default:
     return state
 }
}
