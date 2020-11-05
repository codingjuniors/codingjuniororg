import { Box, Card, Grid, Hidden, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(20, 3, 8, 10),
    border: " 1px solid #000000",
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
    height: "184.06px",
    width: "184.06px",
    color: "#FF4C00",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    borderRadius: "24px",
    transform: "rotate(-9.87deg)",
  },
  cardi: {
    marginTop: "12px",
    marginLeft: "12.5px",
    height: "184.06px",
    width: "184.06px",
    color: "#FF4C00",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    borderRadius: "24px",
  },
  backcard: {
    marginLeft: "20px",
    height: "195.06px",
    width: "195.06px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    borderRadius: "24px",
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
  box: {
    backgroundColor: "#000",
    color: "#fff",
    display: "inline",
    borderRadius: "4px",
    height: "40px",
    width: "300px",
    padding: "14px 26px 12px",
    margin: theme.spacing(0, 2, 0, 0),
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: theme.spacing(1, 0, 2, 0),
      padding: "14px 12px 40px",
      display: "block",
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
    color: "#215518",
    marginBottom: theme.spacing(3),
    lineHeight: 1.5,
    fontSize: "65px",
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
        query BootcampHeroQuery {
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
          }
        }
      `}
      render={data => {
        const heroImages = data.heroImages

        const bgImage = heroImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "bootcampHero.png"
        )

        const backgroundFluidImageStack = [
          `linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.5) 10.23%, rgba(189, 255, 0, 0) 100%)`,
          bgImage.childImageSharp.fluid,
        ].reverse()

        return (
          <BackgroundImage
            Tag="section"
            fluid={backgroundFluidImageStack}
            className={classes.background}
          >
            <Grid
              container
              className={classes.heroContent}
              justify="space-between"
            >
              <Grid item lg={9} md={9} sm={12}>
                <Grid item lg={11} md={11} sm={12}>
                  <Typography variant="h1" className={classes.text}>
                    <Box fontWeight={700}>Java Bootcamp</Box>
                  </Typography>
                  <Typography
                    variant="h2"
                    className={classes.textBig}
                    gutterBottom
                    displayInline
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        style={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: "20px",
                        }}
                      >
                        How Would He/She Know what he/she is intrested in??
                      </Typography>
                    </Box>
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    By Trying everything that comes in way, no?
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    paragraph
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    So Give your junior a chance to cover as much by holding
                    your hands
                  </Typography>

                  <Box flexDirection="row" mt={8}>
                    <Box className={classes.box}>
                      <Typography
                        display="inline"
                        style={{ fontSize: "20px", fontWeight: 500 }}
                      >
                        For Grades <span style={{ color: "#FF4C00" }}>5-7</span>
                      </Typography>
                    </Box>
                    <Box className={classes.box}>
                      <Typography
                        display="inline"
                        style={{ fontSize: "20px", fontWeight: 500 }}
                        noWrap
                      >
                        Duration{" "}
                        <span style={{ color: "#FF4C00" }}>
                          1 month (4 sessions)
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Hidden xsDown>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={12}
                  style={{
                    alignSelf: "flex-end",
                  }}
                >
                  <Card className={classes.backcard}>
                    <Card className={classes.cardi}></Card>
                    <Card
                      className={classes.card}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <div style={{ padding: "36px 0px 30px 24px" }}>
                        <Typography variant="h2">Starts</Typography>
                        <Typography variant="h2">13 Nov</Typography>
                        <Typography variant="h4">On Weekends</Typography>
                      </div>
                    </Card>
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
