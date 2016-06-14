const toggle = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SAVED_WORDS':
      return Object.assign({}, state, {
        showing: !state.showing
      })
    default:
      return state
  }
};

export default toggle
