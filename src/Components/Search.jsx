import React from 'react'
import ContextData from '../context/ContextData';
import { useState, useContext } from 'react'

function Search() {

   const {search, setSearch} = useContext(ContextData);
   const [searchInput, setSearchInput] = useState('');

    const searchClick = (e) => {
        e.preventDefault();
        setSearch(searchInput);
    } 

  return (
    <div>
        <form>
            <input type='text' id='search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
            <button onClick={(e) => searchClick(e)}>Search</button>
        </form>
    </div>
  )
}

export default Search