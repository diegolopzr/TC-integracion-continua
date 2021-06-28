import React from 'react'
import {useMovieFetch} from './Hooks/useMovieFetch.js'
    

//Componentes
import Navigation from './elements/Navigation.jsx'
import MovieInfo from './elements/MovieInfo.jsx'
import MovieInfoBar from './elements/MovieInfoBar.jsx'
import Actor from './elements/Actor.jsx'
import Grid from './elements/Grid.jsx'
import Spinner from './elements/Spinner.jsx'


const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId);
    console.log(movie)
    if (error) return <div>Algo salio mal :,(</div>;
    if (loading) return <Spinner/>


    return (
        <>
            <Navigation movie={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar
                time= {movie.runtime}
                budget= {movie.budget}
                revenue= {movie.revenue}
            />
            <Grid header = "Actors">
                {movie.actors.map(actor =>(
                <Actor key={actor.credit_id} actor= {actor}/>
                ))}
            </Grid>
            
        </>
    )
}

export default Movie
