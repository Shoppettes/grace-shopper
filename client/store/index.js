import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'

import chosenProduct from './chosenProduct'

export const reducer = combineReducers({user, products, chosenProduct})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware, loggingMiddleware
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './chosenProduct'
