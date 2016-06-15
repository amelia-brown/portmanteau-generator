// A reducer is a pure function that takes the previous
// state and an action and returns the next state
// >>> (previousState, action) => newState


// If the case is read, we need to make a call to the API
// and return the

const word = (state = {}, action) => {
  switch (action.type) {
    case 'READ_PENDING':
      return state;
    case 'READ_FULFILLED':
//      debugger;
      return Object.assign({}, state, {
        [action.meta]: action.payload.word
      });
    case 'COMBINE_WORDS':
      return {
        ...action.payload,
      };
    case 'SAVE_WORDS':
      return {};
    case 'SET_WORD':
      return {
        [action.meta]: action.payload.word,
      };
    default:
      return state;
  }
};

export default word;
