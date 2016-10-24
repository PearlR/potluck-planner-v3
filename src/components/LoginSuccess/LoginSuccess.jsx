import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { loginSuccess } from '../../state/selectors'

const LoginSuccess = props => {
  const { 
    username 
  } = props

  return <div>
    <p>logged in as {username}</p>
    <h1>You have no current potlucks.</h1>
    <Button><Link to='create-event'>Create New Potluck</Link></Button>
  </div>
}

const mapStateToProps = state => loginSuccess(state)

export default connect(mapStateToProps)(LoginSuccess)
