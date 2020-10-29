import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Hidden,
  GridList,
  GridListTile,
} from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(0, 10, 10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 3, 10),
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  gridList: {
    flexWrap: "nowrap",
    width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  card: {
    backgroundColor: "#FFF8F4",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1)",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  chipActions: {
    display: "block",
  },
  chip: {
    margin: "8px 0 3px 8px",
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0",
  },
  btn: {
    textTransform: "none",
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#FFF",
  },
  paddingCls: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingClsxs: {
    padding: 0,
  },
  iconSize: {
    fontSize: "32px",
  },
  text: {
    color: "#000",
  },
  textHighlight: {
    color: "#A60000",
  },
  bulletPoints: {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: 400,
    color: "#616161",
  },
}))

export default function Recommendations({ recommendationsImages }) {
  const classes = useStyles()

  const large = useMediaQuery("(min-width:1100px)")
  const medium = useMediaQuery("(min-width:900px)")
  const small = useMediaQuery("(min-width:600px)")

  let topMargin = 0
  let bottomMargin = 0

  return (
    <Grid container className={classes.heroContent}>
      <Grid container spacing={4}>
        <GridList
          id="recommendation_grid"
          className={classes.gridList}
          cols={large ? 4 : medium ? 3.5 : small ? 2.7 : 1.4}
        >
          {[1, 2, 3, 4, 5].map((session, index) => {
            return (
              <GridListTile
                className="recommendation_slide"
                key={index}
                style={{
                  margin: `20px`,
                  borderRadius: "5px",
                  height: "auto",
                  overflow: "hidden",
                  boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h4" color="primary">
                      Session {`${session}`}
                    </Typography>
                  </CardContent>

                  <CardContent className={classes.cardContent}>
                    <Typography
                      style={{
                        fontWeight: 500,
                        fontSize: "20px",
                        color: "#000",
                      }}
                    >
                      The First topic of Java Bootcamp
                    </Typography>
                  </CardContent>

                  <CardContent className={classes.cardContent}>
                    <Typography
                      style={{
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontWeight: 400,
                        color: "#616161",
                      }}
                    >
                      So Give your junior a chance to cover as much by holding
                      your fingers
                    </Typography>
                  </CardContent>

                  <CardContent className={classes.cardContent}>
                    <ul>
                      <li>
                        <Typography className={classes.bulletPoints}>
                          Subtopic For the javabootcamp.
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.bulletPoints}>
                          Subtopic For the javabootcamp.
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.bulletPoints}>
                          Subtopic For the javabootcamp.
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.bulletPoints}>
                          Subtopic For the javabootcamp.
                        </Typography>
                      </li>
                    </ul>
                    <Typography
                      align="right"
                      style={{ fontSize: "12px", fontWeight: 500 }}
                      color="primary"
                    >
                      Show Less ^
                    </Typography>
                  </CardContent>

                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" display="inline">
                      Scheduled On
                    </Typography>
                    <Typography variant="h6" display="inline" color="primary">
                      {" "}
                      13 Nov’20
                    </Typography>
                    <Box />
                    <Typography
                      variant="h6"
                      display="inline"
                      style={{ color: "#9A9A9A" }}
                    >
                      Duration
                    </Typography>
                    <Typography
                      variant="h6"
                      display="inline"
                      style={{ color: "#9A9A9A" }}
                    >
                      {" "}
                      2 hours
                    </Typography>
                  </CardContent>
                </Card>
              </GridListTile>
            )
          })}
        </GridList>
      </Grid>
    </Grid>
  )
}
