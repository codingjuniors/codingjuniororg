import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import { StaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

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
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
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
    height: "30px",
    backgroundColor: "#FF4C00",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "4px",
    height: "30px",
    width: "250px",
    padding: "0px 10px",
    marginRight: theme.spacing(1),
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
  background: {
    width: "100%",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
  },
  textField: {
    marginBottom: "16px",
  },
  btn: {
    textTransform: "none",
    height: "40px",
    width: "100px",
    background: "#FF4C00",
    "&:hover": {
      backgroundColor: "rgba(255,76,0,0.5)",
    },
  },
}))
export default function CTA() {
  const classes = useStyles()

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#FF4C00",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "yellow",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#717171",
        },
        "&:hover fieldset": {
          borderColor: "#000000",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#FF4C00",
        },
      },
    },
  })(TextField)

  return (
    <StaticQuery
      query={graphql`
        query CTAQuery {
          ctaImages: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              dir: { regex: "/images/cta/i" }
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
        const ctaImages = data.ctaImages

        const bgImage = ctaImages.nodes.find(
          node => node.childImageSharp.fluid.originalName === "cta_bg.png"
        )

        return (
          <BackgroundImage
            Tag="section"
            fluid={bgImage.childImageSharp.fluid}
            className={classes.background}
          >
            <Grid container className={classes.heroContent}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="h2"
                  className={classes.text}
                  gutterBottom
                  displayInline
                  align="center"
                >
                  <Box fontWeight="fontWeightBold">
                    Can’t Choose What’s Best For Junior?
                  </Box>
                </Typography>
              </Grid>

              <Grid container>
                <Grid item lg={6} md={6} sm={12}>
                  <Card
                    className={classes.card}
                    style={{
                      margin: "16px",
                      padding: "32px",
                      borderRadius: "5px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h3"
                        gutterBottom
                        style={{
                          marginBottom: "32px",
                        }}
                      >
                        <Box fontWeight="fontWeightBold">
                          Request a Consultation
                        </Box>
                      </Typography>

                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{
                          color: "#717171",
                          marginBottom: "24px",
                        }}
                      >
                        <Box>
                          Setup a Consultation call with our counsellor and
                          figure out what’s best for your champion.
                        </Box>
                      </Typography>

                      <form noValidate autoComplete="off">
                        <CssTextField
                          id="1"
                          className={classes.textField}
                          label="Parent’s Email"
                          variant="outlined"
                          fullWidth
                        />

                        <CssTextField
                          id="1"
                          className={classes.textField}
                          label="Parent’s Name"
                          variant="outlined"
                          fullWidth
                        />

                        <CssTextField
                          id="1"
                          className={classes.textField}
                          label="Junior’s Name"
                          variant="outlined"
                          fullWidth
                        />

                        <CssTextField
                          id="1"
                          className={classes.textField}
                          label="Your Mobile No."
                          variant="outlined"
                          fullWidth
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
                      </form>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  display="flex"
                  flexDirection="column"
                >
                  <Card
                    className={classes.card}
                    style={{
                      margin: "16px 16px 32px",
                      padding: "32px",
                      borderRadius: "5px",
                      background: "#FFFFFF",
                      color: "#000000",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h3"
                        style={{
                          marginBottom: "32px",
                        }}
                      >
                        <Box fontWeight="fontWeightBold">Where To Start?</Box>
                      </Typography>

                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{
                          color: "#717171",
                          marginBottom: "24px",
                        }}
                      >
                        <Box>
                          Let your junior take a basic test with interest,
                          preference, logic and reasoning based questions and
                          Get Course Recommendation.
                        </Box>
                      </Typography>

                      <Typography
                        variant="body1"
                        style={{
                          color: "#FF4C00",
                        }}
                      >
                        <Box fontWeight="fontWeightBold">Take a Test</Box>
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    className={classes.card}
                    style={{
                      margin: "16px",
                      padding: "32px",
                      borderRadius: "5px",
                      background: "#000000",
                      color: "#FFFFFF",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h3"
                        style={{
                          marginBottom: "32px",
                        }}
                      >
                        <Box fontWeight="fontWeightBold">
                          Wanna Try A Free Class ?
                        </Box>
                      </Typography>

                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{
                          color: "#BABABA",
                          marginBottom: "24px",
                        }}
                      >
                        <Box>
                          Get an overview of Coding Juniors with the orientation
                          and a 3 days class trial. Let your junior decide the
                          rythm.
                        </Box>
                      </Typography>

                      <Typography
                        variant="body1"
                        style={{
                          color: "#FF4C00",
                        }}
                      >
                        <Box fontWeight="fontWeightBold">Try Now !</Box>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </BackgroundImage>
        )
      }}
    />
  )
}
