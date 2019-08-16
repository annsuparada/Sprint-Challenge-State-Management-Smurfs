import React from "react";
import SmurfsList from './components/SmurfsList'
import SmurfsForm from './components/SmurfForm'

import "./App.css";


function App() {
  
    return (
      <div className="App">
        <header className="App-header">
        <h1 >Welcome to Smurfs House</h1>
        </header>
        
        <div className="flex">
          <SmurfsForm />
          <SmurfsList />
        </div>
        
      </div>
    );
  
}

export default App;
