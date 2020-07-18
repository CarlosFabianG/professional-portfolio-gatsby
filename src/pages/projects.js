import React from 'react'
import ContactMe from '../components/ContactMe'
import ProjectSection from '../components/ProjectSection'
import SEO from '../components/seo'

const Projects = () => {
    return(
        <>
        <SEO title="portafolio"/>
        <ProjectSection imageName="mobile-portfolio-manage.jpg"
                        title="Manage"
                        description="Landing page construída siguiendo metodología BEM. 
                        Se usa HTML5 semántico y SASS como pre procesador de CSS. Full responsive."
                        position="odd"
                        />

        <ProjectSection imageName="mobile-portfolio-fylo.jpg"
                        title="Fylo"
                        description="Landing page construída siguiendo metodología BEM. HTML5 y SASS como preprocesador de CSS. Full responsive."
                        />
                    
        <ProjectSection imageName="image-geek-blog.png"
                        title="Geek Blog"
                        description="Blog estilo geek construido siguiendo metodología BEM. Se usa HTML5 semántico, CSS Grid, FlexBox y técnicas de responsive design para adaptar el diseño a diferentes dispositivos."
                        position="odd"
                        />

        <ProjectSection imageName="image-landing-mars.png"
                        title="Landing in Mars"
                        description="Videojuego tipo shooting en donde puse en práctica mis habilidades con JavaScript puro ECMAScript6+ y programación orientada a objetos POO."
                        />

        <ProjectSection imageName="image-best-exchange.png"
                        title="Best Exchange"
                        description="SPA que muestra en tiempo real el valor en el mercado de diferentes criptomonedas. Esta construida con Vue JS, usa tailwind como libreria CSS y consume la API coincape." 
                        position="odd"
                        />
        <ProjectSection imageName="image-best-movie.png"
                        title="Best Movie"
                        description="SPA que muestra películas con su sinopsis, reviews, trailers, etc. Esta construida con React, Chakra UI, y consume la API The Movie DB."
                        />
        <ContactMe />
        </>
    )
}

export default Projects