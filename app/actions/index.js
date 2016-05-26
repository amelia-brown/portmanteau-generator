// Action types

export const COMBINE_WORDS = 'COMBINE_WORDS'
export const SAVE_WORDS = 'SAVE_WORDS'
export const DISPLAY_SAVED_WORDS = 'DISPLAY_SAVED_WORDS'

// Action creators

// Take word one and word two, return word three.

export function combineWords(w1, w2) {
  return {
    type: COMBINE_WORDS,
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

export function displaySavedWords(showing) {
  return {
    type: DISPLAY_SAVED_WORDS,
    showing
  }
}
