/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/Header"
import "./layout.css"
import Footer from "./footer/Footer"
import ScrollToTop from "react-scroll-to-top";

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
      <ScrollToTop smooth color="#55aba7"/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroType: PropTypes.object,
}

export default Layout
