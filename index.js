"use strict";

var __DEV__ = typeof process !== 'undefined' && typeof process.env !== 'undefined' && process.env.NODE_ENV !== 'production';

exports.createReducer = function createReducer(initialState, handlers) {
  if (__DEV__ && handlers['undefined']) {
    console.warn(
      'Reducer contains an \'undefined\' action type. ' +
      'Have you misspelled a constant?'
    )
  }

  return function reducer(state, action) {
    if (state === undefined) state = initialState;

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
