import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { domains } from "../data/domains"
import { Grid, Typography, Box } from "@material-ui/core"

import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  domainsContent: {
    background: "",
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
  },
}))

export default function Domains() {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query DomainsQuery {
          domainImages: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              dir: { regex: "/images/domains/i" }
            }
          ) {
            nodes {
              childImageSharp {
                fixed(width: 153, height: 153, quality: 100) {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => (
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
              We Start from Zero
            </Typography>

            <Typography
              variant="body1"
              align="center"
              style={{
                marginBottom: "24px",
                color: "#FF4C00",
              }}
            >
              <Box> Not assuming the basics to be clear we include </Box>
              <Box>CODING with MATHS &amp; LOGIC BUILDING into our courses. </Box>
            </Typography>


            <Typography
              variant="h3"
              align="center"
              style={{
                marginBottom: "24px",
                color: "#ABABAB",
              }}
            >
              Courses Focused On
            </Typography>
          </Grid>

          <Grid container lg={12}>
            {domains.map((domain, index) => {
              const domainFileName = domain["img"]
              const domainImage = data.domainImages.nodes.find(
                node =>
                  node.childImageSharp.fixed.originalName === domainFileName
              )

              return (
                <Grid
                  item
                  lg={2}
                  md={4}
                  sm={6}
                  xs={6}
                  className={classes.avatarGrid}
                >
                  <Img
                    fixed={domainImage.childImageSharp.fixed}
                    className={classes.avatarLarge}
                  ></Img>

                  <Typography
                    align="center"
                    color="textPrimary"
                    display="block"
                    variant="body2"
                  >
                    {domain.title}
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      )}
    />
  )
}
