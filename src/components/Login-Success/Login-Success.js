import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const LoginSuccess = ({ username }) => {
  return <div>
    <p>logged in as {username}</p>
    <h1>You have no current potlucks.</h1>
    <Button><Link to='create-event'>Create New Potluck</Link></Button>
  </div>
}

const mapStateToProps = ({ username }) => {
  return {
    username: username
  }
}

export default connect(mapStateToProps)(LoginSuccess)
