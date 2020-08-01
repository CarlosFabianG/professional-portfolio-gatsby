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
        <aside>
            <h2>{title}</h2>
            <p>{sideDescription}</p>
            <p>{clasification}</p>
            <p>{technologies}</p>
            <Link to={website}>Visitar website</Link>
        </aside>

        <article>
            <h3>Project Background</h3>
            <p>{description}</p>
        </article>
        </StyledDetail>
        </>
    )
}

export default ProjectDetail