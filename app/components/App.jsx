import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../modules';
import Word from './Word.jsx';

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

const store = composeStoreWithMiddleware(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Word />
      </Provider>
    );
  }
}
