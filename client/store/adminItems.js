// action types
const SET_ADMIN_ITEM = 'SET_ADMIN_ITEM'
// initial state
const adminItems = [];

// action creators
export const setAdminItems = (items) => ({type: SET_ADMIN_ITEM, items })

// reducer
export default function( state = adminItems, action) {
  switch (action.type) {
    case SET_ADMIN_ITEM:
      return action.items;
    default:
      return state
  }
}
