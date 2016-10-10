import React from 'react'
import { connect } from 'react-redux'

const SingleEvent = ({ eventTitle, date, time, location, description, category, dishName, userOfDish, inviteeName }) => {
  return <div>
    <h1>{eventTitle}</h1>
    <p>{time} on {date}</p>
    <p>{location}</p>
    <h2>Description</h2>
    <p>{description}</p>
    <h2>Menu</h2>
    <table>
      <tr>  
        <th>
          Category
        </th> 
        <th>
          Dish
        </th>
        <th> 
          Assigned to
        </th>
      </tr>
      <tr>  
        <td>
          {category}
        </td> 
        <td>
          {dishName}
        </td>
        <td> 
          {userOfDish}
        </td>
      </tr>
    </table>
    <h2>Guests</h2>
    <p>{inviteeName}</p>
  </div>
}

const mapStateToProps = ({ eventTitle, date, time, location, description, category, dishName, userOfDish, inviteeName }) => {
  return {
    eventTitle: eventTitle,
    date: date,
    time: time,
    location: location,
    description: description,
    category: category,
    dishName: dishName,
    userOfDish: userOfDish,
    inviteeName: inviteeName
  }
}

export default connect(mapStateToProps)(SingleEvent)