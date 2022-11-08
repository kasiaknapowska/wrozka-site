import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const NakladkiOrtodontyczne = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Przezroczyste nakładki ortodontyczne",
        description:
          "Dużą popularnością wśród młodzieży cieszą się aparaty ortodontyczne w postaci indywidualnie zaprojektowanych przezroczystych nakładek na zęby. Są one niewidoczne, komfortowe i można je bez problemu zdejmować. ",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>
        Styl życia młodych ludzi i ich dbałość o wygląd sprawia, że metalowe
        zamki i druty na zębach są nie do zaakceptowania. Leczenie
        przezroczystymi nakładkami doskonale odpowiada potrzebom młodych,
        aktywnych ludzi.
      </h3>
      <p>
        Leczenie przezroczystymi nakładkami jest skuteczne zarówno w delikatnych
        wadach zgryzu jak i w bardziej skomplikowanych przypadkach. Każdorazowo
        decyzję o doborze najlepszego rozwiązania podejmuje rodzic lub opiekun
        Pacjenta wraz z lekarzem ortodontą.
      </p>
      <p>
        W naszym gabinecie istnieje możliwość wyboru systemu przezroczystych
        nakładek – dostępny jest popularny system Invisalign oraz nakładki Clear
        Correct.
      </p>
      
    </section>
    <div className="container"><Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link></div>
  </Layout>
)

export const Head = () => <Seo title="Przezroczyste nakladki ortodontyczne" />

export default NakladkiOrtodontyczne
