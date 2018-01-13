import axios from 'axios'
import history from '../history'

// action types
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'

// initial state
const defaultUser = {}

// action creator
 export const setCurrentUser = currentUser => ({type: SET_CURRENT_USER, currentUser});
 export const clearCurrentUser = () => ({type: CLEAR_CURRENT_USER})

// thunk creator
export const fetchCurrentUser = () => dispatch =>
  axios.get('/auth/local/me')
    .then(res => dispatch(setCurrentUser(res.data || defaultUser)))
    .catch(err => console.error('Fetching the current user failed', err))

export const signup = credentials => dispatch => // credentials is {email, password}
  axios.post('auth/local/signup', credentials)
    .then(res => dispatch(setCurrentUser(res.data)))
    .catch(err => console.error(`Signing up with ${credentials.email} and ${credentials.password} was unsuccessful.`))

export const login = credentials => dispatch => // credentials is {email, password}
  axios.post('/auth/local/login', credentials)
    .then(res => {
      dispatch(setCurrentUser(res.data))
    })
    .catch(err => console.error(`Logging in with ${credentials.email} and ${credentials.password} was unsuccessful.`))

export const logout = () => dispatch =>
  axios.post('/auth/local/logout')
    .then(() => {
      dispatch(clearCurrentUser())
      history.push('/')
    })
    .catch(err => console.error('Logging out was unsuccessful', err))

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.currentUser
    case CLEAR_CURRENT_USER:
      return defaultUser
    default:
      return state
  }
}
