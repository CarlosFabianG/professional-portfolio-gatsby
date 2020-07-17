import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
import { StyledHero } from './styles'

const Hero = () => {
    return(
        <StyledHero>
            <div className="img-container">
                <Image name="image-homepage-hero@2x.jpg"/>
            </div>
            <div className="text-container">
                <h1>Hola, soy Carlos Fabián, desarrollador <br/><span>WEB</span></h1>
                <Link to={'/'} className="button">Sobre mí</Link>
            </div>
        </StyledHero>
    )
}

export default Hero