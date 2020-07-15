import React from 'react'
import { Link } from 'gatsby'
import Image from "../components/image"
import ContactMe from '../components/ContactMe'
import ProjectSection from '../components/ProjectSection'

const Projects = () => {
    return(
        <>
        <ProjectSection imageName="mobile-portfolio-manage.jpg"
                        title="manage"
                        description="Landing page construída siguiendo metodología BEM. 
                        Se usa HTML5 semántico y SASS como pre procesador de CSS. Full responsive."/>

        <ProjectSection imageName="mobile-portfolio-fylo.jpg"
                        title="Fylo"
                        description="Landing page construída siguiendo metodología BEM. HTML5 y SASS como preprocesador de CSS. Full responsive."
                        />
        
        <ContactMe />
        </>
    )
}

export default Projects