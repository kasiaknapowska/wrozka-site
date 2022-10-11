import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

import { navLinks } from "../data/navLinks"

const Hero = ({hero}) => {
const {type, title, description} = hero;
  return (
    <div className={styles.textCenter}>
    <StaticImage
      src="../images/logo-color.svg"
      loading="eager"
      width={240}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="logo"
      style={{ marginBottom: `var(--space-3)` }}
    />
    
    <nav className={styles.intro}>
      {navLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <Link to={link.url}>{link.text}</Link>
          {i !== navLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
      <br />
      
    </nav>
    <h1>
      {title}
    </h1>
    <p>{description}</p>
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
