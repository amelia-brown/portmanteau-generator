const colors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_COLORS':
      return Object.assign({}, state, {
        color1: action.payload.color1,
        color2: action.payload.color2
      });
    default:
      return state;
  }
}

export default colors;
