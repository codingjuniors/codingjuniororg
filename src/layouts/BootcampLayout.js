import React from "react"
import Apply from "../components/apply"
import Projects from "../components/bootcamp/projects"
import Syllabus from "../components/bootcamp/syllabus"
import CTA from "../components/cta/cta2"
import Discover from "../components/discover"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/Hero/bootcampHero"

const BootcampLayout = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <Syllabus />
    <Projects />
    <Apply />
    <Discover />
    <CTA />
    <Footer />
  </React.Fragment>
)

export default BootcampLayout
