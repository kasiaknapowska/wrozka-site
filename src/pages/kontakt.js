import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import Form from "../components/Form/Form"

const Kontakt = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Kontakt",
        description:
          "",
      }}
      location={location.pathname}
    />
    <section className="container">
    <Form/>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default Kontakt
