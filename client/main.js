import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import {StripeProvider} from 'react-stripe-elements'
import Root from './components/Root.jsx'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_12345">
      <Root />
    </StripeProvider>
  </Provider>,
  document.getElementById('app')
)
