import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { arrow, linkContainer, color } from "./arrowLink.module.css"

const ArrowLink = ({ link, type, text }) => {
  return (
    <div className={`${linkContainer} ${type.includes("color") && color}`}>
      {" "}
      <Link to={`/${link}`}>{text}</Link>
      <div className={arrow}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

ArrowLink.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
}

ArrowLink.defaultProps = {
  link: "",
  type: "standard",
  text: "Więcej",
}

export default ArrowLink
