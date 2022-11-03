import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"


const PodciecieWedzidelka = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Podcięcie wędzidełka",
        description:
          "At vero eos et accusamus et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      }}
      location={location.pathname}
    />
    <div className="containerS">
      
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Podcięcie wędzidełka u dziecka" />

export default PodciecieWedzidelka
