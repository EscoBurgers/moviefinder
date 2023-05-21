import logo from './logo.svg';
import './App.css';
import Popular from './Components/Popular';
import Trailers from './Components/Trailers';
import Search from './Components/Search';
import ContextData from './context/ContextData.jsx'
import { useState, useEffect } from 'react';
import Searched from './Components/Searched';
import { Route, Routes } from "react-router-dom"
import Nav from './Components/Nav';

function App() {

  const [search, setSearch] = useState('');


  return (
    <ContextData.Provider value={{search, setSearch
    }}>
      <div className="App">
        <Search/>
        {search ? <Searched /> : 
        <> 
          <Nav/> 
          <Popular />
          <Trailers /> 
        </> }
        <Routes>
          <Route path="/popular" element={<Popular />} />
          <Route path="/trailers" element={<Trailers />} />
        </Routes>
      </div>
    </ContextData.Provider>
  );
}

export default App;
