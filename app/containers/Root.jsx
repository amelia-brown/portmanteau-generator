import React, {Component, PropTypes} from 'react';
import { createStore, applyMiddleware } from 'redux';
import WordForm from './WordForm';
import WordList from './WordList';
import PortmanteauShow from './PortmanteauShow';
import { Provider } from 'react-redux';
import portmanteauApp from '../modules';
import promiseMiddleware from 'redux-promise-middleware';

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

let store = composeStoreWithMiddleware(portmanteauApp);

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
