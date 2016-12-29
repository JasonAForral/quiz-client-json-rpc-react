import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import App from './containers/App'
import CreateAccount from './containers/CreateAccount'
import Login from './containers/Login'
import Profile from './containers/Profile'

import reducer from './reducers'

import './index.css';

const middleware = [ thunk ]
if ('production' !== process.env.NODE_ENV) {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="login" component={Login}/>
      <Route path="profile" component={Profile}/>
      <Route path="create-account" component={CreateAccount}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
