// A reducer is a pure function that takes the previous
// state and an action and returns the next state
// >>> (previousState, action) => newState

import { portmantize } from '../utils/portmantize.js'

const word = (state, action) => {
  switch (action.type) {
    case 'COMBINE_WORDS':
      return {
        w1: action.w1,
        w2: action.w2,

      }
  }
}
