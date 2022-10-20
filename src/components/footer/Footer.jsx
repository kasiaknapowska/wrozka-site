import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { footerLinks } from "../../data/links"
import SocialMedia from "../socialMedia/SocialMedia"

import IconStars from "../../svg/icon-stars.svg"
import IconMail from "../../svg/icon-mail.svg"
import IconPhone from "../../svg/icon-phone.svg"
import {
  footerTop,
  footerBottom,
  links,
  linksContainer,
  contactData,
  contact,
  gatsbyLink,
  stars
} from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={footerTop}>
          <div className={linksContainer}>
            {" "}
            {footerLinks.map((element, i) => (
              <div key={element.title}>
                <h4>{element.title}</h4>
                <React.Fragment>
                  {element.links.map(link => (
                    <Link className={links} key={link.url} to={link.url}>
                      {link.text}
                    </Link>
                  ))}
                </React.Fragment>
              </div>
            ))}
          </div>
          <div className={contactData}>
            <h4>Skontaktuj się z nami <IconStars className={stars}/> </h4>
            
            <p>Wróżka Zębuszka Klinika Stomatologii Dziecięcej</p>
            <div className={contact}>
              <IconMail />
              <p>recepcja@wrozkazebuszka.pl</p>
            </div>
            <div className={contact}>
              <IconPhone />
              <p>606&nbsp;04&nbsp;06</p>
            </div>
          </div>
        </div>

        <div className={footerBottom}>
          <div>
            © {new Date().getFullYear()} &middot; Built by KKnapowska /{" "}
            <a className={gatsbyLink} href="https://www.gatsbyjs.com">
              Gatsby
            </a>
          </div>

          <SocialMedia type="footer" />
        </div>
      </div>
    </footer>
  )
}

// Footer.propTypes = {
//   prop: PropTypes.string,
// }

// Footer.defaultProps = {
//   prop: "",
// }

export default Footer
