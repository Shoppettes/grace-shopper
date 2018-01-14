import axios from 'axios'

// action types
const GET_CATEGORIES = 'GET_CATEGORIES'

// initial state
const defaultCategories = []

// action creators
export const getAllCategories = categories => ({type: GET_CATEGORIES, categories })

// thunk creators
export const fetchAllCategories = () => dispatch =>
  axios.get('/api/categories')
    .then( res => dispatch(getAllCategories(res.data)))
    .catch (err => console.log(err));

// reducer
export default function( state = defaultCategories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
