import React from 'react'
import { graphql } from 'gatsby'
import ProjectDetail from '../components/ProjectDetail'
import PreviousNext from '../components/PreviousNext'

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

const Project = ({ pageContext }) => {
    return(
        <>
        <h1>Project</h1>
        <ProjectDetail />
        <PreviousNext />
        </>
    )
}

export default Project