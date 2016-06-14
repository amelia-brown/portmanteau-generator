const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORDS':
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
};

export default words
