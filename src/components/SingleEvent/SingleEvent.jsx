import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, ButtonGroup, FormGroup } from 'react-bootstrap'

import { singleEvent } from '../../state/selectors'

const SingleEvent = props => {
  const { 
    eventTitle, 
    date, 
    time, 
    location, 
    description, 
    category, 
    dishName, 
    userOfDish, 
    inviteeName 
  } = props

  return <div>
    <h1>{eventTitle}</h1>
    <p>{time} on {date}</p>
    <p>{location}</p>
    <h2>Description</h2>
    <p>{description}</p>
    <h2>Menu</h2>
    <table>
      <tr>  
        <th>Course</th> 
        <th>Dish</th>
        <th>Assigned to</th>
      </tr>
      <tr>  
        <td>{category}</td> 
        <td>{dishName}</td>
        <td>{userOfDish}</td>
      </tr>
    </table>
    <h2>Guests</h2>
    <p>{inviteeName}</p>
    <FormGroup>
      <ButtonGroup>
        <Button><Link to='all-events'>All Events</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

const mapStateToProps = state => singleEvent(state)

export default connect(mapStateToProps)(SingleEvent)
