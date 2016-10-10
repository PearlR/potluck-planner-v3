import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { updateField } from '../../state/actions'
import { getCredentials } from '../../state/selectors'
import { LOGGING } from '../../state/constants'

const Login = ({ username, password, handleClick, handleChange }) => {
  return <div>
    <input type='text' name='username' value={username} onChange={handleChange} />
    <input type='text' name='password' value={password} onChange={handleChange} />
    <button><Link to='success' onClick={handleClick}>Login</Link></button>
  </div>
}

const mapStateToProps = state => getCredentials(state)

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      const { name, value } = event.currentTarget
      dispatch(updateField(name, value))
    },
    handleClick: event => {
      dispatch({ type: LOGGING, payload: { username: event.currentTarget.username } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
