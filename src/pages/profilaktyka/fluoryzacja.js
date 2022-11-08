import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const Fluoryzacja = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Fluoryzacja zębów",
        description:
          "Istnieje błędne przekonanie, iż fluoryzacja zębów u Dzieci bardziej szkodzi, niż pomaga. Zdecydowanie nie zgadzamy się z tym stwierdzeniem. Kluczem do sukcesu jest odpowiednie dawkowanie i wykonywanie zabiegu przez doświadczony zespół!",
        text: "Umów dziecko na zabieg fluoryzacji",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Dlaczego warto przeprowadzać fluoryzację zębów?</h2>
      <p>
        Szkliwo zębów zbudowane jest z hydroksyapatytów, które odpowiadają za
        jego wytrzymałość (tworzą mineralne rusztowanie). Zawarte w
        hydroksyapatytach związki wapnia, rozpuszczają się pod wpływem działania
        kwasów obecnych w jamie ustnej. W ten sposób dochodzi do demineralizacji
        i osłabienia szkliwa. Zęby staja się podatne na uszkodzenia mechaniczne
        i działanie bakterii próchnicotwórczych.
      </p>
      <p>
        Podczas zabiegu fluoryzacji następuje reakcja chemiczna fluoru z
        hydroksyapatytami szkliwa. W ten sposób powstają związki
        fluoroapatytowe, odporne na kwaśne środowisko jamy ustnej. Dzięki temu
        uzyskujemy ochronę zębów przed demineralizacją szkliwa, a w efekcie
        przed próchnicą. Co więcej, fluor hamuje rozwój bakterii i przyczynia
        się do remineralizacji drobnych ubytków.
      </p>
      <h3>Czy wiesz, że...</h3>
      <ul>
        <li>
          fluoryzacja jest zalecana już u 2-latków, a zabieg jest w pełni
          bezpieczny
        </li>
        <li>zabieg fluoryzacji jest bezbolesny i trwa tylko kilka minut</li>
        <li>
          lakier do fluoryzacji aplikowany jest na zęby przy pomocy specjalnego
          pędzelka
        </li>
        <li>
          aby zmniejszyć ryzyko próchnicy wystarczy przeprowadzać fluoryzację
          zębów u dziecka 2 razy w roku{" "}
        </li>
        <li>
          fluoryzacja zwiększa odporność na próchnicę nawet o 75% w porównaniu z
          myciem zębów pastą z fluorem
        </li>
      </ul>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Fluoryzacja zębów" />

export default Fluoryzacja
