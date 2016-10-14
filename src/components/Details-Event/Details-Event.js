import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

import { updateField } from '../../state/actions'
import { eventDetails } from '../../state/selectors'

const DetailsEvent = ({ inviteGuests, handleChange }) => {

  return <div>
    <h1>Important Details</h1>
    <FormGroup>
      <FormControl type='text' name='date' placeholder='date' onChange={handleChange} />
      <FormControl type='text' name='time' placeholder='time' onChange={handleChange} />
      <FormControl type='text' name='location' placeholder='location' onChange={handleChange} />
      <FormControl componentClass="textarea" name='description' placeholder='description' onChange={handleChange} />
      <ButtonGroup>
        <Button><Link to='/invites'>Next</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

const mapStateToProps = state => eventDetails(state)

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      const { name, value } = event.currentTarget
      dispatch(updateField(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsEvent)
