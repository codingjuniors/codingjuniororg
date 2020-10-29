import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 20, 3),
    backgroundColor: "#E9E9E9",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 3, 3),
    },
  },
  texts: {
    padding: theme.spacing(3, 0, 3, 6),
  },
  img: {
    borderRadius: "20px",
    height: "100%",
    width: "100%",
  },
}))

export default function ProjectCard() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify="space-between">
        <Grid item xs={10} className={classes.texts}>
          <Typography variant="h4" color="primary">
            Projects 1
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "18px", padding: "16px 0px 12px" }}
          >
            While VR is all about taking people into virtual worlds, AR is about
            bringing virtual.
          </Typography>
          <Typography variant="caption" color="primary" display="block">
            Know More
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <img
            alt=""
            src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg"
            className={classes.img}
          />
        </Grid>
      </Grid>
    </div>
  )
}
