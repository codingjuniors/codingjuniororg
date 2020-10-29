import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/Hero/bootcampHero"
import CTA from "../components/cta/cta2"
import Team from "../components/team"
import Promoters from "../components/promoters"
import Courses from "../components/courses"
import Syllabus from "../components/bootcamp/syllabus"
import Projects from "../components/bootcamp/projects"
import React from "react"
import Principles from "../components/priciples"
import Recommendations from "../components/recommendations"
import Apply from "../components/apply"
import Discover from "../components/discover"

const BootcampLayout = ({ data }) => (
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
