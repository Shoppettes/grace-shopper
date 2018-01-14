import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultChosenProduct = {}

/**
 * ACTION CREATORS
 */
export const setChosenProduct = chosenProduct => ({type: SET_CHOSEN_PRODUCT, chosenProduct})

/**
 * THUNK CREATORS
 */
export const getChosenProductFromDb = () => dispatch => axios.get('api/products/1')
  .then( res => {console.dir(res.data)
  return dispatch(setChosenProduct(res.data))})
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
