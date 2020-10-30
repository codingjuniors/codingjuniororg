import React from 'react'
import Img from 'gatsby-image'

export function Logo({ logoImage }) {
  return <Img fixed={logoImage.childImageSharp.fixed} />
}

export function WhiteLogo({ logoWhiteImage }) {
  return <Img fixed={logoWhiteImage.childImageSharp.fixed} />
}
