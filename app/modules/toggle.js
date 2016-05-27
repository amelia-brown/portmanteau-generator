const toggle = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SAVED_WORDS':
      return {
        showing: !showing
      }
    default:
      return state
  }
};

export default toggle
