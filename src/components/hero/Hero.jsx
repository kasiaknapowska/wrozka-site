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
import { Link } from "gatsby"

const Hero = ({ hero, location }) => {
  const { type, title, description, text } = hero

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
          style={{position: "absolute"}}
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
                <Link to="kontakt" className="btn btnPrimary heroBtn">Umów wizytę</Link>
                <Link to="twoje-korzysci" className="btn btnSecondary heroBtn">
                  Dowiedz się więcej
                </Link>
              </>
            )}
            {type === "page" && (
              <ArrowLink link="kontakt" text={text ? text : "Zapytaj o szczegóły"} />
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
  hero: { type: "page", title: "Dentysta dla Twojego dziecka", description: "Wróżka Zębuszka to miejsce, gdzie w kompleksowy sposób zadbamy o uśmiech, zdrowie i dobre samopoczucie Twojego dziecka." },
}

export default Hero
