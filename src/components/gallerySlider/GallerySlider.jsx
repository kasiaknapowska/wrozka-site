import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  galleryContainer,
  galleryMainImg,
  galleryImg,
  sliderNav,
  fadeImg,
} from "./gallerySlider.module.css"

const GallerySlider = ({ gallery }) => {
  const images = gallery.nodes.map(el => getImage(el))
  // console.log(gallery)
  // console.log(images)
  const [previousIndex, setPreviousIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [nextIndex, setNextIndex] = useState(2)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (images.length > 2) {
      const interval = setInterval(() => {
        if (fade === true) {
          setFade(false)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [fade, images])

  const goToPrevious = () => {
    setFade(true)
    const isFirstSlide = currentIndex === 0
    const isSecondSlide = currentIndex === 1
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    const previousIndexToSet = isFirstSlide
      ? images.length - 2
      : isSecondSlide
      ? images.length - 1
      : currentIndex - 2
    setPreviousIndex(previousIndexToSet)
    setNextIndex(currentIndex)
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    setFade(true)
    const isLastSlide = currentIndex === images.length - 1
    const isOneBeforeLastSlide = currentIndex === images.length - 2
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    const nextIndexToSet = isLastSlide
      ? 1
      : isOneBeforeLastSlide
      ? 0
      : currentIndex + 2
    setPreviousIndex(currentIndex)
    setNextIndex(nextIndexToSet)
    setCurrentIndex(newIndex)
  }

  return (
    <section className={galleryContainer}>
      {images.length > 2 && (
        <>
          <div className={sliderNav}>
            <div role="presentation" onClick={goToPrevious}></div>
            <div role="presentation" onClick={goToNext}></div>
          </div>
          <GatsbyImage
            className={galleryImg}
            image={images[previousIndex]}
            alt={gallery.nodes[previousIndex].name}
          />
          <GatsbyImage
            className={`${galleryMainImg} ${fade ? fadeImg : ""}`}
            image={images[currentIndex]}
            alt={gallery.nodes[currentIndex].name}
          />
          <GatsbyImage
            className={galleryImg}
            image={images[nextIndex]}
            alt={gallery.nodes[nextIndex].name}
          />
        </>
      )}
      {images.length === 1 && (
        <>
          <GatsbyImage
            className={galleryImg}
            image={images[0]}
            alt={gallery.nodes[0].name}
          />
          <GatsbyImage
            className={galleryMainImg}
            image={images[0]}
            alt={gallery.nodes[0].name}
          />
          <GatsbyImage
            className={galleryImg}
            image={images[0]}
            alt={gallery.nodes[0].name}
          />
        </>
      )}
    </section>
  )
}

GallerySlider.propTypes = {
  gallery: PropTypes.object,
}

// GallerySlider.defaultProps = {
//   images: ``,
// }

export default GallerySlider
