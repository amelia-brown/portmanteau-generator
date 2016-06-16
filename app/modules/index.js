import { combineReducers } from 'redux';
import toggle from './toggle';
import word from './word';
import words from './words';
import colors from './colors';

const portmanteauApp = combineReducers({
  toggle,
  word,
  words,
  colors,
});

export default portmanteauApp;
