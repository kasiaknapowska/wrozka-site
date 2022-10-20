import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import IconFB from "../../svg/icon-fb.svg"
import IconInsta from "../../svg/icon-insta.svg"
import IconYT from "../../svg/icon-yt.svg"

import {
  smIcon,
  smIcons,
  smIconsFooter
} from "./socialMedia.module.css"

import "./socialMedia.module.css"

const SocialMedia = ({ type }) => {

  return (
    <div className={`${type === "side" && smIcons} ${type === "footer" && smIconsFooter}`}>
    <a href="https://pl-pl.facebook.com/" target="blank" rel="noopener noreferrer">
      <IconFB className={smIcon} />
    </a>
    <a href="https://www.instagram.com/" target="blank" rel="noopener noreferrer">
      <IconInsta className={smIcon} />
    </a>
    <a href="https://www.youtube.com/" target="blank" rel="noopener noreferrer">
      <IconYT className={smIcon} />
    </a>
  </div>
  )
}

SocialMedia.propTypes = {
  type: PropTypes.string,
}

SocialMedia.defaultProps = {
  type: ``,
}

export default SocialMedia
