import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Grid,
  Typography,
  Card,
  Hidden,
  Input,
  Box,
} from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(20, 10, 15),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(15, 3, 15),
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
    height: "40px",
    width: "100px",
    "&:hover": {
      backgroundColor: "rgba(255,76,0,0.5)",
    },
    backgroundColor: "#FF4C00",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: theme.spacing(1, 0, 1, 0),
    },
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "4px",
    height: "40px",
    width: "300px",
    padding: "0px 10px",
    margin: theme.spacing(0, 2, 0, 0),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: theme.spacing(1, 0, 1, 0),
    },
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
    color: "#FFFFFF",
    marginBottom: theme.spacing(3),
    lineHeight: 1.5,
  },
  textBig: {
    color: "#FFFFFF",
    marginBottom: theme.spacing(5),
    lineHeight: 1.5,
  },

  background: {
    width: "100%",
    backgroundPosition: "bottom center",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
  },
}))
export default function Hero({ heroImages }) {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query HeroQuery {
          heroImages: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              dir: { regex: "/images/hero/i" }
            }
          ) {
            nodes {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const heroImages = data.heroImages

        const bgImage = heroImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "hero_bg.png"
        )

        const actorImage = heroImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "hero_actor.png"
        )

        return (
          <BackgroundImage
            Tag="section"
            fluid={bgImage.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            className={classes.background}
          >
            <Grid container className={classes.heroContent}>
              <Grid item lg={8} md={8} sm={12}>
                <Grid item lg={8} md={8} sm={12}>
                  <Typography variant="h3" className={classes.text}>
                    <Box fontWeight={500}>Courses for Grade 5-12</Box>
                  </Typography>
                  <Typography
                    variant="h2"
                    className={classes.textBig}
                    gutterBottom
                    displayInline
                  >
                    <Box>
                      Get Your <span style={{ color: "#FF4C00" }}>Junior</span>{" "}
                      Ready to Code for Future
                    </Box>
                  </Typography>

                  <Hidden mdUp>
                    <Card className={classes.card}>
                      <Img fluid={actorImage.childImageSharp.fluid}></Img>
                    </Card>
                  </Hidden>

                  <Typography
                    variant="h3"
                    className={classes.text}
                    gutterBottom
                    paragraph
                  >
                    <Box fontWeight={500}>Consult with our counsellor</Box>
                    <Box
                      style={{
                        color: "#FF4C00",
                      }}
                      fontWeight={500}
                    >
                      Whats to choose for your junior?
                    </Box>
                  </Typography>

                  <Box flexDirection="row">
                    <Input
                      disableUnderline={true}
                      className={classes.input}
                      placeholder="youremail@example.com"
                    />
                    <Button
                      className={classes.btn}
                      variant="contained"
                      component="a"
                      href="https://github.com/codeforcauseorg/pledge#steps-to-take-the-pledge"
                      color="primary"
                      target="_blank"
                    >
                      <Typography variant="body1">Submit</Typography>
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              <Hidden smDown>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Card
                    className={classes.card}
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      height: "200px",
                    }}
                  >
                    <Img fluid={actorImage.childImageSharp.fluid}></Img>
                  </Card>
                </Grid>
              </Hidden>
            </Grid>
          </BackgroundImage>
        )
      }}
    />
  )
}
