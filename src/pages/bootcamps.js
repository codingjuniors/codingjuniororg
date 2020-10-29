import React, { useState, useEffect, Fragment } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"

import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "../theme"
import BootcampLayout from "../layouts/BootcampLayout"

const Course = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Coding Junior</title>
          <link rel="canonical" href="https://codingjunior.org/" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <CssBaseline />
        <BrowserRouter>
          <BootcampLayout />
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Course
