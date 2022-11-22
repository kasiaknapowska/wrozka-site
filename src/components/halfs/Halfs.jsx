import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"

import {
  halfsContainer,
  reverse,
  halfsContent,
  halfsImg,
  color,
} from "./halfs.module.css"
import ArrowLink from "../arrowLink/ArrowLink"

const Halfs = ({ data, type, video, title, description, text }) => {
  const ref = useRef()
  const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
  })

  // In order to assign multiple refs to a component, use `useCallback` so you don't recreate the function on each render
  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)
    },
    [inViewRef]
  )

  const image = getImage(...data.nodes)
  return (
    <section
      ref={setRefs}
      className={`${halfsContainer} ${
        type.includes("standard") ? "" : reverse
      }  ${type.includes("color") && color}`}
    >
      <GatsbyImage
        className={`${halfsImg} ${inView ? "fadeIn" : ""}`}
        image={image}
        alt={title}
        style={{ height: "100%" }}
      />
      <div className={`${halfsContent} ${type.includes("color") && color} `}>
        <div className={`${inView ? "fadeIn" : ""}`}>
          <h4>{title}</h4>
          <p>{description}</p>
          <ArrowLink link={data.nodes[0].name} type={type} text={text}/>
        </div>
      </div>
    </section>
  )
}

Halfs.propTypes = {
  halfs: PropTypes.string,
}

export default Halfs
