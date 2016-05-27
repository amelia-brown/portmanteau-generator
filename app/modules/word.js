// A reducer is a pure function that takes the previous
// state and an action and returns the next state
// >>> (previousState, action) => newState

import { portmantize } from '../utils/portmantize.js'

const word = (state = {}, action) => {
  switch (action.type) {
    case 'COMBINE_WORDS':
      return {
        id: action.id,
        w1: action.w1,
        w2: action.w2,
        W3: portmantize(w1, w2)
      }
    default:
      return state
  }
};

export default word
