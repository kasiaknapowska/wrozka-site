import * as React from "react"
import PropTypes from "prop-types"

import { StaticImage } from "gatsby-plugin-image"

import Navigation from "../navigation/Navigation"
import ArrowLink from "../arrowLink/ArrowLink"

import Arrow from "../../svg/arrow.svg"
import {
  heroBg,
  heroContent,
  heroMain,
  heroPage,
  heroText,
  arrow,
  backgroundImage,
} from "./hero.module.css"

const Hero = ({ hero, location }) => {
  const { type, title, description } = hero

  return (
    <div className={type === "main" ? heroBg : undefined}>
      {type === "main" ? (
        <StaticImage
          src="../../assets/hero.jpg"
          alt=""
          className={backgroundImage}
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
        />
      ) : undefined}
      <div
        className={`${heroContent} ${type === "main" ? heroMain : undefined} ${
          type === "page" ? heroPage : undefined
        }`}
      >
        <Navigation navigationType={type} location={location} />
        {type !== "contact" && (
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
            {type === "page" && (
              <ArrowLink link="kontakt" text="Zapytaj o szczegóły" />
            )}
          </div>
        )}
        {type === "main" && <Arrow className={arrow} />}
      </div>
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.object,
  location: PropTypes.string,
}

Hero.defaultProps = {
  hero: { type: "page", title: "", description: "" },
}

export default Hero
