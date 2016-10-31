import * as types from '../actions/action-types';

const initialState = {
  items: []
}

let index = null;
let newItem = {};

export default (state = initialState, actions) => {
  switch (actions.type) {

    case types.STOPWATCH_START:
      index = actions.payload.index;
      newItem = {
        ...state.items[index],
        isStart: true,
        currenttime: Date.now(),
        laptime: Date.now()
      }
      return {
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      }

    case types.STOPWATCH_STOP:
      index = actions.payload.index;
      newItem = {
        ...state.items[index],
        isStart: false,
        time: 0,
        laptime: 0,
        currenttime: 0
      }
      return {
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      }

    case types.SET_CURRENT_TIME:
      index = actions.payload.index;
      newItem = {
        ...state.items[index],
        time: actions.payload.time
      }
      return {
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      }

    case types.SET_STOPWATCH_LAPS:
      return {
        items: [
          ...state.items,
          Object.assign({}, {
            id: actions.payload,
            laps: [],
            currenttime: 0,
            time: 0,
            laptime: 0,
            isStart: false
          })
        ]
      }

    case types.DEL_STOPWATCH_LAPS:
      index = state.items.findIndex((e) => e.id === actions.payload);
      return {
        items: [
          ...state.items.slice(0, index).concat(state.items.slice(index + 1))
        ]
      }


    case types.ADD_STOPWATCH_LAP:
      index = actions.payload.index;
      newItem = {
        ...state.items[index],
        laps: [ ...state.items[index].laps, actions.payload.lap],
        laptime: actions.payload.time
      }
      return {
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      }

    case types.CLEAR_STOPWATCH_LAPS:
      index = actions.payload.index;
      newItem = {
        ...state.items[index],
        laps: [ ],
      }
      return {
        items: [
          ...state.items.slice(0, index).concat(newItem, state.items.slice(index + 1))
        ]
      }

    default:
      return state;
  }
};
