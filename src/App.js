import React from 'react'

import Homepage from './components/Homepage/Homepage'

import './App.css'

const App = props => {
  return <div>
    <Homepage />
    {props.children}
  </div>
}

export default App
