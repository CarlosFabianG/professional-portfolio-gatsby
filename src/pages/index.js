import React from "react"
import { Link } from "gatsby"
import { StyledHero } from '../styles/home'
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <>
    <SEO title="Home" />
    <StyledHero>
      <div className="img-container">
        <Image name="image-homepage-hero.jpg"/>
      </div>
      <div className="text-container">
        <h1>Hola, soy Carlos Fabián, desarrollador <br/><span>WEB</span></h1>
        <Link className="button">Sobre mí</Link>
      </div>
    </StyledHero >
     
    <div className="about-me">
      <div className="img">
      <Image name="carlos-fabian-profile.JPG"/>
      </div>
      <article>
        <h2>Sobre mí</h2>
        <div className="about-me-copy"> 
          Soy front-end developer con el objetivo de construir soluciones tecnológicas que ayuden a las personas a mejorar sus vidas. Mis habilidades son HTML5 semántico, CSS -Flexbox, Grid layout, BEM, SASS. JavaScript EcmaScript 6+. Git y github para control de versiones y trabajo colaborativo. Mi framework favorito para desarrollo frontend es React pero puedo adaptarme a cualquier tecnología. Mi principal súper poder es una pasión genuina por el aprendizaje continuo. 
        </div>
        <Link to={'/page-2'} className="button">Mis proyectos</Link>
      </article>

    </div>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
