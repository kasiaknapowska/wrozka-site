import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { arrow, linkContainer, color } from "./arrowLink.module.css"

const ArrowLink = ({ link, type }) => {
  return (
    <div className={`${linkContainer} ${type.includes("color") && color}`}>
      {" "}
      <Link to={`/${link}`}>Więcej</Link>
      <div className={arrow}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

ArrowLink.propTypes = {
  color: PropTypes.string,
}

// Hero.defaultProps = {
//   heroType: {type: "home", title: "Dentysta dla Twojego Dziecka", description: ""},
// }

export default ArrowLink
