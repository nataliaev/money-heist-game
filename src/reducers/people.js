import { EDIT_PEOPLE, SET_PEOPLE } from '../actions'

export default function people (state = ["Racer", "Hacker", "Demolition", "Strongman", "Counterfeiter", "Negotiator"], action = {}) {
  switch(action.type) {
    case EDIT_PEOPLE:
      return state.filter(role => role !== action.payload);
    case SET_PEOPLE:
      return action.payload;
    default:
      return state
  }
}