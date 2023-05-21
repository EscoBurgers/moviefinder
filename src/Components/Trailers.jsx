import React, { useState, useEffect } from 'react'
import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Trailers() {

    const [trailers, setTrailers] = useState([]);

    const trailerUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c1f90a82a9fc4c525c6b22089738a482&language=en-US&page=1'

    const getTrailers = async () => {
        fetch(`${trailerUrl}`).then(response => response.json())
        .then(data => {
            setTrailers(data.results)
            localStorage.setItem('trailers', JSON.stringify(data.results))
        })
        .catch(err => console.error(err));    
    }

    useEffect(() => {
        (localStorage.getItem('trailers') ? 
        setTrailers(JSON.parse(localStorage.getItem('trailers'))) : getTrailers())
    },[])

  return (
    <div>
        <h1>Trailers</h1>
        <Splide options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '1rem'
        }}>
        {trailers.map((trailer) => {
            return (
                    <SplideSlide>
                        <Card img={trailer.backdrop_path}/>
                    </SplideSlide>
            )
        })}
        </Splide>
    </div>
  )
}

export default Trailers