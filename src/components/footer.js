import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import { WhiteLogo } from "./logo"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "gatsby"

import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#000000",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    color: "#FFFFFF",
  },
  input: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
  },
  registerBtn: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    marginLeft: "10px",
    padding: "7.5px 0px",
  },
  iconBtn: {
    display: "inline-flex",
    justifyContent: "center",
    flexWrap: "wrap",
    border: "2px solid #fff",
  },
  socialIcon: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    marginLeft: "10px",
    padding: "6px 0px",
  },
  logo: {
    width: 20,
    height: "auto",
    // borderRadius: '50%'
  },
  iconSocialMedia: {
    color: "#FFFFFF",
  },
  centerCls: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  circleCls: {
    // padding: '10px',
    backgroundColor: "#fff",
    color: "#000",
    // border: '2px solid red',
    borderRadius: "50%",
  },
  extraMarginTop: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  extraMargin: {
    marginTop: "10px",
  },
  extremeFooter: {
    color: "#fff",
    backgroundColor: "#0C0C0C",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}))

function Footer({ className, logoWhiteImage, ...rest }) {
  const classes = useStyles()
  const flexContainer = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  }

  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          logoWhiteImage: file(relativePath: { eq: "logo/logo_white.png" }) {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        const logoWhiteImage = data.logoWhiteImage
        return (
          <div>
            <div className={clsx(classes.root, className)} {...rest}>
              <Container maxWidth="lg">
                <Grid container component="dl">
                  <Grid item xs={12} md={4} className={classes.extraMarginTop}>
                    <WhiteLogo
                      className={classes.logo}
                      logoWhiteImage={logoWhiteImage}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} className={classes.extraMarginTop}>
                    <Typography variant="h4" gutterBottom>
                      Contact us
                    </Typography>
                    <Grid item xs={3} md={3} className={classes.extraMargin}>
                      <List style={flexContainer}>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="mailto:team@codeforcause.org"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <img
                              src="/images/footer/mail.svg"
                              height="19.65px"
                              alt="mail"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="team@codeforcause.org"
                          />
                        </ListItem>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="/terms"
                        >
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Terms Of Use"
                            style={{ whiteSpace: "nowrap" }}
                          />
                        </ListItem>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="/privacy"
                        >
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Privacy Policy"
                            style={{ whiteSpace: "nowrap" }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2} className={classes.extraMarginTop}>
                    <Typography variant="h4" gutterBottom>
                      Our Blog
                    </Typography>
                    <Grid item xs={3} md={2} className={classes.extraMargin}>
                      <List style={flexContainer}>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="https://medium.com/code-for-cause"
                          target="_blank"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <FontAwesomeIcon
                              icon={["fab", "medium"]}
                              size="lg"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Medium"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={2} className={classes.extraMarginTop}>
                    <Typography variant="h4" gutterBottom>
                      Follow us on
                    </Typography>
                    <Grid item xs={3} md={3} className={classes.extraMargin}>
                      <List style={flexContainer}>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="https://www.facebook.com/codeforcauseorg"
                          target="_blank"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <img
                              src="/images/footer/fb.svg"
                              height="19.65px"
                              alt="fb"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Facebook"
                          />
                        </ListItem>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="https://twitter.com/codeforcauseIn"
                          target="_blank"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <img
                              src="/images/footer/tw.svg"
                              height="19.65px"
                              alt="twitter"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Twitter"
                          />
                        </ListItem>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="https://www.instagram.com/codeforcause/"
                          target="_blank"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <img
                              src="/images/footer/in.svg"
                              height="19.65px"
                              alt="insta"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Instagram"
                          />
                        </ListItem>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg"
                          target="_blank"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <img
                              src="/images/footer/yt.svg"
                              height="19.65px"
                              alt="yt"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="Youtube"
                          />
                        </ListItem>
                        <ListItem
                          className={classes.centerCls}
                          component="a"
                          href="https://www.linkedin.com/company/codeforcauseorg/"
                          target="_blank"
                        >
                          <ListItemIcon className={classes.iconSocialMedia}>
                            <img
                              src="/images/footer/li.svg"
                              height="19.65px"
                              alt="LinkedIN"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.iconSocialMedia}
                            primary="LinkedIn"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <Grid xs={12} className={classes.extremeFooter}>
              <Typography display="block" variant="body2">
                {"Copyright © "}
                {new Date().getFullYear()}{" "}
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="https://codeforcause.org"
                >
                  Code For Cause
                </Link>
                {". All rights reserved."}
              </Typography>
            </Grid>
          </div>
        )
      }}
    />
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
