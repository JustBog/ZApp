import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, NetInfo } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { default as configureStore } from './store';
import App from './App';
import reducer from './reducer';
import rootSaga from './sagas';

class AppContainer extends Component {
  static propTypes = {
    isFirstLaunch: PropTypes.bool
  }

  constructor(props, context) {
    super(props, context);

    /*
      Configuration of redux store, which is responsible of app state.
    */

    const store = configureStore(reducer, rootSaga);
    this.state = {
      store
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App/>
      </Provider>
    );
  }
}

export default AppContainer;
