import { UPDATE_FIELD } from './constants'

export const DEFAULT_STATE = { 
  headerTwo: 'Header Two Initial', 
  username: 'username',
  password: 'password',
  eventTitle: 'Name your potluck here...',
  inviteGuests: 'Guests can invite friends?',
  date: '',
  time: '',
  location: '',
  description: '',
  inviteeName: '',
  inviteeEmail: '',
  category: '',
  dishName: '',
  userOfDish: ''
} 

export const reducer = (state = DEFAULT_STATE, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_FIELD: 
      return {
        ...state,
        [payload.name]: payload.value
      }

  default:
    return state
  }
} 
