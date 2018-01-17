// action types
const SET_ADMIN_KEYS = 'SET_ADMIN_KEYS'

// initial state
const keys = [];

// action creators
export const setAdminKeys = (items) => ({type: SET_ADMIN_KEYS, items })


// reducer
export default function( state = keys, action) {
  switch (action.type) {
    case SET_ADMIN_KEYS:
      return action.items;
    default:
      return state
  }
}
