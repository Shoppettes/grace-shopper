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
const defaultProducts = []
 /**
 * ACTION CREATORS
 */
export const getAllProducts = (products) => ({type: GET_ALL_PRODUCTS, products})

 /**
 * THUNK CREATORS
 */
export const fetchAllProducts = () =>
  dispatch => axios.get('/api/products')
    .then(res => dispatch(getAllProducts(res.data)))
    .catch(err => console.log(err))
 /**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}
