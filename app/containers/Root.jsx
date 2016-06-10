import React, {Component, PropTypes} from 'react';
import { createStore } from 'redux';
import Form from '../components/Form';
import { Provider } from 'react-redux';
import {portmanteauApp} from '../modules';

let store = createStore(portmanteauApp);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}
