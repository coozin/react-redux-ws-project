import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
      </div>
    );
  }
}

export default connect()(App);