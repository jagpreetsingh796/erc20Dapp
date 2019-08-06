import React from 'react';

import CreateToken from './CreateToken'
import GetTotalSupply from './GetTotalSupply'
import Transfer from './Transfer'
import Approve from './Approve'
import Delegatebalance from './Delegatebalance'
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateToken/>
      <br/>
      <h4>Check your supply here</h4>
      <GetTotalSupply/>
      <br/>
      <h4>Transfer</h4>
      <Transfer/>
      <br/>
      <h4>Assign Delegate</h4>
      <Approve/>
      <br/>
      <h4>Check Delegate balance</h4>
      <Delegatebalance/>
      

      
      
      
    </div>
  );
}

export default App;
