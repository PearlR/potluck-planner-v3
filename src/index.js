import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import Homepage from './components/Homepage/Homepage.jsx'
import Login from './components/Login/Login.jsx'
import LoginSuccess from './components/LoginSuccess/LoginSuccess.jsx'
import CreateEvent from './components/CreateEvent/CreateEvent.jsx'
import DetailsEvent from './components/DetailsEvent/DetailsEvent.jsx'
import InviteEvent from './components/InviteEvent/InviteEvent.jsx'
import MenuEvent from './components/MenuEvent/MenuEvent.jsx'
import SingleEvent from './components/SingleEvent/SingleEvent.jsx'
import AllEvents from './components/AllEvents/AllEvents.jsx'

import { reducer } from './state/reducer.js'

import './index.css'

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='home/' component={Homepage} />
        <Route path='login' component={Login} />
        <Route path='success' component={LoginSuccess} />
        <Route path='create-event' component={CreateEvent} />
        <Route path='details' component={DetailsEvent} />
        <Route path='invites' component={InviteEvent} />
        <Route path='menu' component={MenuEvent} />
        <Route path='single-event' component={SingleEvent} />
        <Route path='all-events' component={AllEvents} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
