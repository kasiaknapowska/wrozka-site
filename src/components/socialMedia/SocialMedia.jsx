import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import IconFB from "../../svg/icon-fb.svg"
import IconInsta from "../../svg/icon-insta.svg"
import IconYT from "../../svg/icon-yt.svg"

import {
  smIcon,
  smIcons,
} from "./socialMedia.module.css"

import "./socialMedia.module.css"

const SocialMedia = ({ type }) => {

  return (
    <div className={smIcons}>
    <a href="https://pl-pl.facebook.com/" target="blank">
      <IconFB className={smIcon} />
    </a>
    <a href="https://www.instagram.com/" target="blank">
      <IconInsta className={smIcon} />
    </a>
    <a href="https://www.youtube.com/" target="blank">
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
