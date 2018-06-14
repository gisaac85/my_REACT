import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'mobx-react';
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
