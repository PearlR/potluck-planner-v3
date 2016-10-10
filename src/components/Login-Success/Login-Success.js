import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const LoginSuccess = ({ username }) => {
  return <div>
    <p>logged in as {username}</p>
    <h1>You have no current potlucks.</h1>
    <button><Link to='create-event'>Create New Potluck</Link></button>
  </div>
}

const mapStateToProps = ({ username }) => {
  return {
    username: username
  }
}

export default connect(mapStateToProps)(LoginSuccess)
