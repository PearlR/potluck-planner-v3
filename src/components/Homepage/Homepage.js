import React from 'react'
import { connect } from 'react-redux'

import Welcome from '../Welcome/Welcome'
import LoginSignInButtons from '../Login-Signin-buttons/Login-Signin-buttons'
import username from '../../state/reducer'

const Homepage = ({ username }) => {
  return <div>
    <Welcome />
    <LoginSignInButtons />
  </div>
}

const mapStateToProps = state => {
  return {
    username: username
  }
}

export default connect(mapStateToProps)(Homepage)
