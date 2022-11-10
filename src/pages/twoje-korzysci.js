import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import Movie from "../components/movie/Movie"
import ArrowLink from "../components/arrowLink/ArrowLink"

const TwojeKorzysci = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Twoje korzyści",
        description:
          "Jama ustna to początek przewodu pokarmowego. Zdrowe zęby to prawidłowe rozdrabnianie pokarmu, natomiast to, co jedzą dzieci, przekłada się na ich funkcjonowanie. Dlatego patrzymy na organizm małego Pacjenta jako całość. Wychodząc od jamy ustnej i dbania o zdrowie zębów idziemy o krok dalej. Poprzez odpowiednio dobraną diagnostykę i wywiad medyczny szukamy przyczyn dolegliwości, a następnie staramy się je eliminować.",
      }}
      location={location.pathname}
    />
    <Movie src="https://youtube.com/embed/fR8TBCx66dA" />
    <section className="container">
      <h2>Wszystko w jednym miejscu!</h2>
      <h3>
        W gabinecie Wróżka Zębuszka zadbamy kompleksowo o Twoje dziecko,
        zapewniając profilaktykę, leczenie próchnicy oraz leczenie
        ortodontyczne.
      </h3>
      <p>
        {" "}
        Dodatkowo zbadamy poziom witaminy D i w razie potrzeby wykonamy
        dodatkowe badania laboratoryjne, dzięki którym ocenimy stan zdrowia
        ogólnego dziecka, wyeliminujemy infekcje wirusowe, bakteryjne oraz stany
        zapalne, a także uzupełnimy niedobory witamin, mikro i makroelementów.
      </p>
      <h3>Zakres leczenia w naszym gabinecie:</h3>
      <ul className="twoColumns">
        <li>Stomatologia i ortodoncja dziecięca</li>
        <li>Leczenie zębów w narkozie</li>
        <li>Leczenie w podtlenku azotu</li>
        <li>Laserowa diagnostyka próchnicy</li>
        <li>Stomatologia zachowawcza</li>
        <li>Profilaktyka i higiena</li>
        <li>Fluoryzacja i lakowanie zębów</li>
        <li>Ozonowanie bez "borowania"</li>
        <li>Usuwanie zębów u dzieci</li>
        <li>Podcięcie wędzidełka</li>
        <li>Leczenie kanałowe</li>
        <li>Chirurgia stomatologiczna</li>
        <li>Badanie poziomu witaminy D</li>
        <li>Badania laboratoryjne</li>
      </ul>
    </section>
    <section className="container">
      <h2>Zadbaj o zdrowie swojego Dziecka</h2>
      <h3>
        Stan zębów ma ogromny wpływ na zdrowie dziecka. Liczne problemy zdrowotne i zaburzenia,
        których przyczyn szukamy odwiedzając kolejnych lekarzy, mogą być
        powodowane właśnie przez zęby.
      </h3>
      <p>
        Nieprawidłowości w zgryzie są przyczyną dolegliwości, które zwykle nie
        są kojarzone z zębami. Bóle głowy, szumy w uszach, chrapanie, bezdechy
        nocne, problemy z koncentracją - udowodniono, że tego typu zaburzenia
        mogą wynikać z nieleczonych wad zgryzu. Z kolei zaniedbane zęby, stany
        zapalne powodowane przez rozwój próchnicy mogą prowadzić do chorób
        odogniskowych, takich jak kłębuszkowe zapalenie nerek, zapalenie
        wsierdzia, schorzenia stawów czy też alergie. Dlatego warto dbać o zęby
        dziecka już od najmłodszych lat, by zapewnić mu zdrowy start w dorosłe
        życie!
      </p>
      <ArrowLink
        type="standard"
        link="kontakt"
        text="Nie zwlekaj - umów wizytę"
      />
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Twoje korzyści" />

export default TwojeKorzysci
