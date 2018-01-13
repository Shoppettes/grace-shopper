import axios from 'axios'

/**
* ACTION TYPES
*/
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT'

/**
* INITIAL STATE
*/
const defaultCart = []

/**
* ACTION CREATORS
*/
export const addProductToCart = cartProduct => ({type: ADD_PRODUCT_TO_CART, cartProduct})
export const updateProductAmount = cartProduct => ({type: UPDATE_PRODUCT_AMOUNT, cartProduct})

/**
* THUNK CREATORS
*/
export const createOrderProductInstance = orderProductBody => dispatch =>
  axios.post(`api/orderProducts`, orderProductBody)
    .then( res => dispatch(addProductToCart(res.data)))
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
   case ADD_PRODUCT_TO_CART:
     return [...state, action.cartProduct]
   case UPDATE_PRODUCT_AMOUNT:
     return state.map( product => {
       if ( product.productId === action.cartProduct.productId) return action.cartProduct
       else return product
     })
   default:
     return state
 }
}
