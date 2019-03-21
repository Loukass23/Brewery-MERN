import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Landing from './pages/Landing';
import Beers from './pages/Beers';

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/beers' component={Beers} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
