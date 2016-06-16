const colors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_COLORS':
      return Object.assign({}, state, {
        color1,
        color2
      });
    default:
      return state;
  }
}

export default colors;

//set colors in initial state
// every time the 
