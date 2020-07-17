import React from "react"
import { Link } from "gatsby"
import { StyledProfile } from '../styles/pages/home'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import ContactMe from '../components/ContactMe'
import Image from "../components/image"
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
