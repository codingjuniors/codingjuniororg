import { ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"
import EventsLayout from "../layouts/EventsLayout"
import { createTheme } from "../theme"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faEnvelope)

export default function Bootcamp() {
  library.add(fab)

  return (
    <ThemeProvider theme={createTheme()}>
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bootcamps Coding Junior</title>
          <link rel="canonical" href="https://codingjunior.org/bootcamps" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <EventsLayout />
        <CssBaseline />
      </React.Fragment>
    </ThemeProvider>
  )
}
