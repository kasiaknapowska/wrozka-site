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
          "Podczas wizyty konsultacyjnej lekarz wykona badanie wewnątrzustne wraz z oceną typu wędzidełka. W razie konieczności zakwalifikuje Pacjenta do zabiegu podcięcia wędzidełka. Często trafiają też do nas Pacjenci, u których diagnoza i kwalifikacja do zabiegu odbyła się podczas wizyty u logopedy, neurologopedy lub laryngologa. ",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>
        W jamie ustnej obecnych jest kilka wędzidełek - wędzidełko podjęzykowe,
        wędzidełko wargi górnej /dolnej, wędzidełka policzkowe. Ich zadaniem
        jest wspomaganie prawidłowej mowy, pobierania pokarmu oraz oddychania.
      </h3>
      <p>
        Najczęściej spotykaną wadą rozwojową jest krótkie (przerośnięte)
        wędzidełko języka, co ogranicza jego ruchomość i upośledza funkcje.
        Często spotykane są też nieprawidłowości w obrębie wędzidełek wargowych.
        Skuteczna terapia zaburzeń związanych z przerostem wędzidełka języka
        wymaga podejścia interdyscyplinarnego – współpracy lekarzy kilku
        specjalności, w tym chirurga, stomatologa, ortodonty, logopedy,
        neurologopedy. Bardzo ważnym aspektem jest wdrożenie ćwiczeń po zabiegu,
        by wspomóc wypracowanie prawidłowych funkcji języka.
      </p>
      <p>Nieprawidłowa budowa wędzidełek powoduje następujące zaburzenia:</p>
      <ul className="twoColumns">
        <li>nieprawidłowa mowa (seplenienie)</li>
        <li>oddychanie przez usta</li>
        <li>wady zgryzu</li>
        <li>zaburzenia snu</li>
        <li>trudności w ssaniu</li>
        <li>częste infekcje górnych dróg oddechowych i jamy ustnej</li>
      </ul>
    </section>
    <section className="container">
      <h2>Jak przebiega zabieg podcięcia wędzidełka?</h2>
      <ol>
        <li>
          <div>
          Dla komfortu małego Pacjenta zabieg wykonywany jest w znieczuleniu
          miejscowym wraz z sedacją wziewną lub w płytkim <Link className="textLink" to="/narkoza">znieczuleniu ogólnym</Link>{" "}
          </div>
        </li>
        <li>
          Stosujemy małoinwazyjną metodę podcięcia wędzidełka przy wykorzystaniu
          lasera lub elektrotomu, co zmniejsza ryzyko krwawienia po zabiegu i
          przyspiesza gojenie.
        </li>
        <li>
          Podczas zabiegu wykonujemy koagulację tkanek, czyli zamykanie naczyń
          krwionośnych – dzięki temu nie jest konieczne zakładanie szwów, co
          jest komfortowe dla Dziecka.
        </li>
        <li>
          Po zabiegu stosujemy ozon o silnych właściwościach
          przeciwbakteryjnych. Ozon zabezpiecza prawidłowy proces gojenia i
          zmniejsza prawdopodobieństwo infekcji.
        </li>
        <li>
          W celu przyspieszenia gojenia i stymulacji regeneracji tkanek używamy
          lasera biostymulującego.
        </li>
      </ol>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Podcięcie wędzidełka u dziecka" />

export default PodciecieWedzidelka
