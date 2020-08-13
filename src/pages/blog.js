import React from "react"
import { Link, graphql } from "gatsby"
import { formatPostDate } from '../utils/helpers'
import styled from 'styled-components'
import SEO from "../components/seo"
import Image from '../components/image'

const StyledIntro = styled.div`
  margin-bottom: 80px;
  margin-top: 50px;
  font-family: 'Public Sans', sans-serif;
  display: flex;
  .img-container {
    width: 60px;
    height: 60px;
    border-radius: 80%;
    margin-right: 15px;
    overflow: hidden;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
  @media screen and (min-width: 768px){
    margin-left: 10vw;
  }
`

const StyledIndex = styled.div`
  font-family: 'Public Sans', sans-serif;
  margin-bottom: 50px;
  margin-left: 10vw;
  header {
    h3 {
      color: #5FB4A2;
      font-size: 32px;
      font-weight: 900;
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
  @media screen and (min-width: 768px){
    margin-left: 10vw;
  }
`

const BlogIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark

  return(
    <>
    <SEO title="Blog" />
    <StyledIntro>
      <div className="img-container">
        <Image  name="carlos-fabian-profile.JPG"/> 
      </div> 
      <div>
        <p>Bienvenido a mi Blog.</p> 
        <p>Aquí comparto lo que aprendo de código.</p>
      </div>
      
    </StyledIntro>
    
    {edges.map(({ node }) => {
      const title = node.frontmatter.title
      return (
        <StyledIndex>
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
        </StyledIndex>
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
          date(formatString: "MMMM DD, YYYY")
          title
          excerpt
          path
        }
      }
    }
  }
}
`
export default BlogIndex
