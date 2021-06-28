import React from 'react'
import RMDBLogo from '../images/reactMovie_logo.png'; 
// import styled from 'styled-components'
import {StyledHeader,StyledRMDBLogo  } from '../styles/StyledHeader' 
import {Link} from '@reach/router'
//  const StyledHeader = styled.div`
//     background: #1c1c1c;
//     padding: 0 20px;
//      box-sizing: border-box;

//      .header-content{
//      max-width: 1280px;
//      min-height: 120px;
//      padding:20px 0;
//      margin: 0 auto;
//      box-sizing: border-box;

//      @media screen and (max-width: 500px){
//          min-height: 0px;
//      }
//      }
// `;
//  const StyledRMDBLogo = styled.img`
//     width: 250px;
//     margin-top: 20px;

//     @media screen and (max-width: 500px){
//     width: 150px;
//     margin-top: 5px;
//     }
//  `;
//  const StyledTMDBLogo = styled.img`
//   width: 122px;
//   margin-top: 25px;
//   float: right;

//   @media screen and (max-width: 500px) {
//     display: inline-block;
//     width: 80px;
//     margin-top: 0px;
//   }
// `;
const Header = () => {
    return (
        <StyledHeader>
            <div className="header-content">
                <Link to ="/">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
                </Link>
                
                {/* <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/> */}
            </div> 
                <span className="text-content">
                    TC Integración continua 
                </span> 
        </StyledHeader>
        
    )
}

export default Header
