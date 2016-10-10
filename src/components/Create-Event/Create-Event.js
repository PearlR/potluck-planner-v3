import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { updateField } from '../../state/actions'
import { eventTitles } from '../../state/selectors'

const CreateEvent = ({ eventTitle, handleChange }) => {
  return <div>
    <h1>Let's create a potluck!</h1>
    <input type='text' name='eventTitle' value={eventTitle} onChange={handleChange} />
    <button><Link to='/details'>Let's go!</Link></button>
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
