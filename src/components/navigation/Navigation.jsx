import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { navLinks } from "../../data/links"

import SocialMedia from "../socialMedia/SocialMedia"

import LogoColor from "../../svg/logo-color.svg"
import LogoWhite from "../../svg/logo-white.svg"
import {
  logo,
  navMain,
  navPage,
  heroNav,
  heroNavLink,
  hamburger,
  hamburgerPage,
  open,
  heroNavMobile,
  active,
} from "./navigation.module.css"

const Navigation = ({ navigationType, location }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  return (
    <div className="container flex">
      <Link to="/">
        {navigationType === "main" ? (
          <LogoWhite className={logo} />
        ) : (
          <LogoColor className={logo} />
        )}
      </Link>
      <div
        role="presentation"
        onClick={() => setIsOpen(!isOpen)}
        className={`${hamburger} ${isOpen && open} ${
          navigationType === "page" || navigationType === "contact" ? hamburgerPage : ""
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${heroNav} ${isOpen && heroNavMobile} `}>
        {navLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link
              to={`/${link.url}`}
              className={`${heroNavLink} ${
                navigationType === "main" && navMain
              } ${navigationType === "page" || navigationType === "contact" ? navPage : ""}
              ${location === `/${link.url}` && active}`}
            >
              {link.text}
            </Link>
          </React.Fragment>
        ))}
        <br />
        <SocialMedia type="side" />
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  navigationType: PropTypes.string,
  location: PropTypes.string,
}

Navigation.defaultProps = {
  navigationType: "main",
  location: "/",
}

export default Navigation
