import { EDIT_RISK, SET_RISK } from '../actions'

export default function risk (state = 40, action = {}) {
  switch(action.type) {
    case EDIT_RISK:
      return (state + action.payload);
    case SET_RISK:
      return action.payload;
    default:
      return state
  }
}
