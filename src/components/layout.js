import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import Header from "./header/Header"
import Footer from "./footer/Footer"
import ScrollToTop from "react-scroll-to-top";
import CookiesModal from "./cookiesModal/CookiesModal"
import PopUp from "./popUp/PopUp"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer/>
      <PopUp/>
      <ScrollToTop smooth color="#55aba7"/>
      <CookiesModal/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroType: PropTypes.object,
}

export default Layout
