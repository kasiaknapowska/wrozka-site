import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const InformacjeDlaPacjenta = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Co warto wiedzieć?",
        description:
          "Powodzenie leczenia ortodontycznego zależne jest w znacznym stopniu od Dziecka oraz Rodziców lub Opiekunów, którzy muszą ściśle współpracować z lekarzem i stosować się do jego zaleceń. Poniżej przedstawione są podstawowe zalecenia dla Pacjenta ortodontycznego leczonego aparatem stałym oraz zdejmowanym. W dalszej części podane są informacje dotyczące retencji.",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Aparat stały</h2>
      <ul>
        <li>
          Naklejone elementy aparatu ortodontycznego są miejscem zwiększonej
          retencji płytki nazębnej i resztek pokarmowych. Z tego względu podczas
          leczenia ortodontycznego należy dokładnie myć zęby szczoteczką i pastą
          po każdym posiłku i używać płynu do płukania jamy ustnej. Należy
          stosować środki dostępne na rynku, zawierające fluor.
        </li>
        <li>
          Aparat stały jest z założenia tymczasowo naklejony na zęby pacjenta,
          gdyż istnieje konieczność jego bezpiecznego zdjęcia po zakończeniu
          leczenia. Dlatego należy zachować szczególną ostrożność podczas
          jedzenia, szczególnie pokarmów twardych - należy ich unikać lub kroić
          na małe kawałki. Nie należy też manipulować przy aparacie np.
          długopisem, ołówkiem lub palcem.
        </li>
        <li>
          Wizyty ortodontyczne odbywają się w zależności od rodzaju aparatu co
          4- 8 tygodni
        </li>
      </ul>
    </section>
    <section className="container">
      <h2>Aparat zdejmowany</h2>
      <ul>
        <li>
          Po otrzymaniu aparatu Dziecko powinno się przyzwyczajać do jego
          noszenia stopniowo. Przez pierwsze 3 dni należy użytkować aparat tylko
          w ciągu dnia. Po okresie adaptacyjnym aparat powinien być noszony
          przez min. 14 godzin na dobę (zawsze zgodnie z zaleceniami lekarza,
          czas noszenia zależy od rodzaju aparatu)
        </li>
        <li>Aparat należy zdejmować podczas jedzenia i mycia zębów.</li>
        <li>
          Aparat należy myć po każdorazowym użyciu, a gdy nie jest używany
          należy przechowywać go w otrzymanym pudełku..
        </li>
        <li>Aparat należy zabierać na wszystkie wizyty kontrolne.</li>
      </ul>
    </section>
    <section className="container">
      <h2>Retencja</h2>
      <h3>
        Ortodoncja to nie tylko właściwe leczenie ortodontyczne. Bez utrwalenia
        efektów leczenia ortodontycznego, zęby mogą bardzo szybko powrócić do
        położenia sprzed leczenia.
      </h3>
      <p>
        Retencja polega na ustabilizowaniu skorygowanego zgryzu i ustawienia
        zębów. Podczas retencji stosuje się specjalne aparaty retencyjne, stałe
        (cienki drucik przytwierdzony do wewnętrznej powierzchni zębów) lub
        ruchome (przezroczyste nakładki na zęby).
      </p>
      <p>
        Rodzaj i czas retencji jest uzależniony od konkretnej wady zgryzu, jej
        rodzaju , nasilenia, a także metody leczenia jaką wykorzystano, wieku
        pacjenta, i szeregu innych czynników, na przykład genetycznych.
      </p>
      <h3>Zalecenia podczas retencji:</h3>
      <ul className="twoColumns">
        <li>
          aparat retencyjny ruchomy powinien być noszony przez całą dobę, dopóki
          ortodonta nie zmieni zaleceń – jest to bardzo ważne i wymaga
          dyscypliny ze strony rodziców małego Pacjenta!
        </li>
        <li>
          pamiętaj o higienie i dokładnym czyszczeniu aparatu, przy pomocy pasty
          i szczoteczki do zębów oraz letniej (nie gorącej) wody
        </li>
        <li>aparat retencyjny przechowuj w specjalnym pudełku</li>
        <li>zabieraj aparat na wszystkie wizyty kontrolne</li>
        <li>
          w przypadku zagubienia aparatu niezwłocznie zgłoś się do ortodonty
        </li>
      </ul>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="Leczenie ortodontyczne, higiena i retencja" />
)

export default InformacjeDlaPacjenta
