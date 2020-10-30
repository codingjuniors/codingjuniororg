import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { members } from '../data/teamData'
import {
  Grid,
  Typography,
  Container,
  Avatar,
  Card,
  Box,
  CardContent,
} from '@material-ui/core'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background:
      'linear-gradient(180deg, rgba(255, 76, 0, 0.9) 0%, #FFD8C8 100%)',
    padding: theme.spacing(10, 10, 5),
    [theme.breakpoints.down('md')]: {
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
  },
  cardMedia: {
    width: '100%',
    height: 'auto',
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
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
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& dt': {
      marginTop: theme.spacing(2),
    },
    color: '#FFF',
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
    margin: theme.spacing(2, 0, 2),
  },

  avatarGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
export default function Team() {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query TeamsQuery {
          teamImages: allFile(filter: { dir: { regex: "/images/members/i" } }) {
            nodes {
              childImageSharp {
                fixed(width: 130, height: 130, quality: 100) {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Grid container className={classes.heroContent}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              style={{
                color: '#FFFFFF',
              }}
            >
              <Box fontWeight="fontWeightBold" m={1}>
                Learn From The Best
              </Box>

              <Box fontWeight="fontWeightBold" m={1}>
                Our Curriculum Creators
              </Box>
            </Typography>
          </Grid>

          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {members.map((member, index) => {
                const memberFileName = member['avatar']
                const memberImage = data.teamImages.nodes.find(
                  node =>
                    node.childImageSharp.fixed.originalName === memberFileName
                )

                return (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardContent
                        className={classes.cardContent}
                        style={{
                          background: '#FFF2EC',
                        }}
                      >
                        <Box display="flex" justifyContent="center">
                          <Avatar
                            alt={member.name}
                            component="a"
                            target="_blank"
                            href={member.linkedin}
                            className={classes.avatarLarge}
                          >
                            <Img
                              fixed={memberImage.childImageSharp.fixed}
                            ></Img>
                          </Avatar>
                        </Box>
                        {/* <Avatar alt="Remy Sharp" src={edge.node.image} /> */}

                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          flexDirection="column"
                        >
                          <Typography>
                            <Box fontWeight="fontWeightBold">{member.name}</Box>
                          </Typography>
                          <Typography>
                            <Box>{member.title}</Box>
                          </Typography>
                        </Box>

                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          flexDirection="column"
                          style={{
                            marginTop: '20px',
                          }}
                        >
                          <Typography variant="body2">
                            <Box>{member.line1}</Box>
                          </Typography>
                          <Typography variant="body2">
                            <Box>{member.line2}</Box>
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardContent className={classes.cardContent}>
                        <Box display="flex" justifyContent="center">
                          <Typography>
                            <Box m={1}>Associated With</Box>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </Grid>
      )}
    />
  )
}
