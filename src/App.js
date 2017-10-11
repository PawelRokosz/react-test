import React from 'react';
import './assets/styles/css/main.css';
// import './assets/js/script.js';

import Table from './components/Table';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div id="terminplaner">
    			<div className="header">
    				<h2>Terminplaner</h2>
    				<div className="control">
    					<span className="prev">&lt;</span>
    					<span className="date">6 &mdash; 12. Juli 2015</span>
    					<span className="next">&gt;</span>
    				</div>
    				<span className="month"></span>
    				<span className="slider"></span>
    			</div>

    			<div className="table">
            <Table/>
    			</div>
    		</div>
      </div>
    );
  }
}

export default App;
