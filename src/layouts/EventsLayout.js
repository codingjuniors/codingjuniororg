import { Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Hero from "../components/Hero/EventsHero"
import BootCampCard from "../components/Events/bootcampCard"
import Filter from "../components/Events/filter"
import DiscoverCourse from "../components/Events/DiscoverCourses"
import Discover from "../components/discover"
import CTA from "../components/cta/cta2"
import Footer from "../components/footer"
import Header from "../components/header"

const useStyles = makeStyles(theme => ({
  root: {},
  major: {
    color: "#000",
    margin: theme.spacing(18, 0),
  },
}))

export default function EventsLayout() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />
      <Hero
        title="Bootcamps & Webinars"
        subtitle="Learn The Exciting New tech. through Our Bootcamps"
      />
      <Grid container className={classes.major}>
        <Grid item sm={3}>
          <Filter />
        </Grid>
        <Grid item sm={9}>
          <Typography variant="h2">Our Bootcamps For Juniors</Typography>
          <BootCampCard />
          <BootCampCard />
          <BootCampCard />
        </Grid>
      </Grid>
      <DiscoverCourse />
      <Discover />
      <CTA />
      <Footer />
    </React.Fragment>
  )
}
