import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { updateField } from '../../state/actions'
import { eventDetails } from '../../state/selectors'

const DetailsEvent = ({ date, time, location, description, inviteGuests, handleChange }) => {

  return <div>
    <h1>Important Details</h1>
    <p>Date</p>
      <input type='text' name='date' value={date} onChange={handleChange} />
    <p>Time</p>
      <input type='text' name='time' value={time} onChange={handleChange} />
    <p>Location</p>
      <input type='text' name='location' value={location} onChange={handleChange} />
    <p>Description</p>
      <textarea type='text' name='description' value={description} onChange={handleChange} />
    <br />
    <p>{inviteGuests}</p>
    <button><Link to='/invites'>Next</Link></button>
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
