import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import ProjectCard from "../projectCard"

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(15),
  },
  extraPadding: {
    padding: theme.spacing(15, 0, 7, 0),
  },
}))

function Projects() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        color="textSecondary"
        align="center"
        variant="h2"
        className={classes.extraPadding}
      >
        How Are You Going to Use What you Learn?
      </Typography>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects
