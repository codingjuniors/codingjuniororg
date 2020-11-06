import {
  Grid,
  makeStyles,
  Typography,
  Tabs,
  useMediaQuery,
} from "@material-ui/core"
import React, { useState } from "react"
import { CourseCard } from "../courses"

import { Swiper, SwiperSlide } from "swiper/react"
import "../../styles/swiper-bundle.css"

import SwiperCore, { Navigation, Pagination, Controller } from "swiper"
import { StaticQuery } from "gatsby"
SwiperCore.use([Navigation, Pagination, Controller])

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10, 10),
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(10, 3),
    },
  },
  swiper: {
    padding: theme.spacing(10, 0, 8),
  },
}))

const courseSlides = []

export default function DiscoverCourse() {
  const classes = useStyles()

  const large = useMediaQuery("(min-width:1100px)")
  const medium = useMediaQuery("(min-width:900px)")
  const small = useMediaQuery("(min-width:600px)")

  return (
    <div className={classes.root}>
      <Typography variant="h2" style={{ fontWeight: 800 }}>
        Discover Our Courses
      </Typography>
      <StaticQuery
        query={graphql`
          query courseData {
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

          if (courseSlides.length === 0) {
            foundation.map((course, i) => {
              courseSlides.push(
                <SwiperSlide key={`slide-${i}`} tag="li">
                  <CourseCard course={course} slideImages={data.slideImages} />
                </SwiperSlide>
              )
            })

            advanced.map((course, i) => {
              const len = courseSlides.length
              courseSlides.push(
                <SwiperSlide key={`slide-${i + len}`} tag="li">
                  <CourseCard course={course} slideImages={data.slideImages} />
                </SwiperSlide>
              )
            })
          }

          return (
            <Swiper
              id="main"
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={large ? 3.4 : medium ? 3 : small ? 2 : 1.4}
              slidesPerGroup={1}
              // loop={true}
              className={classes.swiper}
            >
              {courseSlides}
            </Swiper>
          )
        }}
      />
    </div>
  )
}
