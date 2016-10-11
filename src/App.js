import React from 'react'
import { connect } from 'react-redux'

import Homepage from './components/Homepage/Homepage'
import { getCredentials } from './state/selectors'

import './App.css'

const App = props => {
  return <div className='main-container'>
  <Homepage />
    {props.children}
  </div>
}

const mapStateToProps = state => getCredentials(state)

export default connect(mapStateToProps)(App)
