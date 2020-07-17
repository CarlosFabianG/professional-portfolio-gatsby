/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
 

  return (
    <>
    <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 2rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
