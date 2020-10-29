import React from "react"
import BootcampLayout from "../layouts/BootcampLayout"
import favicon from "../../static/favicon.ico"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Helmet } from "react-helmet"
import { createTheme } from "../theme"

import { ThemeProvider } from "@material-ui/core"
export default function Bootcamp() {
  return (
    <ThemeProvider theme={createTheme()}>
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Coding Junior Bootcamps</title>
          <link rel="canonical" href="https://codingjunior.org/bootcamps" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <CssBaseline />
        <BootcampLayout />
      </React.Fragment>
    </ThemeProvider>
  )
}
