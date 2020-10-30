import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import React from "react"
import buttonData from "../data/bootcamp/apply"
import Btn from "./btn"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 10),
    backgroundPositionY: "center",
    backgroundPositionX: "center",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(10, 3),
    },
  },
  box: {
    backgroundColor: "#000",
    color: "#fff",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "4px",
    height: "40px",
    padding: "10px 26px 34px",
    margin: theme.spacing(0, 2, 3, 0),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: theme.spacing(1, 1, 1, 0),
      padding: "10px 5px 34px",
    },
  },
  container: {
    backgroundColor: "rgb(210,210,210, 0.8)",
    padding: "28px 28px 50px",
    margin: "50px 0px",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  },
  img: {
    height: "21.59px",
    width: "auto",
    color: "#fff",
    marginRight: "12px",
  },
  avatar: {
    color: "#FF4C00",
    height: "70px",
    width: "52px",
    padding: "6px 2px",
    marginLeft: "12px",
    backgroundColor: "#EEEEEE",
    borderRadius: "52px",
  },
  extraPadding: {
    padding: theme.spacing(10, 0),
  },
}))

export default function Apply() {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query BootcampBack {
          heroImages: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              dir: { regex: "/images/bootcamp/i" }
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
            nodes {
              childImageSharp {
                fixed(width: 25, height: 22, quality: 100) {
                  ...GatsbyImageSharpFixed
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
          node => node.childImageSharp.fluid.originalName === "back2.png"
        )

        return (
          <BackgroundImage
            fluid={bgImage.childImageSharp.fluid}
            className={classes.root}
          >
            <Typography
              align="center"
              variant="h2"
              style={{ fontWeight: 800, color: "#000" }}
            >
              Code Most Out Of Our Limited bootcamp Series
            </Typography>
            <Box className={classes.container}>
              <Box flexDirection="row" mt={4} mb={4}>
                {buttonData.map((data, index) => {
                  const nameOfImage = data["img"]
                  const image = heroImages.nodes.find(
                    node =>
                      node.childImageSharp.fixed.originalName === nameOfImage
                  )

                  return (
                    <Box className={classes.box}>
                      <Img
                        fixed={image.childImageSharp.fixed}
                        className={classes.img}
                      ></Img>
                      <Typography
                        display="inline"
                        style={{ fontWeight: 400, fontSize: "16px" }}
                      >
                        <span style={{ fontWeight: 600, fontSize: "17px" }}>
                          {data["text"].split(" ")[0]}{" "}
                        </span>
                        {data["text"].split(" ").slice(1).join(" ")}
                      </Typography>
                    </Box>
                  )
                })}
              </Box>
              <Grid container>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="h4"
                    color="textSecondary"
                    style={{ paddingBottom: "14px" }}
                  >
                    Starts 13 November’20
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{ paddingBottom: "16px" }}>
                  <Typography
                    display="inline"
                    variant="h4"
                    color="textSecondary"
                  >
                    Schedule
                  </Typography>
                  <Box display="inline" className={classes.avatar}>
                    Sun
                  </Box>
                  <Box
                    display="inline"
                    className={classes.avatar}
                    style={{ paddingRight: "3px", paddingLeft: "3px" }}
                  >
                    Sat
                  </Box>
                </Grid>
                <Grid item xs={12} sm={2} md={2} />
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={3}
                  style={{ paddingBottom: "14px" }}
                >
                  <Typography
                    display="inline"
                    variant="h4"
                    color="textSecondary"
                  >
                    Registration Fee
                  </Typography>
                  <Typography display="inline" variant="h4" color="primary">
                    {"   "}₹ 1500/-
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid style={{ textAlign: "center" }} xs={12}>
              <Btn title="Register Now" />
            </Grid>
          </BackgroundImage>
        )
      }}
    ></StaticQuery>
  )
}
