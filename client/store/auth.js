import axios from 'axios';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

const setCurrentUser = currentUser => ({type: SET_CURRENT_USER, currentUser});
const clearCurretUser = () => ({type: CLEAR_CURRENT_USER})

export default function reducer (currentUser = {}, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.currentUser;
    case CLEAR_CURRENT_USER:
      return {};
    default:
      return currentUser;
  }
}

export function login (credentials) {
  return function (dispatch) {
    axios.post('auth/local/login', credentials)
      .then(res => dispatch(setCurrentUser(res.data)))
      .catch(err => console.error(`Logging in with ${credentials.email} and ${credentials.password} was unsuccessful.`))
  }
}

export function signup (credentials) {
  return function (dispatch) {
    axios.post('auth/local/signup', credentials)
      .then(res => dispatch(setCurrentUser(res.data)))
      .catch(err => console.error(`Signing up with ${credentials.email} and ${credentials.password} was unsuccessful.`))
  }
}

export function logout () {
  return function (dispatch) {
    axios.delete('auth/local/logout')
      .then(() => dispatch(clearCurretUser()))
      .catch(err => console.error('Logging out was unsuccessful', err))
  }
}

export function fetchCurrentUser () {
  return function (dispatch) {
    axios.get('/auth/local/me')
      .then(res => dispatch(setCurrentUser(res.data)))
      .catch(err => console.error('Fetching the current user failed', err))
  }
}
