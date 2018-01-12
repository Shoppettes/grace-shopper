import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT'
const DELETE_CHOSEN_PRODUCT = 'DELETE_CHOSEN_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultChosenProduct = {}

/**
 * ACTION CREATORS
 */
export const setChosenProduct = chosenProduct => ({type: SET_CHOSEN_PRODUCT, chosenProduct})
export const deleteChosenProduct = chosenProduct => ({type: DELETE_CHOSEN_PRODUCT, chosenProduct})

/**
 * THUNK CREATORS
 */
export const deleteChosenProductFromDb = chosenProduct => dispatch => axios.delete(`api/products/${chosenProduct.id}`)
  .then( res => dispatch(deleteChosenProduct(chosenProduct)))
  .catch( err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultChosenProduct, action) {
  switch (action.type) {
    case SET_CHOSEN_PRODUCT:
      return action.chosenProduct
    case DELETE_CHOSEN_PRODUCT:
      return action.chosenProduct
    default:
      return state
  }
}
