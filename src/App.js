import React, { Component } from 'react';
import Forum from './Forum';

import { Provider } from 'react-redux';
import store from './Redux/store';

class App extends Component {
  render() {
    console.log('rendered');
    return (
      <Provider store={store}>
        {console.log('STORE', store.getState())}
        <Forum />
      </Provider>
    );
  }
}

export default App;
