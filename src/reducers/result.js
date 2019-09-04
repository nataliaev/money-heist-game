import { SET_RESULT } from '../actions'

export default function result (state = true, action = {}) {
  switch(action.type) {
    case SET_RESULT:
      return action.payload;
    default:
      return state
  }
}