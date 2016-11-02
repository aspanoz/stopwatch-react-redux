import * as types from './action-types';

export const addStopwatch = () => {
  return {
    type: types.ADD_STOPWATCH
  };
};

export const deleteStopwatch = (id) => {
  return {
    type: types.DELETE_STOPWATCH,
    id: id
  };
};

export const setStopwatchBestTime = (value) => {
  return {
    type: types.SET_STOPWATCH_BEST_TIME,
    time: value.time,
    index: value.index
  };
};

export const manualSetStopwatchBestTime = (value) => {
  return {
    type: types.MANUAL_SET_STOPWATCH_BEST_TIME,
    time: value.time,
    index: value.index
  };
};

export const stopwatchStart = (index) => {
  return {
    type: types.STOPWATCH_START,
    index: index
  };
};

export const stopwatchStop = (index) => {
  return {
    type: types.STOPWATCH_STOP,
    index: index
  };
};

export const addStopwatchLap = (value) => {
  return {
    type: types.ADD_STOPWATCH_LAP,
    time: value.time,
    lap: value.lap,
    index: value.index
  };
};

export const clearStopwatchLaps = (index) => {
  return {
    type: types.CLEAR_STOPWATCH_LAPS,
    index: index
  };
};

export const setCurrentTime = (value) => {
  return {
    type: types.SET_CURRENT_TIME,
    time: value.time,
    index: value.index
  };
};

export const setStopwatchLaps = (id) => {
  return {
    type: types.SET_STOPWATCH_LAPS,
    id: id
  };
};

export const deleteStopwatchLaps = (id) => {
  return {
    type: types.DELETE_STOPWATCH_LAPS,
    id: id
  };
};
