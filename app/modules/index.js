import { combineReducers } from 'redux';
import toggle from './toggle';
import word from './word';
import Words from './Words';

const portmanteauApp = combineReducers({
  toggle,
  word,
  Words
});

export default portmanteauApp;
