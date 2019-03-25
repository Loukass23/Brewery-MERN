import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing';
import Beers from './pages/Beers';
import Breweries from './pages/Breweries';
import Navbar from './components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <Grid container spacing={16}>
          <div className='App'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/beers' component={Beers} />
              <Route exact path='/breweries' component={Breweries} />
            </Switch>
          </div>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
