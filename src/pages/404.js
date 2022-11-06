import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ArrowLink from "../components/arrowLink/ArrowLink"
import Icon404 from "../svg/icon-404.svg"

import * as styles from "../components/index.module.css"

const NotFoundPage = () => (
 
    <main className={styles.notFoundContainer}>
    <div className={styles.notFound}><h1>404</h1><Icon404/></div>
    <p>Ups... Strona, której szukasz, nie istnieje...</p>
    <ArrowLink text="Przejdź do strony głównej" to="/">WRÓĆ DO STRONY GŁÓWNEJ</ArrowLink>
    </main>
  
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
