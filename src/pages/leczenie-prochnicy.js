import * as React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import ArrowLink from "../components/arrowLink/ArrowLink"

const LeczenieProchnicy = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Leczenie próchnicy",
        description:
          "Próchnica to choroba zakaźna. Bakterie obecne w ubytkach próchnicowych w błyskawicznym tempie przenoszą się na sąsiadujące zdrowe zęby dziecka. Dlatego warto kontrolować zęby dziecka u dentysty przynajmniej raz na 3-4 miesiące. Systematyczne wizyty, wczesna diagnoza i szybko podjęte leczenie pozwolą zadbać nie tylko o uśmiech ale także o zdrowie Twojego dziecka.",
        text: "Umów wizytę kontrolną",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Jak przebiega leczenie próchnicy?</h2>
      <ol>
        <li>
          <div>
            Pierwszym etapem jest dokładna diagnostyka zmian próchnicowych.
            Wczesne, niewidoczne jeszcze zmiany wykrywamy{" "}
            <Link className="textLink" to="/diagnostyka">
              laserem diagnostycznym
            </Link>
            . Na podstawie odczytu lasera jesteśmy w stanie obietywnie ocenić,
            czy zmiana nadaje się do ozonowania, czy konieczne jest już
            leczenie.
          </div>
        </li>
        <li>
          <div>
            Przed rozpoczęciem leczenia próchnicy podawane jest{" "}
            <Link className="textLink" to="/znieczulenia">
              znieczulenie
            </Link>
            . Aby zapewnić dziecku komfort i spokój podajemy gaz rozweselający
            (podtlenek azotu). Dzieci, które nie współpracują z lekarzem, mają
            możliwość leczenia w narkozie. Każdorazowo stosujemy także
            znieczulenie miejscowe podawane systemem komputerowym.
          </div>
        </li>
        <li>
          Leczenie próchnicym odbywa się w sposób bezbolesny, a w trakcie
          zabiegu dziecko ogląda ulubioną bajkę.
        </li>
        <li>
          Proces usuwania tkanek objętych próchnicą kontrolowany jest pod
          mikroskopem.
        </li>
        <li>
          <div>
            W przypadku rozległych zmian próchnicowych lekarz może zadecydować o
            wykonaniu zabiegu lapisowania. Jeśli zmiana jest głęboka
            przeprowadzamy{" "}
            <Link className="textLink" to="/leczenie-kanalowe">
              leczenie kanałowe
            </Link>
            .
          </div>
        </li>
        <li>Ubytki wypełniamy estetycznym kompozytem światłoutwardzalnym.</li>
        <li>Po leczeniu dzielny Pacjent otrzymuje nagrodę.</li>
        <li>
          W ramach profilaktyki proponujemy wykonanie{" "}
          <AnchorLink
            className="textLink"
            to="/zeby-bez-prochnicy#witamina-d"
            title="Witamina D"
          >
            &nbsp;badania witaminy D
          </AnchorLink>
          .
        </li>
      </ol>
    </section>
    <section className="container">
      <h2>Lepiej zapobiegać niż leczyć</h2>
      <p>
        W naszym gabinecie przeprowadzamy zabiegi profilaktyczne, które chronią
        przed próchnicą, hamują jej rozwój i często pozwalają zapobiec
        konieczności leczenia zębów u dziecka.
      </p>

      <ArrowLink
        type="standard"
        link="profilaktyka"
        text="Dowiedz się więcej o profilaktyce"
      />
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Leczenie próchnicy" description={"Próchnica w początkowym stadium diagnozowana jest laserowo. Leczymy w znieczuleniu miejscowym, podtlenku azotu i narkozie. Wczesne zmiany próchnicowe leczymy bez borowania."}/>

export default LeczenieProchnicy
