import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import { StyledDetail } from './styles'

const ProjectDetail = ( {title, sideDescription, clasification, 
                        technologies, description, website, image}) => {
    
    const desktop = useReactSimpleMatchMedia('(min-width: 1024px) and (max-width: 1450px)')
    const tablet = useReactSimpleMatchMedia('(min-width: 768px) and (max-width: 1023px)')
    const mobile = useReactSimpleMatchMedia('(min-width: 375px) and (max-width: 767px)')

    return(
        <>
        { desktop && <Image name={image.desktop} />}
        { tablet && <Image name={image.tablet} />}
        { mobile && <Image name={image.mobile} />}
        <StyledDetail>
            <aside className="aside-description">
                <h2>{title}</h2>
                <p className="copy">{sideDescription}</p>
                <p><span>{clasification}</span></p>
                <p className="copy-stack"><span>{technologies}</span></p>
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