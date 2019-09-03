import { EDIT_PEOPLE } from '../actions'

export default function daysInside (state = [1, 2, 3, 4, 5, 6], action = {}) {
  switch(action.type) {
    case EDIT_PEOPLE:
      return state.filter(role => role !== action.payload);
    default:
      return state
  }
}