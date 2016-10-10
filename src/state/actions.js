import { TEST, UPDATE_FIELD } from './constants'

export const updateField = ( name, value ) => ({ 
  type: UPDATE_FIELD, 
  payload: { name, value } 
})

export const test = ( name, value ) => ({ type: TEST })
