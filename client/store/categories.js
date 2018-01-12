import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'
/**
 * INITIAL STATE
 */
const defaultCategories = []
/**
 * ACTION CREATORS
 */
// export const setChosenProduct = chosenProduct => ({type: SET_CHOSEN_PRODUCT, chosenProduct})
export const getAllCategories = categories => ({type: GET_CATEGORIES, categories })
/**
 * THUNK CREATORS
 */

export const getAllCategoriesFromDb = () => dispatch => axios.get('/api/categories')
    .then( res => dispatch(getAllCategories(res.data)))
    .catch (err => console.log(err))

/**
 * REDUCER
 */

export default function( state = defaultCategories, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}
