import React from 'react';
import Header from './elements/Header.jsx';
import Home from './Home.js';
import Movie from './Movie.jsx'
import NotFound from './elements/NotFound.jsx'
import {Router} from '@reach/router'
// import {createGlobalStyle} from 'styled-components'
import {GlobalStyle} from './styles/GlobalStyle'

// const GlobalStyle = createGlobalStyle`
//     body{
//         margin: 0;
//         padding: 0;
//         box-sizing: boder-box;
//     }
// `
const App = () => {
    return(
        <>
            <Header/>
            <Router>
            <Home path="/"/>
            <Movie path="/:movieId"/>
            <NotFound default/>
            </Router>
            <GlobalStyle/>
        </>
    )
}
export default App;
