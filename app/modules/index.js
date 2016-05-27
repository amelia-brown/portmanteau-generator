import { combineReducers } from 'redux';
import { words } from './words';

const portmanteauApp = combineReducers({
  words
});

export default portmanteauApp;
