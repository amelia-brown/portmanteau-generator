import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import App from '../components/App';
import { Provider } from 'react-redux';
import portmanteauApp from '../modules';

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


