// Action types

export const COMBINE_WORDS = 'COMBINE_WORDS'
export const SAVE_WORDS = 'SAVE_WORDS'
export const TOGGLE_SAVED_WORDS = 'TOGGLE_SAVED_WORDS'

// Action creators

// Take word one and word two, return word three.

export function combineWords(w1, w2) {
  return {
    type: COMBINE_WORDS,
    w1,
    w2,
    w3
  }
}

// Take word object to save, add word to saved words array

export function saveWords(word) {
  return {
    type: SAVE_WORDS,
    word
  }
}

// Update the boolean value (whether word list showing)

export function toggleSavedWords(showing) {
  return {
    type: TOGGLE_SAVED_WORDS,
    showing
  }
}
