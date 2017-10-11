import React, { Component } from 'react';
import './assets/styles/css/main.css';

import Table from './components/Table';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="app" id="terminplaner">
        <Header />
        <Table />
  		</div>
    );
  }
}

export default App;
