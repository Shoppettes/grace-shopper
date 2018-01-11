import axios from 'axios';

/**
 * GET_ALL_PRODUCTS, SET_CHOSEN_PRODUCT, GET_ALL_CATEGORIES, SET_CHOSEN_CATEGORY,
    GET_CART, ADD_TO_CART, DELETE_FROM_CART,  ADD_REVIEW, getAllProducts, setChosenProduct,
    addToCart
 */

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
 /**
 * INITIAL STATE
 */
const products = []
 /**
 * ACTION CREATORS
 */
const getAllProducts = (AllProducts) => ({
  type: GET_ALL_PRODUCTS,
  AllProducts
})


 /**
 * THUNK CREATORS
 */
export const getProductsFromDb = () =>
  dispatch => axios.get('/api/products')
    .then( allProducts => dispatch(getAllProducts(allProducts)))
    .catch(err => console.log(err))
 /**
 * REDUCER
 */
export default function (state = products, action){
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.AllProducts
    default:
      return state
  }
}
