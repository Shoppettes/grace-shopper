import axios from 'axios';

/**
 * ACTION TYPES
 */
const SET_SEARCH = 'SET_SEARCH'
 /**
 * INITIAL STATE
 */
const defaultSearch = {redirect: false, searchInp: ''}

 /**
 * ACTION CREATORS
 */
export const setSearch = (redirect, searchInp) => ({type: SET_SEARCH, redirect,  searchInp})

 /**
 * THUNK CREATORS
 */


 /**
 * REDUCER
 */
export default function (state = defaultSearch, action){
  switch (action.type) {
    case SET_SEARCH:
      return {redirect: action.redirect,  searchInp: action.searchInp}
    default:
      return state
  }
}
