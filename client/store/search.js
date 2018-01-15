import axios from 'axios';

/**
 * ACTION TYPES
 */
const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'
 /**
 * INITIAL STATE
 */
const defaultInput = ''
 /**
 * ACTION CREATORS
 */
export const setSearchInput = input => ({type: SET_SEARCH_INPUT, input})

 /**
 * THUNK CREATORS
 */


 /**
 * REDUCER
 */
export default function (state = defaultInput, action){
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return action.input
    default:
      return state
  }
}
