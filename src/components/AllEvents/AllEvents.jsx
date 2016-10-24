import React from 'react'
import { connect } from 'react-redux'

import { allEvents } from '../../state/selectors'

const AllEvents = props => {
  const { 
    eventTitle, 
    date, 
    time, 
    location,
    dishName, 
    userOfDish
  } = props

  return <div>
    <h1>{eventTitle}</h1>
    <p>{time} on {date}</p>
    <p>{location}</p>
    <p>{userOfDish} you're bringing {dishName}</p>
  </div>
}

const mapStateToProps = state => allEvents(state)

export default connect(mapStateToProps)(AllEvents)
