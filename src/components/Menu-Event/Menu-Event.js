import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { updateField } from '../../state/actions'
import { eventMenu } from '../../state/selectors'

const MenuEvent = ({ category, dishName, userOfDish, handleChange }) => {
  return <div>
    <h1>What is everyone eating?</h1>
    <p>Category</p>
      <input type='text' name='category' value={category} onChange={handleChange} /> 
    <p>Dish Name</p>
      <input type='text' name='dishName' value={dishName} onChange={handleChange} /> 
    <p>User</p>
      <input type='text' name='userOfDish' value={userOfDish} onChange={handleChange} /> 
    <button><Link to='single-event'>Let's go!</Link></button>
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
