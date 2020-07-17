import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
import { StyledProfile } from './styles'

const Profile = () => {
    return(
        <StyledProfile>
            <div className="img-container">
            <Image name="carlos-fabian-profile.JPG"/>
            </div>
            <article className="profile-text">
                <h2>Sobre mí</h2>
                <div className="copy"> 
                Soy front-end developer con el objetivo de construir soluciones tecnológicas que ayuden a las personas a mejorar sus vidas. Mis habilidades son HTML5 semántico, CSS -Flexbox, Grid layout, BEM, SASS. JavaScript EcmaScript 6+. Git y github para control de versiones y trabajo colaborativo. Mi framework favorito para desarrollo frontend es React pero puedo adaptarme a cualquier tecnología. Mi principal súper poder es una pasión genuina por el aprendizaje continuo. 
                </div>
                <Link to={'/projects'} className="button">Mis proyectos</Link>
            </article>
        </StyledProfile>
    )
}

export default Profile