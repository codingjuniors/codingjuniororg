import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, CardMedia, Box } from "@material-ui/core"

import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  domainsContent: {
    padding: theme.spacing(5, 5, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 3, 5),
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
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
    color: "#FFFFFF",
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(4, 0, 2),
  },

  avatarGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
  },
}))

export default function Choices() {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query ChoiceQuery {
          choiceImages: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              dir: { regex: "/images/choices/i" }
            }
          ) {
            nodes {
              childImageSharp {
                fluid(maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const choiceImages = data.choiceImages

        const leftImage = choiceImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "left.png"
        )

        const rightImage = choiceImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "right.png"
        )

        return (
          <Grid container className={classes.domainsContent}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                style={{
                  marginBottom: "24px",
                }}
              >
                Make the Best Choice for Your Junior
              </Typography>

              <Typography
                variant="body1"
                align="center"
                style={{
                  marginBottom: "24px",
                  color: "#FF4C00",
                }}
              >
                <Box>
                  Give your junior chance to try the best, easing the journey
                </Box>
                <Box>to get him/her closer to their dream </Box>
              </Typography>
            </Grid>

            <Grid container lg={12} md={12} sm={12} xs={12}>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.avatarGrid}
              >
                <CardMedia
                  className={classes.cardMedia}
                  title="Cover pic"
                  component={Img}
                  fluid={leftImage.childImageSharp.fluid}
                />
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.avatarGrid}
              >
                <CardMedia
                  className={classes.cardMedia}
                  title="Cover pic"
                  component={Img}
                  fluid={rightImage.childImageSharp.fluid}
                />
              </Grid>
            </Grid>
          </Grid>
        )
      }}
    />
  )
}
