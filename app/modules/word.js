// A reducer is a pure function that takes the previous
// state and an action and returns the next state
// >>> (previousState, action) => newState


const word = (state = {}, action) => {
  switch (action.type) {
    case 'COMBINE_WORDS':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default word;
