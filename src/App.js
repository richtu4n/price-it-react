import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './features/main/components/SearchBar'
import RefinementPanel from './features/main/components/RefinementPanel'
import PriceWidget from './features/main/components/PriceWidget'
import { getSuggestions } from './utilities/apiFunctions'

const App = () => {
  return (
    <div className="App">
      <div className="App-top-section">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-body">
          <h1>Price it!</h1>
          <SearchBar onChange={ getSuggestions }/>
          <RefinementPanel />
        </div>
      </div>
      <div className="App-bottom-section">
        <PriceWidget />
      </div>
    </div>
  )
}



export default App


// ------------------------------------------------------------------------- //










