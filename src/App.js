import React from 'react';
import Header from "./components/Header"
import Home from "./components/Home"
 
import './App.css';

function App() {
  return (
    <div className="App">
      {/** header */}
      <Header />
      {/** Home */}
      <Home />
    </div>
  );
}

export default App;
