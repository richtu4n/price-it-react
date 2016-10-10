import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './features/main/components/SearchBar'
import RefinementPanel from './features/main/components/RefinementPanel'

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>Price it!</h1>
      <SearchBar />
      <RefinementPanel />
    </div>
  )
}



export default App


// ------------------------------------------------------------------------- //










