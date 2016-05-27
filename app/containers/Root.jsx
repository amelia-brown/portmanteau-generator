import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { portmanteauApp } from '../modules';
import { App } from '../components/App';

let store = createStore(portmanteauApp);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="root">
          <App />
        </div>
      </Provider>
    )
  }
}


