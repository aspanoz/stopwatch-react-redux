import * as types from './action-types';

export const addStopwatch = (value) => {
  return {
    type: types.ADD_STOPWATCH,
    payload: value
  };
}

export const delStopwatch = (value) => {
  return {
    type: types.DEL_STOPWATCH,
    payload: value
  };
}

export const setStopwatchBestTime = (value) => {
  return {
    type: types.SET_STOPWATCH_BEST_TIME,
    payload: value
  };
}

export const stopwatchStart = (value) => {
  return {
    type: types.STOPWATCH_START,
    payload: value
  };
}

export const stopwatchStop = (value) => {
  return {
    type: types.STOPWATCH_STOP,
    payload: value
  };
}

export const addStopwatchLap = (value) => {
  return {
    type: types.ADD_STOPWATCH_LAP,
    payload: value
  };
}

export const clearStopwatchLaps = (value) => {
  return {
    type: types.CLEAR_STOPWATCH_LAPS,
    payload: value
  };
}

export const setCurrentTime = (value) => {
  return {
    type: types.SET_CURRENT_TIME,
    payload: value
  };
}

export const setStopwatchLaps = (value) => {
  return {
    type: types.SET_STOPWATCH_LAPS,
    payload: value
  };
}

export const delStopwatchLaps = (value) => {
  return {
    type: types.DEL_STOPWATCH_LAPS,
    payload: value
  };
}
