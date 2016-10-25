import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

import { updateField } from '../../state/actions'
import { eventMenu } from '../../state/selectors'

const MenuEvent = props => {
  const {
    handleChange 
  } = props
  
  return <div>
    <FormGroup>
      <h1>What is everyone eating?</h1>
        <FormControl type='text' name='category' placeholder='course' onChange={handleChange} /> 
        <FormControl type='text' name='dishName' placeholder='dish name' onChange={handleChange} /> 
        <FormControl type='text' name='userOfDish' placeholder='person assigned to dish' onChange={handleChange} />  
      <ButtonGroup>
        <Button><Link to='single-event'>Let's go!</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

const mapStateToProps = state => eventMenu(state)

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      const { name, value } = event.currentTarget
      dispatch(updateField(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuEvent)
