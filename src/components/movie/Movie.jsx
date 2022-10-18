import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {movie} from "./movie.module.css"


const Movie = ({ url }) => {
  return (
    <section className={movie}>
        <iframe
        width="1080"
        height="700"
        src="https://www.youtube.com/embed/81rHrMgRN2E"
        frameBorder="0"
        allowFullScreen
        controls="0"
        modestbranding="1"
        rel="0"
        showinfo="0"
        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </section>
  )
}

Movie.propTypes = {
  url: PropTypes.string,
}

// Movie.defaultProps = {
//   heroType: {type: "home", title: "Dentysta dla Twojego Dziecka", description: ""},
// }

export default Movie
