import React from "react"
import { Link, graphql } from "gatsby"
import { formatPostDate } from '../utils/helpers'
import styled from 'styled-components'
import SEO from "../components/seo"

const StlyedIndex = styled.div`
  font-family: 'Public Sans', sans-serif;
  header {
    h3 {
      color: #5FB4A2;
      font-size: 32px;
      margin-bottom: 5px;
      a {
        text-decoration: none;
        color: #5FB4A2;
      }
    }
    small {
      color: #33323D;
      opacity: 50%;
    }
  }
  section {
    p {
      color: #33323D;
      font-size: 14px;
    }
  }
`

const BlogIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark

  return(
    <>
    <SEO title="Blog" />
    <h1>Hola!</h1>
    <p>Bienvenido a mi blog en donde comparto lo que aprendo de código</p>
    
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
        <small>
          {formatPostDate(node.frontmatter.date)}
          </small>
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
