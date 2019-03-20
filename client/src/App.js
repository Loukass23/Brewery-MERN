import React, { Component } from 'react';
import './App.css';
import Landing from './pages/Landing';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Landing />
      </div>
    );
  }
}

export default App;
