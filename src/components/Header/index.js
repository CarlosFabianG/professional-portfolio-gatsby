import React, { useState } from 'react'
import { Link } from 'gatsby'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import { StyledHeader } from './styles'

import logo from './logo.svg'
import burger from './hamburger.svg'
import close from './close.svg'

const Header = () => {

    const [ status, setStatus ] = useState(false)
    const changeStatus = () => !status ? setStatus(true) : setStatus(false)

    const mobile = useReactSimpleMatchMedia('phone')

    return(
        <StyledHeader>
            <div className="wrapper">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="brand-logo"/>
                </Link>
                <div className="burger-icon">
                    { !status ? <img onClick={changeStatus} src={burger} alt="burger-icon"/>: <img onClick={changeStatus} src={close} alt="close-icon"/>}
                </div>
                <nav className={ !mobile ? "navbar-menu" : mobile && status ? "navbar-menu--mobile-active": "navbar-menu--mobile"}>
                    <Link to={'/'} onClick={changeStatus}>Inicio</Link>
                    <Link to={'/projects'} onClick={changeStatus}>Portafolio</Link>
                    <Link to={'/contact'} onClick={changeStatus}>Contacto</Link>
                </nav>
            </div>
        </StyledHeader>
    )
}

export default Header