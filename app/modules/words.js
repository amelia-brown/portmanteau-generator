const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORDS':
      var words = state.concat(
        action.payload.word,
      );
      localStorage.setItem('words', JSON.stringify(words));
      return words;
    case 'DELETE_WORD':
      var words = state;
      var index = words.findIndex(function(item){
        if (item.id !== action.id) {
          return false;
        }
        return true
      })
      var newWordsArr = [...words.slice(0, index), ...words.slice(index+1)];
      localStorage.setItem('words', JSON.stringify(newWordsArr));
      return [
          ...words.slice(0, index),
          ...words.slice(index + 1),
      ];
    default:
      return state;
  }
};

export default words;
