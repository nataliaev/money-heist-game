import { ADD_DAYINSIDE } from '../actions'

export default function daysInside (state = 0, action = {}) {
  switch(action.type) {
    case ADD_DAYINSIDE:
      return (state + action.payload);
    default:
      return state
  }
}