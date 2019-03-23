import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Landing from './pages/Landing';
import Beers from './pages/Beers';
import Breweries from './pages/Breweries';

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/beers' component={Beers} />
            <Route exact path='/breweries' component={Breweries} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
