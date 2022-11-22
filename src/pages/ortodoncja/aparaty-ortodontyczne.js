import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"
import ArrowLink from "../../components/arrowLink/ArrowLink"

const AparatyOrtodontyczne = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Aparaty ortodontyczne",
        description:
          "Rodzaj aparatu ortodontycznego, jaki zastosujemy u dziecka zależy od jego wieku, typu uzębienia oraz wady ortodontycznej. Decyzja co do wyboru aparatu jest podejmowana wspólnie z lekarzem na podstawie badania stanu zgryzu.",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>Aparaty elastyczne dla najmłodszych</h3>
      <p>
        U najmłodszych dzieci, z uzębieniem mlecznym lub mieszanym stosujemy
        aparaty elastyczne, które korygują nieprawidłowości poprzez stymulację
        prawidłowego rozwoju mięśni twarzy oraz eliminują złe nawyki, takie jak
        oddychanie przez usta, ssanie palca. Aparaty te należy nosić przez
        godzinę dziennie oraz przez noc.
      </p>
      <h3>Aparaty ruchome do stymulacji rozwoju kości</h3>
      <p>
        U dzieci z uzębieniem mieszanym lub stałym możemy zastosować aparaty
        ruchome ze śrubą środkową. Aparaty te stymulują rozwój kości,
        zwiększając jej ilość i umożliwiając prawidłowe wyrzynanie się zębów
        stałych, które są zdecydowanie większe od mleczaków i często nie
        mieszczą się w buzi. W konsekwencji nie podejmując leczenia pojawiają
        się stłoczenia i rotacje zębów. Aparaty ze śrubą należy aktywować
        zgodnie ze wskazaniami lekarza. Zwykle dziecko nosi taki aparat przez
        noc oraz godzinę w ciągu dnia.
      </p>
      <h3>Aparaty dla nastolatków</h3>
      <p>
        U dzieci w wieku nastoletnim, które mają już wszystkie zęby stałe,
        możemy stosować aparaty stałe, zarówno tradycyjne, metalowe, jak i
        bardziej estetyczne aparaty ceramiczne, samoligaturujące. Są to aparaty,
        które szeregują zęby ustawiając je w prawidłowym położeniu. Możemy także
        zastosować przezroczyste nakładki ortodontyczne, które w dyskretny
        sposób leczą większość wad zgryzu, nawet bardzo zrotowane zęby.
      </p>
      <ArrowLink type="standard" link="ortodoncja/nakladki-ortodontyczne" text="Dowiedz się więcej o nakładkach ortodontycznych"/>
    </section>

    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Aparaty ortodontyczne dla dzieci" description={"Rodzaj aparatu zależy od wieku dziecka i rodzaju wady zgryzu. Stosujemy aparaty ruchome, przezroczyste nakładki ortodontyczne oraz estetyczne aparaty stałe."}/>

export default AparatyOrtodontyczne
