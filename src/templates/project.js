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
                        technologies={project.technologies}
                        clasification={project.clasification}
                        website={project.website} />

        <PreviousNext  next={project.next} 
                       nextTitle={project.nextTitle}
                       prev={project.prev}
                       prevTitle={project.prevTitle} />

        <ContactMe    />
        </>
    )
}

export default Project