// Action types

export const COMBINE_WORDS = 'COMBINE_WORDS'
export const SAVE_WORDS = 'SAVE_WORDS'
export const TOGGLE_SAVED_WORDS = 'TOGGLE_SAVED_WORDS'

// Action creators

// Take word one and word two, return word three.

import portmantize from '../utils/portmantize.js';

export function combineWords(w1, w2) {
  return {
    type: COMBINE_WORDS,
    payload: {
      w1,
      w2,
      portmanteau: portmantize(w1, w2),
    },
  };
};
// Take word object to save, add word to saved words array

let nextIndex = 0;
export function saveWords(word) {
  word.id = nextIndex++;
  return {
    type: SAVE_WORDS,
    payload: {
      word
    },
  };
};

// Update the boolean value (whether word list showing)

export function toggleSavedWords() {
  return {
    type: TOGGLE_SAVED_WORDS,
  };
};

// These are the actions corresponding to async API calls

const get = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      !response.ok && reject(response.error);
      response.json().then(json => resolve(json));
    }).catch(error => {
      reject(error);
    });
  });
}


export const READ = 'READ';
export const SET_WORD = 'SET_WORD';

export function read(value) {
  var promise = get('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=02e41994dd05a5f14f9040d3bae087cfca3c7626ffd00951d')
  return {
    type: READ,
    meta: value,
    payload: {
      promise,
    },
  }
};

export function setWord(sibling, word) {
  return {
    type: SET_WORD,
    meta: sibling,
    payload: {
      word,
    }
  };
};


