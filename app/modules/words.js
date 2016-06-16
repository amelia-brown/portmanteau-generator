const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORDS':
      var words = state.concat(
        action.payload.word,
      );
      localStorage.setItem('words', JSON.stringify(words));
      return words;
    default:
      return state;
  }
};

export default words;
