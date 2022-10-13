import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  cubesContainer,
  standard,
  reverse,
  cubesContent,
  cubesImg,
  color,
} from "./cubes.module.css"
import ArrowLink from "../arrowLink/ArrowLink"

const Cubes = ({ data, type, video, title, description }) => {
  const image = getImage(data.allFile.nodes[0])
  return (
    <div
      className={`${cubesContainer} ${
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
        className={cubesImg}
        image={image}
        alt={title}
        style={{ height: "100%" }}
      />
      <div className={`${cubesContent} ${type.includes("color") && color}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ArrowLink link={data.allFile.nodes[0].name} type={type} />
      </div>
    </div>
  )
}

Cubes.propTypes = {
  cubes: PropTypes.string,
}

// Hero.defaultProps = {
//   heroType: {type: "home", title: "Dentysta dla Twojego Dziecka", description: ""},
// }

export default Cubes
