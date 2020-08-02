import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
import { StyledDetail } from './styles'

const ProjectDetail = ({image, title, sideDescription, clasification, 
                        technologies, description, website}) => {
    return(
        <>
        <Image name={image}/>
        <StyledDetail>
        <aside className="aside-description">
            <h2>{title}</h2>
            <p className="copy">{sideDescription}</p>
            <p><span>{clasification}</span></p>
            <p><span>{technologies}</span></p>
            <Link to={website} className="button">Visitar website</Link>
        </aside>

        <article className="project-background">
            <h3>Project Background</h3>
            <p>{description}</p>
        </article>
        </StyledDetail>
        </>
    )
}

export default ProjectDetail