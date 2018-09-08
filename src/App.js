import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Components
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import TickerTable from './components/TickerTable'
import Orderbook from './components/Orderbook'
import Trades from './components/Trades'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Toolbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/tickerTable' component={TickerTable} />
              <Route exact path='/orderbook' component={Orderbook} />
              <Route exact path='/trades' component={Trades} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
