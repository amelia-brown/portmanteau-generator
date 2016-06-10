const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORDS':
      return state.concat(
        word
      )
    default:
      return state
  }
};

export default words
