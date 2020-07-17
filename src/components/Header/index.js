import React from 'react'
import { Link } from 'gatsby'
import { StyledHeader } from './styles'

import logo from './logo.svg'
import burger from './hamburger.svg'

const Header = () => {
    return(
        <StyledHeader>
            <div className="wrapper">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="brand-logo"/>
                </Link>
                <div className="burger-icon">
                    <img src={burger} alt="burger-icon"/>
                </div>
                <nav class="navbar-menu">
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/'}>Portafolio</Link>
                    <Link to={'/'}>Contacto</Link>
                </nav>
            </div>
        </StyledHeader>
    )
}

export default Header