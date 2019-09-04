import { ADD_DAYONVAULT, SET_DAYONVAULT } from '../actions'

export default function daysOnVault (state = 0, action = {}) {
  switch(action.type) {
    case ADD_DAYONVAULT:
      return (state + action.payload);
    case SET_DAYONVAULT:
      return action.payload
    default:
      return state
  }
}