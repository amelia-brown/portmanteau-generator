const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORDS':
      return state.concat(
        {id: action.id,
        w1: action.w1,
        w2: action.w2,
        w3:portmantize(w1, w2)})
    default:
      return state
  }
};

export default words
