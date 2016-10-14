import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

import { updateField } from '../../state/actions'
import { eventTitles } from '../../state/selectors'

const CreateEvent = ({ eventTitle, handleChange }) => {
  return <div>
    <FormGroup>
      <h1>Let's create a potluck!</h1>
      <FormControl type='text' name='eventTitle' placeholder={eventTitle} onChange={handleChange} />
      <ButtonGroup>
        <Button><Link to='/details'>Let's go!</Link></Button>
      </ButtonGroup>  
    </FormGroup>
  </div>
}

const mapStateToProps = state => eventTitles(state)

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      const { name, value } = event.currentTarget
      dispatch(updateField(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)
