import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import { useInView } from "react-intersection-observer"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import Contact from "../components/contact/Contact"
import CubeLinks from "../components/cubeLinks/CubeLinks"
import Form from "../components/form/Form"
import GallerySlider from "../components/gallerySlider/GallerySlider"
import Halfs from "../components/halfs/Halfs"
import Movie from "../components/movie/Movie"

const cubeElements = [
  { name: "Pierwsza wizyta", link: "pierwsza-wizyta" },
  { name: "Leczenie w narkozie", link: "narkoza" },
  { name: "Ortodoncja", link: "ortodoncja" },
  { name: "Profilaktyka", link: "profilaktyka" },
]

const IndexPage = ({ data, location }) => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0,
  })

  return (
    <Layout>
      <Seo title="Home" />
      <Hero
        hero={{
          type: "main",
          title: "Dentysta dla Twojego dziecka",
          description:
            "Wróżka Zębuszka to miejsce stworzone z myślą o najmłodszych Pacjentach. Tutaj w kompleksowy sposób zadbamy o uśmiech, zdrowie i dobre samopoczucie Twojego dziecka.",
        }}
      />
      <Halfs
        title="Leczenie w narkozie"
        description="U szczególnie wrażliwych Pacjentów, którzy nie współpracują z lekarzem, leczenie zębów przeprowadzamy pod narkozą. Dzięki temu nie narażamy dzieci na niepotrzebny stres."
        type="reverse"
        data={data.image1}
      />
      <Halfs
        title="Profilaktyka"
        description="Codzienna higiena, wizyty kontrolne u dentysty, zabiegi profilaktyczne, zdrowe nawyki, odpowiednia dieta i prawidłowy poziom witaminy D - to wszystko pomaga zadbać o zdrowy uśmiech dziecka."
        type="standard"
        data={data.image2}
      />
      <Halfs
        title="Ortodoncja"
        description="Wiek dziecięcy to jedyny moment, kiedy można wpłynąć na kształt rozwijającej się kości, by zapewnić w przyszłości prawidłowe ustawienie zębów. Dlatego nie zwlekaj z wizytą u ortodonty!"
        type="reverse color"
        data={data.image3}
      />
      <Movie
        src="https://youtube.com/embed/fR8TBCx66dA"
        title="Dentysta dla dzieci w Katowicach"
      />
      <div ref={ref1} className={`container ${inView1 ? "fadeIn" : ""}`}>
        <h2>Jak leczymy</h2>
        <h3>
          Leczymy nie tylko skutecznie, ale przede wszystkim bezstresowo i w
          komfortowych warunkach.
        </h3>
        <p>
          W trosce o bezpieczeństwo i zdrowie najmłodszych Pacjentów
          wykorzystujemy szereg nowoczesnych rozwiązań (cyfrowe RTG, mikroskopy,
          lasery diagnostyczne, skanery), które umożliwiają precyzyjną
          diagnostykę i jak najmniej inwazyjne leczenie dzieci. Na każdym etapie
          leczenia nad Twoim dzieckiem czuwa zespół specjalistów doświadczonych
          w pracy z najmłodszymi— stomatolodzy, ortodonci, anestezjolodzy,
          pielęgniarki i asystentki.
        </p>
        <h3>Co oferujemy naszym młodym Pacjentom?</h3>
        <ul>
          <li>
            nowoczesne znieczulenie komputerowe, które skutecznie eliminuje ból
            podczas leczenia
          </li>
          <li>
            gaz rozweselający (podtlenek azotu), który uspokaja i wycisza małego
            Pacjenta
          </li>
          <li>
            leczenie w narkozie dzieci, które ze strachu nie współpracują z
            lekarzem
          </li>
          <li>laser diagnostyczny, który obiektywnie wykrywa próchnicę</li>
          <li>
            bezbolesna ozonoterapia w przypadku początkowych zmian
            próchnicowych, bez konieczności „borowania”
          </li>
          <li>
            zabiegi profilaktyczne, które chronią zęby dziecka przed próchnicą,
            m.in. fluoryzacja i lakowanie
          </li>
          <li>
            pełen zakres zabiegów stomatologii, chirurgii i ortodoncji
            dziecięcej
          </li>
          <li>
            badanie poziomu witaminy D, która odpowiada za zdrowie zębów i
            zwiększa odporność na infekcje
          </li>
          <li>badania diagnostyczne (morfologia, CRP) bez użycia strzykawki</li>
        </ul>
        <Link to="kontakt" className="btn btnPrimary">
          Umów wizytę
        </Link>
      </div>
      <CubeLinks cubeElements={cubeElements} />
      <div ref={ref2} className={`container ${inView2 ? "fadeIn" : ""}`}>
        <h2>Gabinet przyjazny dzieciom</h2>
        <h3>
          Nasz gabinet został stworzony z myślą o dzieciach, a wizyta u nas jest
          dla dziecka niesamowitą przygodą!
        </h3>
        <p>
          Posiadamy komfortowy pokój konsultacyjny oraz poczekalnię połączoną z
          salą zabaw, gdzie dzieci mogą wspaniale spędzić czas przed wizytą na
          fotelu dentystycznym. Nasze gabinety są przystosowane do leczenia
          najmłodszych i panuje w nich ciepła i przyjazna atmosfera. W czasie
          leczenia dzieci na ekranach umieszczonych przy fotelach
          stomatologicznych wyświetlane są ulubione dziecięce bajki. Za dzielną
          postawę i odwagę maluchy otrzymują atrakcyjne upominki, które
          wzmacniają na przyszłość pozytywne skojarzenia związane z wizytą u
          stomatologa. Dla dzieci po narkozie udostępniamy przytulny pokój, w
          którym budzą się w obecności Rodziców / Opiekunów.
        </p>
        <h3>Dlaczego warto wybrać Wróżkę zębuszkę? </h3>
        <p>Nasz gabinet posiada wszystko co potrzeba, by leczyć:</p>
        <ul>
          <li>
            <strong>BEZBOLEŚNIE</strong> - znieczulenie komputerowe, podtlenek
            azotu, leczenie w narkozie
          </li>
          <li>
            <strong>KOMPLEKSOWO </strong> - diagnostyka, profilaktyka i leczenie
            - wszystko w jednym miejscu
          </li>
          <li>
            <strong>BEZSTRESOWO</strong> - przyjazna atmosfera, prezenty dla
            dzieci
          </li>
          <li>
            <strong>KOMFORTOWO</strong> - bajkowe wnętrza, personel doświadczony
            w pracy z dziećmi
          </li>
          <li>
            <strong>BEZPIECZNIE</strong> - nowoczesna diagnostyka,
            specjalistyczny sprzęt
          </li>
          <li>
            <strong>Z GWARANCJĄ</strong> - zabiegi wykonywane u nas objęte są
            gwarancją
          </li>
        </ul>
      </div>
      <GallerySlider gallery={data.gallery} />

      <section className={`container contactFlex`}>
        <Contact />
        <Form />
      </section>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Stomatologia dziecięca w Katowicach"
    description={
      "Twoje dziecko może polubić wizyty u dentysty! Pzeprowadzamy leczenie zębów mlecznych i stałych w narkozie i podtlenku azotu. Bez bólu i stresu, w bajkowych gabinetach."
    }
  />
)

export const pageQuery = graphql`
  query {
    image1: allFile(filter: { name: { eq: "narkoza" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    image2: allFile(filter: { name: { eq: "profilaktyka" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    image3: allFile(filter: { name: { eq: "ortodoncja" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
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

export default IndexPage
