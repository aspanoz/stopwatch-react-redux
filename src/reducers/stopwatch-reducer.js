import * as types from '../actions/action-types';

const initialState = {
  items: []
}

let index = null;
let newItem = {};

export default (state = initialState, actions) => {
  switch (actions.type) {

    case types.ADD_STOPWATCH:
      return {
        items: [
          ...state.items,
          Object.assign({}, actions.payload)
        ]
      }

    case types.DEL_STOPWATCH:
      index = state.items.findIndex((e) => e.id === actions.payload);
      return {
        items: [
          ...state.items.slice(0, index).concat(state.items.slice(index + 1))
        ]
      }

    case types.SET_STOPWATCH_BEST_TIME:
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

    default:
      return state;
  }
};
