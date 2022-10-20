import * as React from "react"
import { useState } from "react"
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
  open,
  heroNavMobile,
} from "./navigation.module.css"

const Navigation = ({ navigationType }) => {
  const [isOpen, setIsOpen] = useState(false)

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
                className={`${heroNavLink} ${navigationType === "main" && navMain} ${
                    navigationType === "page" && navPage
                }`}
              >
                {link.text}
              </Link>
              {/* {i !== navLinks.length - 1} */}
            </React.Fragment>
          ))}
          <br />
          <SocialMedia type="side"/>
        </nav>
      </div>
      
    
  
  )
}

Navigation.propTypes = {
  navigationType: PropTypes.string,
}

Navigation.defaultProps = {
  navigationType: "main",
}

export default Navigation
