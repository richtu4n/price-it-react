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
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>Price it!</h1>
      <SearchBar onChange={ getSuggestions }/>
      <RefinementPanel />
      <PriceWidget />
    </div>
  )
}



export default App


// ------------------------------------------------------------------------- //










