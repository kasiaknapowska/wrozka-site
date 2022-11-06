import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"

import {
  imgSection,
  galleryMainImg,
  imgWrap,
  imgWrapActive,
} from "./galleryMain.module.css"

const GalleryMain = ({ gallery }) => {
  const images = gallery.nodes.map(el => getImage(el))
  const ref = useRef()

const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
  })

    console.log(inView)
    const setRefs = useCallback(
      node => {
        ref.current = node
        inViewRef(node)
      },
      [inViewRef]
    )

  return images.map((image, i) => {
    return (
      <section
        // ref={element => {
        //   refs.current[i] = element
        // }}
        ref={setRefs}
        className={imgSection}
      >
        <div className={`${imgWrap} ${inView ? "fadeIn" : ""}`}>
          <GatsbyImage
            className={galleryMainImg}
            image={image}
            alt={gallery.nodes[i].name}
          />
        </div>
      </section>
    )
  })
}

GalleryMain.propTypes = {
  gallery: PropTypes.object,
}

// GalleryMain.defaultProps = {
//   images: ``,
// }

export default GalleryMain
