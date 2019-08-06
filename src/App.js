import React from 'react';

import CreateToken from './CreateToken'
import GetTotalSupply from './GetTotalSupply'
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateToken/>
      <br/>
      <h4>Check your supply here</h4>
      <GetTotalSupply/>
    </div>
  );
}

export default App;
