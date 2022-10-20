import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Arrow from "../../svg/arrow.svg"
import {
  heroBg,
  heroContent,
  heroMain,
  heroPage,
  heroText,
  arrow,
} from "./hero.module.css"
import Navigation from "../navigation/Navigation"
import ArrowLink from "../arrowLink/ArrowLink"

const Hero = ({ hero, location }) => {
  const { type, title, description } = hero

  return (
    <div className={type === "main" && heroBg}>
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
        <Navigation navigationType={type} location={location}/>
        <div className={`container ${heroText}`}>
          <h1>{title}</h1>
          <p>{description}</p>
          {type === "main" && (
            <>
              <button className="btn btnPrimary heroBtn">Umów wizytę</button>
              <button className="btn btnSecondary heroBtn">
                Dowiedz się więcej
              </button>
            </>
          )}
          {type === "page" && <ArrowLink link="kontakt" text="Zapytaj o szczegóły"/>}
        </div>
        {type === "main" && <Arrow className={arrow} />}
      </div>
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.object,
  location: PropTypes.string,
}

// Hero.defaultProps = {
//   hero: {type: "home", title: "Dentysta dla Twojego Dziecka", description: ""},
// }

export default Hero
