import ContextData from '../context/ContextData'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';

function Searched() {

    const {search} = useContext(ContextData);
    const [userMovies, setUserMovies] = useState([]);

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=c1f90a82a9fc4c525c6b22089738a482&language=en-US&query=${search}&page=1&include_adult=false`

    const searchMovies = () => {
        fetch(`${searchUrl}`).then(response => response.json())
        .then(data => {
            console.log(data.results);
            setUserMovies(data.results)
        })
        .catch(err => console.error(err));    
    }

    useEffect(() => {
        searchMovies();
    },[search])

  return (
    <div>
        {userMovies.map((movie) => {
            return (
                <Card title={movie.title} date={movie.release_date}  img={movie.poster_path} 
                overview={movie.overview} styleTwo={true} />
            )
        })
        
        }
    </div>
  )
}



export default Searched