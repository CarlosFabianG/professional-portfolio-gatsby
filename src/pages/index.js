import React from "react"
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import ContactMe from '../components/ContactMe'
import SEO from "../components/seo"


const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Profile />
    <ContactMe />
  </>
)

export default IndexPage
