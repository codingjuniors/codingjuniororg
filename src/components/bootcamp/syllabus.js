import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import SessionCard from "../sessionCard"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#F0F0F0",
    paddingBottom: theme.spacing(10),
  },
  extraPadding: {
    padding: theme.spacing(15, 0, 10, 0),
  },
}))

function Syllabus() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        color="textSecondary"
        align="center"
        variant="h2"
        className={classes.extraPadding}
      >
        Topics We Will Be Covering
      </Typography>
      <SessionCard />
    </div>
  )
}

export default Syllabus
