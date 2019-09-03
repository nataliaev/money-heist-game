import { ADD_MONEY } from '../actions'

export default function money (state = 0, action = {}) {
  switch(action.type) {
    case ADD_MONEY:
      return (state + action.payload);
    default:
      return state
  }
}