import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import Movie from "../components/movie/Movie"


const TwojeKorzysci = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Twoje korzyści",
        description:
          "At vero eos et accusamus et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      }}
      location={location.pathname}
    />
    <Movie src="https://youtube.com/embed/fR8TBCx66dA"/>
    <div className="containerS">
      <h2>Dlaczego warto leczyć zęby mleczne? </h2>
      <h3>
      W gabinecie Wróżka Zębuszka zadbamy kompleksowo o Twoje dziecko,
          zapewniając profilaktykę, leczenie próchnicy oraz leczenie
          ortodontyczne. Dodatkowo zbadamy poziom witaminy D i w razie potrzeby
        wykonamy dodatkowe badania, dzięki którym ocenimy stan zdrowia
          ogólnego Dziecka i uzupełnimy niedobory witamin, mikro i makroelementów.
      </h3>
      <p>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime placeat facere possimus, omnis voluptas assumenda
        est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
        debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae.
      </p>
      <ul>
        <li>facilis est et expedita distinctio</li>
        <li>aut reiciendis voluptatibus maiores</li>
        <li>earum rerum hic tenetur a sapiente</li>
      </ul>
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Twoje korzyści" />

export default TwojeKorzysci
