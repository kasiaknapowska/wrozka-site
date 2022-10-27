import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { movie, movieFrame } from "./movie.module.css"

const Movie = ({ src }) => {
  return (
    <section className={movie}>
      <iframe
        className={movieFrame}
        title="movie"
        width="1080"
        height="700"
        src={src}
        frameBorder="0"
        controls="0"
        rel="0"
        showinfo="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </section>
  )
}

Movie.propTypes = {
  src: PropTypes.string,
}

Movie.defaultProps = {
  src: "https://www.youtube.com/embed/81rHrMgRN2E",
}

export default Movie
