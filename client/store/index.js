import {createStore, combineReducers, applyMiddleware} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import products from './products'
import user from './user'
import chosenProduct from './chosenProduct'

export const reducer = combineReducers({products, chosenProduct, user, currentOrder})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware, loggingMiddleware
))
const store = createStore(reducer, middleware)

export default store
export * from './products'
export * from './chosenProduct'
export * from './user'
export * from './currentOrder'
