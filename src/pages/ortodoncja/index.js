import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"
import CubeLinks from "../../components/cubeLinks/CubeLinks"
import GallerySlider from "../../components/gallerySlider/GallerySlider"

const cubeElements = [
  { name: "Leczenie dzieci", link: "ortodoncja/dzieci" },
  { name: "Leczenie młodzieży", link: "ortodoncja/mlodziez" },
  { name: "Przezroczyste nakładki", link: "ortodoncja/nakladki-ortodontyczne" },
  {
    name: "Informacje dla pacjenta",
    link: "ortodoncja/informacje-dla-pacjenta",
  },
]

const Ortodoncja = ({ data, location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Ortodoncja dla dzieci i młodzieży",
        description:
          "Im szybciej zgłosimy się z dzieckiem do ortodonty, tym lepiej. Optymalny wiek na pierwszą wizytę to 3-5 lat! Jeśli Twoje dziecko ukończyło 7 lat – nie zwlekaj z wizytą! Zgłaszając się do ortodonty zadbasz o równe ustawienie zębów dziecka, dzięki czemu w przyszłości unikniesz poważnego leczenia ortodontycznego lub skomplikowanych operacji.",
        text: "Zapytaj o leczenie ortodontyczne",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>
        Wiek dziecięcy to jedyny moment, gdy można wpływać na kształt
        rozwijającej się kości.
      </h3>
      <p>
        U kilkuletniego dziecka kości czaszki intensywnie się rozwijają, a w
        okresie tego rozwoju zwykle nie ma jeszcze widocznej wady zgryzu. Jednak
        pewne nawyki obecne u dziecka mogą przyczyniać się do nieprawidłowego
        rozwoju mięśni i kości, co w przyszłości może prowadzić do poważnych
        problemów ortodontycznych wymagających długotrwałego leczenia. Wczesne
        leczenie ortodontyczne pozwala tak kształtować mięśnie i kości dziecka,
        by zgryz prawidłowo się rozwijał.
      </p>
      <p>
        Bardzo ważne podczas leczenia wczesnego jest podejście
        interdyscyplinarne, czyli współpraca ortodonty z lekarzami innych
        specjalności, m.in. logopedą, laryngologiem, fizjoterapeutą czy
        chirurgiem stomatologicznym. Właśnie takie podejście stosujemy w naszym
        gabinecie! Skierowanie dziecka w odpowiednim momencie rozwoju do
        odpowiedniego specjalisty pozwala zatrzymać dysfunkcje, które mogą
        prowadzić do wady zgryzu.
      </p>
    </section>
    <CubeLinks cubeElements={cubeElements} />
    <section className="container">
      <h2>Konsekwencje nieleczonych wad zgryzu</h2>
      <h3>
        Wady zgryzu, nawet niewielkie i nie mające wpływu na estetykę uśmiechu,
        powodują szereg problemów stomatologicznych, jak również
        ogólnozdrowotnych.
      </h3>
      <ul className="twoColumns">
        <li>
          próchnica i choroby dziąseł spowodowane utrudnioną higieną krzywo
          ustawionych zębów
        </li>
        <li>
          ścieranie zębów i uszkodzenia szkliwa spowodowanie przeciążeniami
        </li>
        <li>
          zaburzenia symetrii twarzy spowodowane nieprawidłowym podparciem
          tkanek miękkich
        </li>
        <li>zaburzenia czynnościowe obejmujące stawy skroniowo-żuchwowe</li>
        <li>problemy z przeżuwaniem</li>
        <li>nieprawidłowa postawa ciała</li>
        <li>bóle głowy i szumy w uszach</li>
        <li>bezdechy nocne i chrapanie</li>
        <li>
          nieprawidłowy przepływ płynu mózgowo-rdzeniowego, co wpływa negatywnie
          na pamięć, koncentrację, orientację w przestrzeni
        </li>
        <li>problemy z przegrodą nosa i węchem</li>
      </ul>
    </section>
    <GallerySlider gallery={data.gallery} />
    <section className="container">
      <h2>Jak wygląda leczenie ortodontyczne dziecka?</h2>
      <h3>
        W zależności od wieku Pacjenta i stopnia rozwoju lekarz ortodonta wdraża
        odpowiednie leczenie oddziałujące na mięśnie (najmłodsi Pacjenci), kości
        (dzieci i młodzież) lub zęby (młodzież). W ortodoncji dziecięcej
        stosowane są aparaty ruchome lub stałe. Poniżej przedstawiamy ogólny
        schemat przebiegu leczenia ortodontycznego.
      </h3>
      <ol>
        <li>
          Konsultacja ortodontyczna, badanie wewnątrzustne, rozmowa lekarza z
          Rodzicem / Opiekunem młodego Pacjenta oraz przedstawienie możliwości
          leczenia ortodontycznego.
        </li>
        <li>
          Diagnostyka – wykonanie zdjęć RTG (pantomograficzne, cefalometryczne)
          oraz skanu wewnątrzustnego, dzięki któremu możemy wykonać modele
          diagnostyczne bez używania mas wyciskowych, tak bardzo nielubianych
          przez dzieci i dorosłych.
        </li>
        <li>
          Założenie aparatu stałego lub wydanie aparatu ruchomego.
          Przedstawienie zaleceń dotyczących użytkowania aparatu oraz zachowania
          higieny.
        </li>
        <li>
          Wizyty kontrolne, zgodnie z harmonogramem przedstawionym przez
          lekarza.
        </li>
        <li>Retencja – utrzymanie efektów leczenia.</li>
      </ol>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Ortodoncja dla dzieci i młodzieży" />

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

export default Ortodoncja
