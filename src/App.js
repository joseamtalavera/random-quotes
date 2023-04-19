// App.js

import React from 'react';
import './App.css';
import QuoteMachine from './QuoteMachine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stoic Quotes</h1>
        <QuoteMachine />
      </header>
    </div>
  );
}

export default App;

