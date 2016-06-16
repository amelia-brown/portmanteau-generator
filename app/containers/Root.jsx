import React, {Component, PropTypes} from 'react';
import { createStore, applyMiddleware } from 'redux';
import WordForm from './WordForm';
import WordList from './WordList';
import PortmanteauShow from './PortmanteauShow';
import { Provider } from 'react-redux';
import portmanteauApp from '../modules';
import promiseMiddleware from 'redux-promise-middleware';
import { colorsArray, selectColors } from '../utils/colors';

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

var [color1, color2] = selectColors(colorsArray);

let initialState = {
  words: JSON.parse(localStorage.getItem('words')) || [],
  colors: {
    color1,
    color2
  }
}

let store = composeStoreWithMiddleware(portmanteauApp, initialState);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='main'>
          <WordForm />
          <PortmanteauShow />
          <WordList />
        </div>
      </Provider>
    )
  }
};
