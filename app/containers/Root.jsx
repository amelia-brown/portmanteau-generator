import React, {Component, PropTypes} from 'react';
import { createStore } from 'redux';
import WordForm from './WordForm';
import PortmanteauShow from './PortmanteauShow';
import { Provider } from 'react-redux';
import portmanteauApp from '../modules';

let store = createStore(portmanteauApp);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='main'>
          <WordForm />
          <PortmanteauShow />
        </div>
      </Provider>
    )
  }
};
