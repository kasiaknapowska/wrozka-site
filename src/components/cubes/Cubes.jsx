import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Arrow from "../../assets/svg/arrow.svg"
import {
  cubesContainer,
  standard,
  reverse,
  cubesContent,
  cubesImg
} from "./cubes.module.css"

const Cubes = ({ data, type, video, title, description, link }) => {
  const image = getImage(data.allFile.nodes[0])
  return (
    <div
      className={`${cubesContainer} ${
        type === "standard" ? standard : reverse
      }`}
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
      <div className={cubesContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/${data.allFile.nodes[0].name}`}>Czytaj więcej</Link>
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
