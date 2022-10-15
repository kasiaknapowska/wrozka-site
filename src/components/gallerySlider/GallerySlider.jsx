import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { galleryContainer, galleryMainImg, galleryImg, sliderNav, fadeImg } from "./gallerySlider.module.css"

const GallerySlider = ({ gallery }) => {
  const images = gallery.nodes.map(el => getImage(el))
  console.log(images)

  const [previousIndex, setPreviousIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [nextIndex, setNextIndex] = useState(2)
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        if (fade === true) {
          setFade(false)
        }
    }, 1000);
    return () => clearInterval(interval);
  }, [fade])

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
    const nextIndexToSet = isLastSlide ? 1 : isOneBeforeLastSlide ? 0 : currentIndex + 2
    setPreviousIndex(currentIndex)
    setNextIndex(nextIndexToSet)
    setCurrentIndex(newIndex)
  }

  return (
    <div className={galleryContainer}>
      <div className={sliderNav}>
      <div onClick={goToPrevious}></div>
      <div onClick={goToNext}></div>
      </div>
      <GatsbyImage
        className={galleryImg}
        image={images[previousIndex]}
        alt={gallery.nodes[previousIndex].name}
      />
      <GatsbyImage
        className={`${galleryMainImg} ${fade ? fadeImg : ''}`}
        image={images[currentIndex]}
        alt={gallery.nodes[currentIndex].name}
      />
       <GatsbyImage
        className={galleryImg}
        image={images[nextIndex]}
        alt={gallery.nodes[nextIndex].name}
      />
    </div>
  )
}

GallerySlider.propTypes = {
  gallery: PropTypes.object,
}

// GallerySlider.defaultProps = {
//   images: ``,
// }

export default GallerySlider
