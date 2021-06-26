import React, {useState}from 'react'
import {API_URL, 
        API_KEY, 
        IMAGE_BASE_URL, 
        BACKDROP_SIZE, 
        POSTER_SIZE} 
        from '../config.js';
//Import Components
import Grid from './elements/Grid.jsx'
import Header from './elements/Header.jsx'
import HeroImage from './elements/HeroImage.jsx'
import LoadMoreBtn from './elements/LoadMoreBtn.jsx'
import MovieThumb from './elements/MovieThumb.jsx'
import SearchBar from './elements/SearchBar.jsx'
import Spinner from './elements/Spinner.jsx'

//Custom Hook
import {useHomeFetch} from './Hooks/useHomeFetch.jsx'
//

import Noimage from './images/no_image.jpg'

const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    //console.log(state);
    const [searchTerm, setSearchTerm] = useState('')

    if(error) return <div>Something went wrong</div>
    if(!state.movies[0]) return <Spinner/>


    return (
        <>
            <HeroImage
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title = {state.heroImage.original_title}
                text = {state.heroImage.overview}
            />
            <SearchBar/>
            <Grid heade={searchTerm ? 'Resultado busqueda' : 'Peliculas populares'}>
                {state.movies.map(movie => (
                    <MovieThumb
                        key= {movie.id}
                        clickable
                        image = {movie.poster_path 
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : Noimage
                        }
                        movieId = {movie.id}
                        movieName = {movie.original_title}
                        />
                        ))}
                        
            </Grid>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>
        </>
    )
}

export default Home
