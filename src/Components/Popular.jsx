import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {

    const [movies, setMovies] = useState([]);

    const movieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=c1f90a82a9fc4c525c6b22089738a482&language=en-US&page=1`

    const MovieData = async () => {
        fetch(`${movieUrl}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            setMovies(data.results)
            localStorage.setItem('movies', JSON.stringify(data.results)); 
        }
            )
        .catch(err => console.error(err));
    }

    useEffect(() => {
        (localStorage.getItem('movies')) ? 
        setMovies(JSON.parse(localStorage.getItem('movies'))) : MovieData();
    }, [])

  return (
    <div>
        <h1>Trending</h1>
        
            <MultiCards>
            <Splide options={{
            perPage: 5,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '1rem'
        }}>
                {movies.map((movie) => {
                    return (
                            <SplideSlide>
                                <Card title={movie.title} date={movie.release_date} vote={movie.vote_average} img={movie.poster_path}/>
                            </SplideSlide>
                    )
                })
                }
            </Splide>    
            </MultiCards>
        
    </div>
  )
}

const MultiCards = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
`;

export default Popular