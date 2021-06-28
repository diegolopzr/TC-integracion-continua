import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import {Link} from '@reach/router'
import PropTypes from 'prop-types';
const MovieThumb = ({image , clickable, movieId}) => {
    return (
        <StyledMovieThumb>
            { clickable ? (
                <Link to = {`/${movieId}`}>
                <img className="clickable" src= {image} alt= "moviethumb"/>
                </Link>
            ) : (
                <img src= {image} alt= "moviethumb"/>
            )
            }
        </StyledMovieThumb>
    )
}
MovieThumb.propTypes = {
    image: PropTypes.string,
    clickable: PropTypes.bool,
    movieId: PropTypes.number,
}
export default MovieThumb
