import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import { associations } from "../data/associations"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FFF7F3",
    padding: theme.spacing(5, 10, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 3, 5),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(6),
    },
    color: "#000000",
  },

  centerCls: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
}))

function Promoters({ className, ...rest }) {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query AssocQuery {
          associationImages: allFile(
            filter: { dir: { regex: "/images/assoc/i" } }
          ) {
            nodes {
              childImageSharp {
                fixed(height: 70, quality: 100) {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const associationImages = data.associationImages
        return (
          <div className={clsx(classes.root, className)} {...rest}>
            <Grid container>
              <Grid
                item
                xs={12}
                lg={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h5" gutterBottom align="center" style={{
                  marginBottom: "24px"
                }}>
                  Our mentors are associated with
                </Typography>
              </Grid>

              <Grid container>
                {associations.map((association, index) => {
                  const associationFileName = association["avatar"]
                  const associationImage = associationImages.nodes.find(
                    node =>
                      node.childImageSharp.fixed.originalName ===
                      associationFileName
                  )
                  return (
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={3}
                      lg={3}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      align="center"
                    >
                      <Img
                        alt={association["name"]}
                        fixed={associationImage.childImageSharp.fixed}
                        style={{
                          margin: "16px"
                        }}
                      ></Img>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </div>
        )
      }}
    />
  )
}

Promoters.propTypes = {
  className: PropTypes.string,
}

export default Promoters
