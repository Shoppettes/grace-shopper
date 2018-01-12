import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
 export const setCurrentUser = currentUser => ({type: SET_CURRENT_USER, currentUser});
 export const clearCurrentUser = () => ({type: CLEAR_CURRENT_USER})

/**
 * THUNK CREATORS
 */
export const fetchCurrentUser = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({error: authError}))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.currentUser
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
