/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"


const Wrapper = styled.div`
        margin: 0 auto;
        max-width: 960;
        padding: 0 2rem;
        @media screen and (min-width: 1024px){
          padding: 0 2.4rem;
        }
        @media screen and (min-width: 1024px){
          padding: 0 12vw;
        }
`


const Layout = ({ children }) => {
 
  return (
    <>
    <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
