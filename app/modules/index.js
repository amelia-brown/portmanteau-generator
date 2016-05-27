import { combineReducers } from 'redux';
import toggle from './toggle';
import word from './word';
import words from './words';

const portmanteauApp = combineReducers({
  toggle,
  word,
  words
});

export default portmanteauApp;
