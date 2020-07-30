import React from 'react'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import { Link } from 'gatsby'
import Image from '../image'
import { StyledHero } from './styles'
import arrowsDown from './down-arrows.svg'

const Hero = () => {

    const desktop = useReactSimpleMatchMedia('desktop')
    const tablet = useReactSimpleMatchMedia('tablet')
    const mobile = useReactSimpleMatchMedia('phone')


    return(
        <StyledHero>
            <div className="img-container">
                { desktop && <Image name="image-homepage-hero.jpg" /> }
                { tablet && <Image name="image-homepage-hero-tablet.jpg" />}
                { mobile && <Image name="image-homepage-hero-mobile.jpg" />}
            </div>
            <div className="text-container">
                <h1>Hola, soy Carlos Fabián, desarrollador <br/><span>WEB</span></h1>
                <Link to={'/'} className="button"><img src={arrowsDown} alt="arrow"/>Sobre mí</Link>
            </div>
        </StyledHero>
    )
}

export default Hero