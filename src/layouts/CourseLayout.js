// src/layouts/index.js

import Header from "../components/header"
import Footer from "../components/footer"
import CTA from "../components/cta"
import React from "react"

const CourseLayout = ({ data }) => (
  <React.Fragment>
    <Header />
    <CTA />
    <Footer />
  </React.Fragment>
)

export default CourseLayout
