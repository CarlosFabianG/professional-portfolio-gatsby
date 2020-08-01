import React from 'react'
import { graphql } from 'gatsby'
import ProjectDetail from '../components/ProjectDetail'
import PreviousNext from '../components/PreviousNext'
import ContactMe from '../components/ContactMe'

export const query = graphql`
    query($slug: String!) {
        projectsJson(slug: { eq: $slug }) {
            title
            sideDescription
            description
            prev
            next
            prevTitle
            nextTitle
            technologies
            clasification
            website
        }
    }
`

const Project = ({ data }) => {
    const project = data.projectsJson

    return(
        <>
        <ProjectDetail  title={project.title}
                        sideDescription={project.sideDescription}
                        description={project.description}
                        prev={project.prev}
                        next={project.next}
                        prevTitle={project.prevTitle}
                        nextTitle={project.nextTitle}
                        technologies={project.technologies}
                        clasification={project.clasification}
                        website={project.website} />
        <PreviousNext />
        <ContactMe />
        </>
    )
}

export default Project