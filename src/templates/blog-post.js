import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const StyledPostTemplate = styled.div`
    
    .blog-post {
        padding: 10vh 12vw;
        font-family: 'Public Sans', sans-serif;
        h1 {
            font-family: Ibarra Real Nova;
        }
    }
`

const PostTemplate = ({ data }) => {
    const title = data.markdownRemark.frontmatter.title
    const html = data.markdownRemark.html
    return(
        <StyledPostTemplate>
            <Helmet title={`Carlos Fabian - ${title}`} />
            <div className="blog-post">
                <h1>{title}</h1>
                <div 
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </div>
        </StyledPostTemplate>
    )
}

export const query = graphql`
    query BlogPostByPath($pathSlug: String!){
        markdownRemark(frontmatter: { path: { eq: $pathSlug}}){
            html
            frontmatter {
                date(formatString: "MMMM DD YYYY")
                path
                title
            }
        }
    }
`
export default PostTemplate