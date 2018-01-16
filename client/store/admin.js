import axios from 'axios'

// action types
const GET_ADMIN_DATA = 'GET_ADMIN_DATA'

// initial state
const defaultAdminData = {}

// action creators
export const getAdminData = (orders, users) => ({type: GET_ADMIN_DATA, orders, users })

// thunk creators


// reducer
export default function( state = defaultCategories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
