import React from 'react'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import { Link } from 'gatsby'
import Image from '../image'
import { StyledHero } from './styles'

const Hero = () => {

    const matched = useReactSimpleMatchMedia('(min-width: 1024)')


    return(
        <StyledHero>
            <div className="img-container">
                { matched ? <Image name="image-homepage-hero.jpg" /> : <Image name="image-homepage-hero-mobile.jpg" />}
            </div>
            <div className="text-container">
                <h1>Hola, soy Carlos Fabián, desarrollador <br/><span>WEB</span></h1>
                <Link to={'/'} className="button">Sobre mí</Link>
            </div>
        </StyledHero>
    )
}

export default Hero