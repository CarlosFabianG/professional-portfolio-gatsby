import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
import { StyledSection } from './styles'

const ProjectSection = ({imageName, title, description}) => {
    return(
        <StyledSection>
            <Image name={imageName} />
            <article>
                <h3>{title}</h3>
                <div className="text">
                    {description}
                </div>
                <Link className="button">Ver proyecto</Link>
            </article>
        </StyledSection>
    )
}

export default ProjectSection