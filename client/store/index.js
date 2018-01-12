import {createStore, combineReducers, applyMiddleware} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import products from './products'
import auth from './auth'
import chosenProduct from './chosenProduct'

export const reducer = combineReducers({ products, chosenProduct, auth})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware, loggingMiddleware
))
const store = createStore(reducer, middleware)

export default store
export * from './products'
export * from './chosenProduct'
export * from './auth'

