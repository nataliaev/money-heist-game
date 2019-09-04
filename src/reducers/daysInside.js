import { ADD_DAYINSIDE, SET_DAYSINSIDE } from '../actions'

export default function daysInside (state = 1, action = {}) {
  switch(action.type) {
    case ADD_DAYINSIDE:
      return (state + action.payload);
    case SET_DAYSINSIDE:
      return action.payload;
    default:
      return state
  }
}