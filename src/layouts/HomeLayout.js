// src/layouts/index.js

import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/Hero/mainHero"
import CTA from "../components/cta/cta"
import Team from "../components/team"
import Promoters from "../components/promoters"
import Courses from "../components/courses"
// import WatchVideosView from "../components/WatchVideos";
// import CTA from "../components/cta"
import React from "react"
// import { graphql } from "gatsby"
import Principles from "../components/priciples"
import Recommendations from "../components/recommendations"

const HomeLayout = ({ data }) => (
  <React.Fragment>
    <Header />
    <Hero />
    <Promoters />
    <Principles />
    <Courses />
    <Team />
    <Recommendations />
    <CTA />
    <Footer />
  </React.Fragment>
)

export default HomeLayout
