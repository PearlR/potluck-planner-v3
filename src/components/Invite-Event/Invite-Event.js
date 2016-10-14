import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

import { updateField } from '../../state/actions'
import { eventInvites } from '../../state/selectors'

const InviteEvent = ({ inviteeName, inviteeEmail, handleChange }) => {
  return <div>
    <FormGroup>
      <h1>Who's invited?</h1>
        <FormControl type='text' name='inviteeName' placeholder='Name' onChange={handleChange} /> 
        <FormControl type='text' name='inviteeEmail' placeholder='Email' onChange={handleChange} />
      <ButtonGroup>
        <Button><Link to='menu'>Next</Link></Button>
      </ButtonGroup>
    </FormGroup>  
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
