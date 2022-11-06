import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { galleryMainImg, imgWrap } from "./galleryMain.module.css"

const GalleryMain = ({ gallery }) => {
  const images = gallery.nodes.map(el => getImage(el))

  images.map(image => {
    return (
        <section>
        <div className={imgWrap}>
          <GatsbyImage
            className={galleryMainImg}
            image={image}
            alt="image name"
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
