import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StyledHeader } from './styles'

import logo from './logo.svg'
import burger from './hamburger.svg'
import close from './close.svg'

const Header = () => {

    const [ status, setStatus ] = useState(false)

    const changeStatus = () => !status ? setStatus(true) : setStatus(false)

    return(
        <StyledHeader>
            <div className="wrapper">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="brand-logo"/>
                </Link>
                <div className="burger-icon">
                    { !status ? <img onClick={changeStatus} src={burger} alt="burger-icon"/>: <img onClick={changeStatus} src={close} alt="close-icon"/>}
                </div>
                <nav className="navbar-menu">
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/projects'}>Portafolio</Link>
                    <Link to={'/contact'}>Contacto</Link>
                </nav>
            </div>
        </StyledHeader>
    )
}

export default Header