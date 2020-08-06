import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import SEO from "../components/seo"

const StlyedIndex = styled.div`
  font-family: 'Public Sans', sans-serif;
  header {
    h3 {
      color: #5FB4A2;
      font-size: 40px;
      margin-bottom: 15px;
      a {
        text-decoration: none;
        color: #5FB4A2;
      }
    }
  }
  section {
    p {
      color: #33323D;
    }
  }
`

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
        <StlyedIndex>
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
        </StlyedIndex>
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
