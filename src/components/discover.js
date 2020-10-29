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
import { StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(19, 20),
    backgroundColor: "#E9E9E9",
    borderRadius: "20px",
    color: "#fff",
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

export default function Discover() {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query DiscoverBack {
          heroImages: allFile(
            filter: {
              extension: { regex: "/(png)/" }
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
          }
        }
      `}
      render={data => {
        const heroImages = data.heroImages

        const bgImage = heroImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "discover.png"
        )

        return (
          <BackgroundImage
            fluid={bgImage.childImageSharp.fluid}
            className={classes.root}
          >
            <Typography
              align="center"
              variant="h2"
              style={{ fontSize: "36px" }}
            >
              Discover Coding Junior Courses
            </Typography>
            <Typography
              align="center"
              display="block"
              style={{ fontSize: "20px", padding: "42px 0px" }}
            >
              Specially Designed, keeping in mind the mental growth of the
              juniors
            </Typography>
            <Link to="/course" style={{ textDecoration: "none" }}>
              <Typography align="center" variant="h2" color="primary">
                Visit Our Courses Catalog &gt;
              </Typography>
            </Link>
          </BackgroundImage>
        )
      }}
    ></StaticQuery>
  )
}
