import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ParallaxSlide from '@mui-treasury/components/slide/parallax'
import PropTypes from 'prop-types'
import {
  Grid,
  Typography,
  Tab,
  Tabs,
  Box,
  Card,
  CardContent,
  Chip,
} from '@material-ui/core'
import { insideTriangleTabsStylesHook } from '@mui-treasury/styles/tabs'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    padding: theme.spacing(10, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10),
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '12px',
  },
  cardMedia: {
    width: '100%',
    height: 'auto',
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {},
  chipActions: {
    display: 'block',
  },
  chip: {
    margin: '8px 0 3px 8px',
  },
  extraMargin: {
    marginTop: '15px',
    marginBottom: '0',
  },
  btn: {
    textTransform: 'none',
  },
  paddingCls: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  paddingClsxs: {
    padding: 0,
  },
  iconSize: {
    fontSize: '32px',
  },
  text: {
    color: '#FFFFFF',
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(4, 0, 2),
  },

  avatarGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
  },

  slide: {
    perspective: 0, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative',
  },
  background: {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
  },
}))

export default function Courses() {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:500px)')

  const tabsStyles = insideTriangleTabsStylesHook.useTabs()
  const tabItemStyles = insideTriangleTabsStylesHook.useTabItem({
    bgColor: '#FF4C00',
  })

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <StaticQuery
      query={graphql`
        query jsonData {
          foundation: allFoundationYaml {
            nodes {
              domain
              level
              difficulty
              duration
              slides {
                heading
                image
                subheading
              }
              tags
              title
            }
          }
          advanced: allAdvancedYaml {
            nodes {
              domain
              level
              difficulty
              duration
              slides {
                heading
                image
                subheading
              }
              tags
              title
            }
          }
          expert: allExpertYaml {
            nodes {
              domain
              level
              difficulty
              duration
              slides {
                heading
                image
                subheading
              }
              tags
              title
            }
          }

          slideImages: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              dir: { regex: "/images/swipes/i" }
            }
          ) {
            nodes {
              childImageSharp {
                fluid(maxHeight: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const foundation = data.foundation.nodes
        const advanced = data.advanced.nodes
        const expert = data.expert.nodes

        console.log(data.slideImages)

        return (
          <Grid container className={classes.root}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="h1"
                align="center"
                color="textPrimary"
                style={{
                  marginBottom: '20px',
                }}
              >
                Explore Our Upcoming Courses
              </Typography>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography
                variant="body1"
                align="center"
                color="textPrimary"
                style={{
                  marginBottom: '30px',
                  color: '#848484',
                }}
              >
                Our courses are designed according to his/her mental growth.
                Taking junior’s school as standard the checkout the courses
                below.
              </Typography>
            </Grid>

            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h1"
                align="center"
                style={{
                  marginBottom: '50px',
                  color: '#FF4C00',
                }}
              >
                Junior’s Class?
              </Typography>
            </Grid>

            <Grid container>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                align="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="Tabs"
                  centered={true}
                  variant={matches ? 'standard' : 'scrollable'}
                  scrollButtons="auto"
                  classes={tabsStyles}
                  style={{
                    marginBottom: '48px',
                  }}
                >
                  <Tab
                    classes={tabItemStyles}
                    label={
                      <Fragment>
                        <Typography variant="h5">
                          <Box fontWeight={600}>Foundation</Box>
                        </Typography>
                        <Typography variant="h6">
                          <Box>Grade (5-6)</Box>
                        </Typography>
                      </Fragment>
                    }
                    disableRipple={true}
                  />
                  <Tab
                    classes={tabItemStyles}
                    label={
                      <Fragment>
                        <Typography variant="h5">
                          <Box fontWeight={600}>Advanced</Box>
                        </Typography>
                        <Typography variant="h6">
                          <Box>Grade (7-9)</Box>
                        </Typography>
                      </Fragment>
                    }
                    disableRipple={true}
                  />
                  <Tab
                    classes={tabItemStyles}
                    label={
                      <Fragment>
                        <Typography variant="h5">
                          <Box fontWeight={600}>Expert</Box>
                        </Typography>
                        <Typography variant="h6">
                          <Box>Grade (10+)</Box>
                        </Typography>
                      </Fragment>
                    }
                    disableRipple={true}
                  />
                </Tabs>

                <TabPanel value={value} index={0}>
                  {foundation.map((course, index) => {
                    return (
                      <Grid id={course.id} item xs={12} sm={6} md={4} lg={4}>
                        <CourseCard
                          course={course}
                          slideImages={data.slideImages}
                        />
                      </Grid>
                    )
                  })}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {advanced.map((course, index) => {
                    return (
                      <Grid id={course.id} item xs={12} sm={6} md={4} lg={4}>
                        <CourseCard
                          course={course}
                          slideImages={data.slideImages}
                        />
                      </Grid>
                    )
                  })}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {expert.map((course, index) => {
                    return (
                      <Grid id={course.id} item xs={12} sm={6} md={4} lg={4}>
                        <CourseCard
                          course={course}
                          slideImages={data.slideImages}
                        />
                      </Grid>
                    )
                  })}
                </TabPanel>
              </Grid>
            </Grid>
          </Grid>
        )
      }}
    />
  )
}

const CourseCard = ({ course, slideImages }) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.card}
      style={{
        background: '#FFFCFB',
        maxWidth: '350px',
      }}
    >
      <CardContent className={classes.cardContent}>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            style={{
              margin: '8px 0px 0px',
            }}
          >
            <Typography
              align="left"
              variant="body2"
              style={{
                width: '50%',
                color: '#0085FF',
              }}
            >
              {course.difficulty}
            </Typography>
            <Typography
              align="right"
              variant="body2"
              style={{
                width: '50%',
              }}
            >
              <Box fontWeight={600}>{course.level}</Box>
            </Typography>
          </Box>

          <Typography
            variant="h5"
            align="left"
            style={{
              marginBottom: '16px',
              color: '#FF4C00',
            }}
          >
            {course.domain}
          </Typography>

          <Typography variant="h4" align="left">
            {course.title}
          </Typography>
        </Box>
      </CardContent>

      <ParallaxCarousel slides={course.slides} slideImages={slideImages} />

      <CardContent className={classes.cardContent}>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            style={{
              marginTop: '4px 0px',
            }}
          >
            <Typography
              style={{
                marginRight: '8px',
                color: '#A3A3A3',
              }}
            >
              Duration
            </Typography>
            <Typography>{course.duration}</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            style={{
              marginTop: '4px 0px',
            }}
          >
            <Typography
              style={{
                marginRight: '8px',
                color: '#A3A3A3',
              }}
            >
              Upcoming
            </Typography>
            <Typography>No upcoming</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            style={{
              marginTop: '16px',
            }}
          >
            {course.tags.map((tag, index) => (
              <Chip
                label={
                  <Typography
                    variant="body2"
                    style={{
                      color: '#A6A6A6',
                    }}
                  >
                    {tag}
                  </Typography>
                }
                variant="outlined"
                style={{
                  margin: '4px',
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>

      <Box
        display="flex"
        justifyContent="center"
        style={{
          background: '#F1F1F1',
          color: '#FF4C00',
        }}
      >
        <Typography align="center">
          <Box m={1} fontWeight={600}>
            Check Details
          </Box>
        </Typography>
      </Box>
    </Card>
  )
}

const ParallaxCarousel = ({ slides, slideImages }) => {
  const classes = useStyles()
  const renderChildren = () =>
    slides.map((slide, index) => {
      const image = slideImages.nodes.find(
        node => node.childImageSharp.fluid.originalName === slide.image
      )

      return (
        <BackgroundImage
          Tag="section"
          fluid={image.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className={classes.background}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="bottom"
            style={{
              height: '141px',
              width: '100%',
              color: '#FFFFFF',
              padding: '8px',
            }}
          >
            <Typography variant="h4" align="left">
              <Box>{slide.heading}</Box>
            </Typography>
            <Typography variant="h6" align="left">
              <Box fontWeight={600}>{slide.subheading}</Box>
            </Typography>
          </Box>
        </BackgroundImage>
      )
    })
  return <ParallaxSlide>{renderChildren}</ParallaxSlide>
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index}>
      <Grid container>{children}</Grid>
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}
