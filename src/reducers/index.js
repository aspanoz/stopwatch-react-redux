import {combineReducers} from 'redux';
import stopwatch from './stopwatch-reducer.js';
import laps from './laps-reducer.js';

export default combineReducers({
  stopwatch,
  laps
});
