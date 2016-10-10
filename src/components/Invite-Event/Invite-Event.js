import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { updateField } from '../../state/actions'
import { eventInvites } from '../../state/selectors'

const InviteEvent = ({ inviteeName, inviteeEmail, handleChange }) => {
  return <div>
    <h1>Who's invited?</h1>
    <p>Name</p>
      <input type='text' name='inviteeName' value={inviteeName} onChange={handleChange} /> 
    <p>Email</p>
      <input type='text' name='inviteeEmail' value={inviteeEmail} onChange={handleChange} />
    <button><Link to='menu'>Next</Link></button>
  </div>
}

const mapStateToProps = state => eventInvites(state)

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      const { name, value } = event.currentTarget
      dispatch(updateField(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteEvent)
