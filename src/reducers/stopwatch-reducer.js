import * as types from '../actions/action-types';

const initialState = {
  stopwatchId: 0,
  items: []
};

let index = null;
let stopwatchId = null;
let newItem = {};

export default (state = initialState, actions) => {
  switch (actions.type) {

    case types.ADD_STOPWATCH:
      const ru = 'АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧЩЫЭЮЯ';
      const radix = '0123456789abcdefghijklmnopqrs';
      const title = state.stopwatchId
        .toString(29)
        .split('')
        .map((e) => ru.charAt(radix.indexOf(e)))
      .join('');

      newItem = {id: state.stopwatchId, title: `Забег ${title}`, time: 0};
      return {
        stopwatchId: state.stopwatchId + 1,
        items: [
          ...state.items,
          Object.assign({}, newItem)
        ]
      };

    case types.DELETE_STOPWATCH:
      index = state.items.findIndex((e) => e.id === actions.id);
      stopwatchId = state.stopwatchId === actions.id + 1
        ? state.stopwatchId - 1
        : state.stopwatchId;
      return {
        stopwatchId: stopwatchId,
        items: [
          ...state.items.slice(0, index).concat(state.items.slice(index + 1))
        ]
      };

    case types.SET_STOPWATCH_BEST_TIME:
      index = actions.index;
      newItem = {
        ...state.items[index],
        time: (state.items[index].time === 0 || actions.time < state.items[index].time)
          ? actions.time
          : state.items[index].time
      };
      return {
        stopwatchId: state.stopwatchId,
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      };

    case types.MANUAL_SET_STOPWATCH_BEST_TIME:
      index = actions.index;
      newItem = {
        ...state.items[index],
        time: actions.time
      };
      return {
        stopwatchId: state.stopwatchId,
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      };

    default:
      return state;
  }
};
