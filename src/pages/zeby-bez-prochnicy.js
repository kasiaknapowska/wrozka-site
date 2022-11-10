import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import CubeLinks from "../components/cubeLinks/CubeLinks"
import GallerySlider from "../components/gallerySlider/GallerySlider"
import ArrowLink from "../components/arrowLink/ArrowLink"

const cubeElements = [
  { name: "Pierwsza wizyta", link: "pierwsza-wizyta" },
  { name: "Profilaktyka", link: "profilaktyka" },
  { name: "Leczenie próchnicy", link: "leczenie-prochnicy" },
  { name: "Leczenie w narkozie", link: "narkoza" },
]

const ZebyBezProchnicy = ({ data, location }) => {
  // console.log(data)
  return (
    <Layout>
      <Hero
        hero={{
          type: "page",
          title: "Zęby bez próchnicy",
          description:
            "Zdrowe zęby mleczne są bardzo ważne dla prawidłowego rozwoju kości i prawidłowego wzrostu zębów stałych. Dlatego o zęby naszych pociech musimy dbać jak o własne. ",
          text: "Umów kontrolę u dentysty",
        }}
        location={location.pathname}
      />
      <section className="container">
        <h3>
          Zdrowe zęby mleczne to inwestycja nie tylko w zdrowe zęby stałe i
          prawidłowy zgryz. To także dobre zdrowie ogólne i samopoczucie
          dziecka!
        </h3>
        <p>
          Zęby mleczne pełnią bardzo ważną funkcję w rozwoju mięśni i kości
          twarzy dziecka. Mają wpływ na ustawienie rosnących zębów stałych -
          pełnią funkcję drogowskazu dla wyrzynających się nowych zębów.
          Przedwczesna utrata mleczaków prowadzi do wad zgryzu oraz zaburza
          funkcje żucia. Próchnica w zębach mlecznych powoduje u dzieci ból,
          niepokój oraz budzenie się w nocy. Osłabia też organizm, przyczyniając
          się do rozwoju infekcji górnych dróg oddechowych. Co więcej, bakterie
          z zębów mlecznych przenoszą się w szybkim tempie na zęby stałe oraz
          mogą zakażać odległe narządy prowadząc do chorób odogniskowych,
          pozornie nie związanych z zębami. Dlatego tak ważne jest dbanie o zęby
          mleczne.
        </p>
        <h3>Wróżka Zębuszka zapewnia kompleksową diagnostykę i leczenie zębów dzieci.</h3>
        <ArrowLink type="standard" link="diagnostyka" text="Sprawdź nasze metody diagnostyczne"/>
      </section>
      <CubeLinks cubeElements={cubeElements} />
      <section className="container">
        <h2>Witamina D a zdrowie zębów</h2>
        <h3>
          Najnowsze amerykańskie badania wskazują, że niedobór witaminy D
          zwiększa skłonność do próchnicy w zębach mlecznych
        </h3>
        <p>
          Aż 90% dzieci zmaga się z niedoborem witaminy D, co wpływa nie tylko
          na zęby, ale także na ich samopoczucie i obniża odporność. Dlatego tak
          ważna jest prawidłowa suplementacja. Jednak nawet jeśli codziennie
          suplementujesz witaminę D u Dziecka, nie masz pewności, czy jest ona
          przyswajana przez organizm! Aby to ocenić, konieczne jest wykonanie
          badania.
        </p>
        <p>
          W naszym gabinecie wykonujemy badanie 4 metabolitów witaminy D, które
          pokazuje faktyczną jej przyswajalność. Na tej podstawie nasz dietetyk
          dobiera preparat i dostosowuje dietę Dziecka tak, by skutecznie
          uzupełnić niedobory nawet w przypadku wykrytej oporności na
          suplementację. Czasami wystarcza drobna modyfikacja stylu życia
          dziecka i jego diety, by skutecznie poradzić sobie z niedoborami i
          uniknąć rozwoju chorób.
        </p>
        <h3>Dlaczego warto umówić badanie w gabinecie Wróżka Zębuszka?</h3>
        <ol className="twoColumns">
          <li>
            Nie musisz odwiedzać laboratorium, badanie wykonujemy na miejscu w naszym gabinecie, w pełni komfortowo dla dziecka.
          </li>
          <li>
            Nie używamy strzykawki, do badania wystarczą 4 krople krwi pobierane
            z palca, błyskawicznie i bezboleśnie
          </li>
          <li>
            Oznaczamy 4 metabolity witaminy D, które dają pełen obraz
            przyswajania witaminy przez organizm dziecka oraz jej faktycznego
            zapotrzebowania.
          </li>
          <li>
            Wynik przesyłamy drogą elektroniczną, a dodatkowo kontaktujemy się z
            Rodzicami / Opiekunami, by przekazać interpretację wyniku i zalecenia od
            lekarza i dietetyka.
          </li>
        </ol>
        <ArrowLink
          type="standard"
          text="Umów wizytę na badanie witaminy D"
          link="kontakt"
        />
      </section>
      <GallerySlider gallery={data.gallery} />
      <div className="container">
        <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Zęby bez próchnicy" />

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: { name: { eq: "ortodoncja" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default ZebyBezProchnicy
