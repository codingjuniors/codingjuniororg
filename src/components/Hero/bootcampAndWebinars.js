import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import { Box, Container, Typography, makeStyles } from "@material-ui/core"
import { StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import ApplyNowModal from './ApplyNowModal';

const useStyles = makeStyles(theme => ({
  root: {
    top: "60px",
    minHeight: "350px",
    color: "#FFF",
    padding: "127px 70px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
    color: "#FFF",
  },
  btn: {
    backgroundColor: "#A60000",
    color: "#ffffff",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "rgba(166, 0, 0, 0.8)",
    },
  },
}))

function Hero({
  title,
  subtitle,
  subtitleDesign,
  className, // className
  backgroundImage = null, // Link to the  background image if any
  component = null, // The Button or any component provided
  ...rest
}) {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query webinarHero {
          background: file(relativePath: { eq: "images/hero/bootAndWeb.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const backgroundFluidImageStack = [
          `linear-gradient(270.25deg, rgba(255, 76, 0, 0.3) 0.25%, rgba(0, 0, 0, 0.8) 64.03%, #000000 97.54%)`,
          data.background.childImageSharp.fluid,
        ]

        return (
          <BackgroundImage
            Tag="section"
            fluid={backgroundFluidImageStack}
            className={classes.root}
          >
            <Typography
              align="center"
              style={{ fontWeight: 800, fontSize: "30px" }}
            >
              Bootcamps & Webinars
            </Typography>
            <Typography
              align="center"
              style={{ fontWeight: 500, fontSize: "30px" }}
            >
              Learn The Exciting New tech. through Our Bootcamps
            </Typography>
          </BackgroundImage>
        )
      }}
    />
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleDesign: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Hero

// {
//   return <div>
//     {backgroundImage ? (
//       <div
//         className={clsx(classes.root, className)}
//         style={{
//           backgroundImage: `${backgroundImage}`,
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPositionY: 'center'
//         }}
//         {...rest}
//       >
//         <Container maxWidth="lg">
//           <div className={classes.main}>
//             <Typography align="center" variant="h2">
//               {title}
//             </Typography>
//             <Box mt={2}>
//               <Typography
//                 className={subtitleDesign}
//                 variant="body1"
//                 align="center"
//               >
//                 {subtitle}
//               </Typography>
//             </Box>
//             <Box mt={2}>{component != null ? component : <></>}</Box>
//           </div>
//         </Container>
//       </div>
//     ) : (
//         <div className={clsx(classes.root, className)} {...rest}>
//           <Container maxWidth="lg">
//             <div className={classes.main}>
//               <Typography variant="h1">{title}</Typography>
//               <Box mt={2}>
//                 <Typography variant="body1" align="center">
//                   {subtitle}
//                 </Typography>
//               </Box>
//               <Box mt={2}>{component != null ? component : <></>}</Box>
//             </div>
//           </Container>
//         </div>
//       )}
//   </div>
// }
