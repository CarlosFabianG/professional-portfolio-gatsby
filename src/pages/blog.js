import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const BlogIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark

  return(
    <>
    <SEO title="Blog" />
    <h1>Hola!</h1>
    <p>Bienvenido a mi blog en donde comparto lo que aprendo</p>
    
    {edges.map(({ node }) => {
      const title = node.frontmatter.title
      return (
        <>
        <header>
          <h3>
            <Link to={node.frontmatter.path}>
              {title}
            </Link>
          </h3>
        <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p 
            dangerouslySetInnerHTML={{
              __html:  node.frontmatter.excerpt,
            }}
          />
        </section>
        </>
      )
    })}
  </>
  )
}

export const query = graphql`
query BlogIndexQuery {
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
  ){
    edges {
      node {
        frontmatter {
          title
          excerpt
          path
          date 
        }
      }
    }
  }
}
`
export default BlogIndex
