import React, { useState } from 'react';
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
} from '../config';

// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// Custom Hook
import { useHomeFetch } from './Hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
    { 
      state: { movies, currentPage, heroImage},
      loading,
      error,    
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = callback => {
      const endpoint = callback 
        ? SEARCH_BASE_URL + callback 
        : POPULAR_BASE_URL;
       setSearchTerm(callback);
       fetchMovies(endpoint)
  }

  const loadMoreMovies = () =>{
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage+1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage+1}`;
    const endpoint = searchTerm ? searchEndpoint: popularEndpoint;
    fetchMovies(endpoint)
  }

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
    { !searchTerm && (
      <HeroImage
      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
      title={heroImage.original_title}
      text={heroImage.overview}
      />
      )
    }
      <SearchBar callback = {searchMovies} />
      <Grid header={searchTerm ? 'Resultado busqueda' : 'Peliculas populares'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      <LoadMoreBtn 
        text = "Cargar más"
        callback = {loadMoreMovies}
      
      />
    </>
  );
};

export default Home;
