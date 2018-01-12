import {createStore, combineReducers, applyMiddleware} from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import user from './user';

const reducer = combineReducers({auth, user})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware, loggingMiddleware
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
