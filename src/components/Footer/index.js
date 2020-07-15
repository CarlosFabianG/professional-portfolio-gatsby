import React from 'react'
import { Link } from 'gatsby'
import { StyledFooter } from './styles'

import logo from './white-logo.svg'
import githubIcon from './github.svg'
import twitterIcon from './twitter.svg'
import linkedinIcon from './linkedin.svg'

const Footer = () => {
    return(
        <StyledFooter>
            <div className="wrapper">
                <div className="links">
                    <img src={logo} alt="brand-logo"/>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/projects'}>Portafolio</Link>
                    <Link to={'/contact'}>Contacto</Link>
                </div>
                <div className="sm-icons">
                    <a href="https://github.com/CarlosFabianG">
                        <img src={githubIcon} alt="github-icon"/>
                    </a>
                    <a href="https://twitter/Cfabian_blog" alt="twitter-icon">
                        <img src={twitterIcon} alt="twitter-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/carlosfabian/" alt="linkedin-icon">
                        <img src={linkedinIcon} alt="linkedin-icon"/>
                    </a>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer