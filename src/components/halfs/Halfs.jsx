import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  halfsContainer,
  standard,
  reverse,
  halfsContent,
  halfsImg,
  color,
} from "./halfs.module.css"
import ArrowLink from "../arrowLink/ArrowLink"

const Halfs = ({ data, type, video, title, description }) => {
  console.log(data.nodes[0])
  const image = getImage(data.nodes[0])
  return (
    <div
      className={`${halfsContainer} ${
        type.includes("standard") ? standard : reverse
      }  ${type.includes("color") && color}`}
    >
      {/* <StaticImage
      src="../../assets/narkoza.jpg"
      loading="eager"
      width={700}
      quality={95}
      layout="constrained"
      formats={["auto", "webp", "avif"]}
      alt="image"
      style={{width: '50vw', height: '100%' }}
       /> */}
      <GatsbyImage
        className={halfsImg}
        image={image}
        alt={title}
        style={{ height: "100%" }}
      />
      <div className={`${halfsContent} ${type.includes("color") && color}`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <ArrowLink link={data.nodes[0].name} type={type} />
      </div>
    </div>
  )
}

Halfs.propTypes = {
  halfs: PropTypes.string,
}

// Hero.defaultProps = {
//   heroType: {type: "home", title: "Dentysta dla Twojego Dziecka", description: ""},
// }

export default Halfs
