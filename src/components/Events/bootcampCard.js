import React from "react"
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Card,
  Grid,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "40px 40px 0px 0px",
    padding: theme.spacing(3),
    color: "#000",
  },
  heading: {
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "32px",
  },
  box: {
    padding: "5px 8px",
    margin: "8px 10px 0px 0px",
    borderRadius: "4px",
    whiteSpace: "no-wrap",
  },
  grid: {
    marginTop: "-10px",
  },
  img: {
    marginRight: theme.spacing(6),
  },
}))

export default function BootCampCard() {
  const classes = useStyles()

  return (
    <Card elevation={16} className={classes.root}>
      <Typography variant="h3" className={classes.heading}>
        Java Bootcamp
      </Typography>
      <Grid container spacing={10} className={classes.grid}>
        <Grid item xs={2} className={classes.img}>
          <img src="/images/choices/left.png" height="145px" />
        </Grid>
        <Grid item xs={9}>
          <Box style={{ display: "flex" }}>
            <Box display="inline" style={{ flexGrow: 1 }} xs={12}>
              <Box
                display="inline"
                className={classes.box}
                style={{
                  backgroundColor: "#ff4c00",
                }}
              >
                5 sessions
              </Box>
              <Box
                display="inline"
                className={classes.box}
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                For 5-7 Graders
              </Box>
              <Box
                display="inline"
                className={classes.box}
                style={{
                  backgroundColor: "#E5E5E5",
                  color: "#ff4c00",
                }}
              >
                Free
              </Box>
            </Box>
            <Box style={{ marginTop: "-45px" }}>
              <Typography
                align="right"
                color="primary"
                variant="h5"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                From 13 Sep ‘20
              </Typography>
              <Typography align="right">On Weekends</Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            color="primary"
            style={{ margin: "12px 0px 8px" }}
          >
            Projects
          </Typography>
          <Box>
            {[0, 1, 2, 6, 2, 1].map((item, index) => {
              return (
                <Box
                  display="inline-block"
                  className={classes.box}
                  style={{
                    backgroundColor: "#FEEBE2",
                  }}
                >
                  Hospital Management
                </Box>
              )
            })}
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}
