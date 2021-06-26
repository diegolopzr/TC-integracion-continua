import React from 'react'
import FontAwesome from 'react-fontawesome'
import {calcTime, convertMoney} from '../../helpers'
import {StyledMovieInfoBar} from '../styles/StyledMovieInfoBar.js'
import PropTypes from 'prop-types';
const MovieInfoBar = ({time, budget, revenue}) => {
    return (
        <StyledMovieInfoBar>
            <div className="movieinfobar-content">
                <div className="movieinfobar-content-col">
                    <FontAwesome className= "fa-time" name= "clock-o" size= "2x" />
                    { time === 0
                    ? <span className="movieinfobar-info">
                    Duración: N/A
                    </span>
                    : <span className="movieinfobar-info">
                    Duración: {calcTime(time)}   
                    </span>
                    }
                </div>

                <div className="movieinfobar-content-col">
                    <FontAwesome className= "fa-budget" name= "money" size= "2x" />
                    { budget === 0
                    ? <span className="movieinfobar-info">
                        Presupuesto: N/A
                    </span>
                    :<span className="movieinfobar-info">
                    Presupuesto: {convertMoney(budget)}
                    </span>
                    }   
                </div>

                <div className="movieinfobar-content-col">
                    <FontAwesome className= "fa-revenue" name= "ticket" size= "2x" />
                    {revenue === 0
                    ? <span className="movieinfobar-info">
                    Ingresos: N/A
                    </span>
                    : <span className="movieinfobar-info">
                    Ingresos: {convertMoney(revenue)}
                    </span>
                    }
                </div>


            </div>
        </StyledMovieInfoBar>
    )
}
MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
}
export default MovieInfoBar
