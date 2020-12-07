import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import history from '../history';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <div className="container">
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;