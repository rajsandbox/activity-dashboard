import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

import PurchaseSummary from './purchase-summary/purchaseSummary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PurchaseSummary />
      </div>
    );
  }
}

export default App;
