import React from 'react'
import { Link } from 'gatsby'
import { StyledNavBar } from './styles'

import logo from './logo.svg'

const NavBar = () => {
    return(
        <StyledNavBar>
            <div className="wrapper">
                <Link to={'/'} className="logo">
                    <img src={logo}/>
                </Link>
                <div class="navbar-menu">
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/'}>Portafolio</Link>
                    <Link to={'/'}>Contacto</Link>
                </div>
            </div>
        </StyledNavBar>
    )
}

export default NavBar