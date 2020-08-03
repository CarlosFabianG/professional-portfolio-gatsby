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
            image {
                mobile
                tablet
                desktop
            }
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
                        website={project.website} 
                        image={project.image}/>

        <PreviousNext  next={`/projects/${project.next}/`} 
                       nextTitle={project.nextTitle}
                       prev={`/projects/${project.prev}/`}
                       prevTitle={project.prevTitle} />

        <ContactMe    />
        </>
    )
}

export default Project