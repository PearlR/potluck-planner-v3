import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { TEST } from '../../state/reducer'

const LoginSignInButtons = ({ headerTwo, handleSelect }) => {
  return <div>
    <h2>{headerTwo}</h2>
    <button onClick={handleSelect}>Sign Up</button>
    <button><Link to='/login'>Log In</Link></button>
  </div>
}

const mapStateToProps = ({ headerTwo, handleSelect }) => {
  return {
    headerTwo: headerTwo,
    handleSelect: handleSelect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSelect: event => {
      dispatch({ type: TEST })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignInButtons)