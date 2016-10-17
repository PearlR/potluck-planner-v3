import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import LoginSuccess from './components/Login-Success/Login-Success'
import CreateEvent from './components/Create-Event/Create-Event'
import DetailsEvent from './components/Details-Event/Details-Event'
import InviteEvent from './components/Invite-Event/Invite-Event'
import MenuEvent from './components/Menu-Event/Menu-Event'
import SingleEvent from './components/Single-Event/Single-Event'
import AllEvents from './components/All-Events/All-Events'

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
