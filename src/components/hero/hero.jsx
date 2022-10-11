import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../index.module.css"

import { navLinks } from "../../data/navLinks"
import LogoColor from "../../assets/svg/logo-color.svg"
import LogoWhite from "../../assets/svg/logo-white.svg"
import Arrow from "../../assets/svg/arrow.svg"
import {
  logo,
  heroBg,
  heroContent,
  heroMain,
  heroPage,
  heroNav,
  heroText,
  arrow
} from "./hero.module.css"

const Hero = ({ hero }) => {
  const { type, title, description } = hero
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
          {type === "main" ? (
            <LogoWhite className={logo} />
          ) : (
            <LogoColor className={logo} />
          )}
          <nav>
            {navLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link
                  to={link.url}
                  className={`${heroNav} ${type === "main" && heroMain} ${
                    type === "page" && heroPage
                  }`}
                >
                  {link.text}
                </Link>
                {i !== navLinks.length - 1}
              </React.Fragment>
            ))}
            <br />
          </nav>
        </div>
        <div className={`container ${heroText}`}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="btn btnPrimary">Umów wizytę</button>
          <button className="btn btnSecondary">Dowiedz się więcej</button>
        </div>
      </div>
      <Arrow className={arrow}/>
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
