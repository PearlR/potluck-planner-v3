import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, ButtonGroup, FormControl, FormGroup } from 'react-bootstrap'

import { updateField } from '../../state/actions'
import { getCredentials } from '../../state/selectors'

const Login = ({ username, password, handleChange }) => {
  return <div>
  <FormGroup>
      <FormControl type='text' name='username' placeholder={username} onChange={handleChange} />
      <FormControl type='text' name='password' placeholder={password} onChange={handleChange} /><br />
      <Button><Link to='success'>Login</Link></Button>
    </FormGroup>
    <ButtonGroup>
    </ButtonGroup>
  </div>
}

const mapStateToProps = state => getCredentials(state)

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      const { name, value } = event.currentTarget
      dispatch(updateField(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
