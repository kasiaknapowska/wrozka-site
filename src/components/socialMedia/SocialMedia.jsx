import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import IconFB from "../../assets/svg/icon-fb.svg"
import IconInsta from "../../assets/svg/icon-insta.svg"
import IconYT from "../../assets/svg/icon-yt.svg"

import {
  smIcon,
  smIcons,
} from "./socialMedia.module.css"

import "./socialMedia.module.css"

const SocialMedia = ({ type }) => {

  return (
    <div className={smIcons}>
    <Link to="https://pl-pl.facebook.com/" target="blank">
      <IconFB className={smIcon} />
    </Link>
    <Link to="https://www.instagram.com/" target="blank">
      <IconInsta className={smIcon} />
    </Link>
    <Link to="https://www.youtube.com/" target="blank">
      <IconYT className={smIcon} />
    </Link>
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
