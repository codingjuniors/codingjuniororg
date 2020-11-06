import React, { useState, useEffect, Fragment } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"
import loadergif from "../../static/loading-opaque.gif"

import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "../theme"
import EventsLayout from "../layouts/EventsLayout"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faEnvelope)

// const history = createBrowserHistory();

function Loader() {
  return (
    <Fragment>
      <img
        src={loadergif}
        alt="..."
        style={{ margin: "auto", display: "block", width: "60%" }}
      />
    </Fragment>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  library.add(fab)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 10)
  }, [])

  if (!loaded) {
    return <Loader />
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Events Coding Junior</title>
          <link rel="canonical" href="https://codingjunior.org/events" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <CssBaseline />
        <BrowserRouter>
          <EventsLayout />
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  )
}
