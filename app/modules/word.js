const INITIAL_STATE = {
  word1: '',
  word2: '',
  portmanteau: ''
}

const COMBINE = 'word/COMBINE';

export const combine = () => {
  return {
    type: COMBINE,
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMBINE:
      return Object.assign({}, state, {portmanteau: action.payload.portmanteau });
    default:
      return state;
  }
}
