import { TEST, UPDATE_FIELD, LOGGING } from './constants'

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

const toggle = (current, opt1, opt2) => {
  return current === opt1 ? opt2 : opt1
}

const logged = username => {
  return username !== 'username' || '' ? true : false
}

export const reducer = (state = DEFAULT_STATE, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_FIELD: 
      return {
        ...state,
        [payload.name]: payload.value
      }
    case TEST: 
      return {
        ...state,
        headerTwo: toggle(state.headerTwo, 'Header Two Changed', 'Header Two Changed Back')
      }
    case LOGGING: 
      return {
        ...state,
        username: logged(payload.username)
      }
  default:
    return state
  }
} 
