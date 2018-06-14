import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Provider, observer } from 'mobx-react';
import stores from './stores';


class App extends Component {
  render() {
    return (

      <Provider {...stores}>
        <Counter />
      </Provider>

    );
  }
}

export default App;
