import React from 'react'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { updateField } from '../../state/actions'
import { getCredentials } from '../../state/selectors'

const LoginSignInButtons = () => {
  return <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">PP</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to='#'>
            <NavItem>
              Sign Up
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/login'>
            <NavItem>
              Log In
            </NavItem>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar.Header>
    </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignInButtons)