const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORDS':
      return state.concat(
        action.payload.word,
      )
    default:
      return state
  }
};

export default words
