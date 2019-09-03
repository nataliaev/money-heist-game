import { EDIT_RISK } from '../actions'

export default function risk (state = 50, action = {}) {
  switch(action.type) {
    case EDIT_RISK:
      return (state + action.payload);
    default:
      return state
  }
}
