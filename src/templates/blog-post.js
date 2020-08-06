import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const PostTemplate = ({ data }) => {
    const title = data.markdownRemark.frontmatter.title
    const html = data.markdownRemark.html
    return(
        <div className="blog-post-container">
            <Helmet title={`Carlos Fabian - ${title}`} />
            <div className="blog-post">
                <h1>{title}</h1>
                <div 
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </div>
        </div>
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