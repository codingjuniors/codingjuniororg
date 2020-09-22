import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { domains } from "../data/domains"
import { Grid, Typography, Box } from "@material-ui/core"
import Domains from "./domains"
import Choices from "./choices"

const useStyles = makeStyles(theme => ({
  principleContent: {
    padding: theme.spacing(10, 5, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 3, 5),
    },
  },
}))

export default function Principles() {
  const classes = useStyles()

  return (
    <Grid container className={classes.principleContent}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          style={{
            marginBottom: "32px",
          }}
        >
          Courses designed minding <span style={{color: "#FF4C00"}}>THE FIRST PRINCIPLES </span>
        </Typography>
      </Grid>

      <Grid
        container
        style={{
          background: "#FFF7F3",
          borderRadius: "5px",
        }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Domains />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Choices />
        </Grid>
      </Grid>
    </Grid>
  )
}
