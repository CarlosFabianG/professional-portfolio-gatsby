import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {
    return(
        <>
        <div>
            <Link to={'/'}>
                Carlos Fabian
            </Link>
            <div>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/'}>Portafolio</Link>
                <Link to={'/'}>Contacto</Link>
            </div>
        </div>
        </>
    )
}

export default NavBar