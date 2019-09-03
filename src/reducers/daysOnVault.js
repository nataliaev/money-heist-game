import { ADD_DAYONVAULT } from '../actions'

export default function daysInside (state = 0, action = {}) {
  switch(action.type) {
    case ADD_DAYONVAULT:
      return (state + action.payload);
    default:
      return state
  }
}