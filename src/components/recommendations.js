import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Hidden,
} from "@material-ui/core"
import { StaticQuery, graphql } from "gatsby"

import { recommendations } from "../data/recommendations"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(10, 10, 10),
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
  card: {
    background: "#FFFBFA",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
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
    color: "#FF4C00",
  },
  avatarLarge: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
  },
  recommenderTitle: {
    color: "#FF4C00",
  },
  recommenderDetail: {
    color: "#9C9C9C",
    textAlign: "center",
  },
}))
export default function Recommendations({ recommendationsImages }) {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query RecommendQuery {
          recommendationsImages: allFile(
            filter: { dir: { regex: "/images/recommendations/i" } }
          ) {
            nodes {
              childImageSharp {
                fixed(height: 100, quality: 100) {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const recommendationsImages = data.recommendationsImages

        const grayQuote = recommendationsImages.nodes.find(
          node => node.childImageSharp.fixed.originalName === "grayQuote.png"
        )

        const highQuote = recommendationsImages.nodes.find(
          node => node.childImageSharp.fixed.originalName === "highQuote.png"
        )

        const topQuote = recommendationsImages.nodes.find(
          node => node.childImageSharp.fixed.originalName === "topQuote.png"
        )

        return (
          <Grid container className={classes.heroContent}>
            {/* Hero unit */}

            <Grid
              container
              style={{
                marginBottom: "50px",
              }}
            >
              <Grid item lg={11} md={11} sm={12}>
                <Typography variant="h2" gutterBottom>
                  <Box className={classes.text}>
                    What Do The Parents And Juniors
                  </Box>
                  <Box className={classes.textHighlight}>Say about Us</Box>
                </Typography>
              </Grid>

              <Hidden smDown>
                <Grid item lg={1} md={1} sm={1}>
                  <Img fixed={topQuote.childImageSharp.fixed}></Img>
                </Grid>
              </Hidden>
            </Grid>

            <Grid container spacing={4}>
              {recommendations.map((recommendation, index) => {
                const recommenderFileName = recommendation["avatar"]
                const recommenderImage = recommendationsImages.nodes.find(
                  node =>
                    node.childImageSharp.fixed.originalName ===
                    recommenderFileName
                )

                return (
                  <Grid key={index} item xs={12} sm={6} md={6} lg={3}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Img
                          fixed={
                            index % 2 === 0
                              ? grayQuote.childImageSharp.fixed
                              : highQuote.childImageSharp.fixed
                          }
                        ></Img>
                      </CardContent>

                      <CardContent className={classes.cardContent}>
                        <Box display="flex" justifyContent="center">
                          <Typography
                            variant="body2"
                            className={classes.recommenderDetail}
                          >
                            <Box m={1}>{recommendation.text}</Box>
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardContent className={classes.cardContent}>
                        <Box display="flex" alignItems="center">
                          <Avatar className={classes.avatarLarge}>
                            <Img
                              fixed={recommenderImage.childImageSharp.fixed}
                            ></Img>
                          </Avatar>
                          <Box display="flex" flexDirection="column">
                            <Typography>
                              <Box fontWeight="fontWeightBold">
                                {recommendation.name}
                              </Box>
                            </Typography>
                            <Typography>
                              <Box className={classes.recommenderTitle}>
                                {recommendation.title}
                              </Box>
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        )
      }}
    />
  )
}
