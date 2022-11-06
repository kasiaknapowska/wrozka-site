import * as React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"

import {
  imgSection,
  galleryMainImg,
  imgWrap,
  imgWrapActive,
  left,
  right
} from "./galleryImage.module.css"

const GalleryImage = ({ image, alt, position }) => {
  const ref = useRef()
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
  })

  const setRefs = useCallback(
    node => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  return (
    <section ref={setRefs} className={imgSection}>
      <div className={`${imgWrap} ${inView ? imgWrapActive : ""} ${position === "left" ? left : right}`}>
        <GatsbyImage className={galleryMainImg} image={image} alt={alt} />
      </div>
    </section>
  )
}

GalleryImage.propTypes = {
  image: PropTypes.object,
  position: PropTypes.string,
  alt: PropTypes.string,
}

// GalleryMain.defaultProps = {
//   images: ``,
// }

export default GalleryImage
