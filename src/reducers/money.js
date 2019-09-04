import { ADD_MONEY, DELETE_MONEY } from '../actions'

export default function money (state = 0, action = {}) {
  switch(action.type) {
    case ADD_MONEY:
      return (state + action.payload);
    case DELETE_MONEY:
      return action.payload;
    default:
      return state
  }
}