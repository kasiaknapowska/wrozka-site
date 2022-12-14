import * as React from "react"
import { Link } from "gatsby"

import { contactData as data } from "../../data/contactData"
import { footerLinks } from "../../data/links"
import SocialMedia from "../socialMedia/SocialMedia"

import IconStars from "../../svg/icon-stars.svg"
import IconMail from "../../svg/icon-mail-white.svg"
import IconPhone from "../../svg/icon-phone-white.svg"
import {
  footerTop,
  footerBottom,
  links,
  linksContainer,
  contactData,
  contact,
  gatsbyLink,
  stars,
} from "./footer.module.css"

const Footer = () => {
  const { email, phone } = data
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
                    <Link className={links} key={link.url} to={`/${link.url}`}>
                      {link.text}
                    </Link>
                  ))}
                </React.Fragment>
              </div>
            ))}
          </div>
          <div className={contactData}>
            <h4>
              Wróżka Zębuszka <IconStars className={stars} />{" "}
            </h4>

            <p>Klinika Stomatologii Dziecięcej</p>
            <div className={contact}>
              <IconMail />
              <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className={contact}>
              <IconPhone />
              <p><a href={`tel:${phone}`}>{phone}</a></p>
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

export default Footer
