import { combineReducers } from 'redux';
import risk from './risk';
import daysInside from './daysInside'
import people from './people'
import money from './money'
import daysOnVault from './daysOnVault'
import result from './result'

export default combineReducers({ risk, daysInside, people, money, daysOnVault, result });