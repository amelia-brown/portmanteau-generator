// A reducer is a pure function that takes the previous
// state and an action and returns the next state
// >>> (previousState, action) => newState


const word = (state = {}, action) => {
  switch (action.type) {
    case 'COMBINE_WORDS':
      return {
        ...action.payload,
        portmanteau: portmantize(w1, w2)
      };
    default:
      return state;
  }
};

export default word;
