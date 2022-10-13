import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../index.module.css"

import { navLinks } from "../../data/navLinks"
import LogoColor from "../../assets/svg/logo-color.svg"
import LogoWhite from "../../assets/svg/logo-white.svg"
import IconFB from "../../assets/svg/icon-fb.svg"
import IconInsta from "../../assets/svg/icon-insta.svg"
import IconYT from "../../assets/svg/icon-yt.svg"
import Arrow from "../../assets/svg/arrow.svg"
import {
  logo,
  heroBg,
  heroContent,
  heroMain,
  heroPage,
  heroNav,
  heroNavLink,
  heroText,
  arrow,
  hamburger,
  open,
  heroNavMobile,
  smIcon,
  smIcons
} from "./hero.module.css"

const Hero = ({ hero }) => {
  const { type, title, description } = hero

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={heroBg}>
      {/* <StaticImage
      src="../images/logo-color.svg"
      loading="eager"
      width={240}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="logo"
      style={{ marginBottom: `var(--space-3)` }}
       /> */}
      <div
        className={`${heroContent} ${type === "main" && heroMain} ${
          type === "page" && heroPage
        }`}
      >
        <div className="container flex">
          <Link to="/">
            {type === "main" ? (
              <LogoWhite className={logo} />
            ) : (
              <LogoColor className={logo} />
            )}
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${hamburger} ${isOpen && open}`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`${heroNav} ${isOpen && heroNavMobile}`}>
            {navLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link
                  to={link.url}
                  className={`${heroNavLink} ${type === "main" && heroMain} ${
                    type === "page" && heroPage
                  }`}
                >
                  {link.text}
                </Link>
                {i !== navLinks.length - 1}
              </React.Fragment>
            ))}
            <br />
            <div className={smIcons}>
              <Link to="https://pl-pl.facebook.com/" target="blank"><IconFB className={smIcon} /></Link>
              <Link to="https://www.instagram.com/" target="blank"><IconInsta className={smIcon} /></Link>
              <Link to="https://www.youtube.com/" target="blank"><IconYT className={smIcon} /></Link>
            </div>
          </nav>
        </div>
        <div className={`container ${heroText}`}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="btn btnPrimary">Umów wizytę</button>
          <button className="btn btnSecondary">Dowiedz się więcej</button>
        </div>
        <Arrow className={arrow} />
      </div>
    </div>
  )
}

Hero.propTypes = {
  heroType: PropTypes.object,
}

// Hero.defaultProps = {
//   heroType: {type: "home", title: "Dentysta dla Twojego Dziecka", description: ""},
// }

export default Hero
