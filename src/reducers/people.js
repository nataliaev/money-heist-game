import { EDIT_PEOPLE, SET_PEOPLE } from '../actions'

export default function people (state = [{name : "Racer", url: "/images/racer.jpg"}, {name: "Hacker", url: "/images/hacker.jpg"}, {name: "Demolition", url: "/images/demolition.jpg"}, {name: "Strongman", url: "/images/strongman.jpg"}, {name: "Counterfeiter", url: "/images/counterfeiter.jpg"}, {name: "Negotiator", url: "/images/negotiator.jpg"}], action = {}) {
  switch(action.type) {
    case EDIT_PEOPLE:
      return state.filter(role => role !== action.payload);
    case SET_PEOPLE:
      return action.payload;
    default:
      return state
  }
}