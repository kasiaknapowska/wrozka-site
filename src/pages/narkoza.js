import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import CubeLinks from "../components/cubeLinks/CubeLinks"

const cubeElements = [
  { name: "Leczenie próchnicy", link: "leczenie-prochnicy" },
  { name: "Podcięcie wędzidełka", link: "podciecie-wedzidelka" },
  { name: "Ekstrakcja zębów", link: "ekstrakcje-zebow" },
  { name: "Leczenie kanałowe", link: "leczenie-kanalowe" },
]

const Narkoza = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Leczenie zębów w narkozie",
        description:
          "Ból zęba? Złamany ząb? Ubytki w zębach? Twoje Dziecko boi się wizyt u dentysty? Chcesz szybko i bezstresowo pozbyć się próchnicy u Dziecka? ",
        text: "Umów leczenie zębów w narkozie",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>
        Gdy mały Pacjent nie współpracuje z lekarzem, a wizyta na fotelu, mimo
        starań doświadczonego personelu, jest dla dziecka ogromnym stresem,
        najlepszym rozwiązaniem jest leczenie zębów w znieczuleniu ogólnym
        (narkozie).{" "}
      </h3>
      <p>
        Znieczulenie ogólne wykonywane jest przez doświadczonego lekarza
        anestezjologa przy asyście pielęgniarki anestezjologicznej. Kwalifikacja
        do zabiegu następuje po przeprowadzeniu szczegółowej ankiety medycznej.
        Na wizytę należy przynieść do wglądu dotychczasową dokumentację medyczną
        dziecka (np. wyniki badań laboratoryjnych, informacje o uczuleniach,
        listę zażywanych leków, karty wypisowe ze szpitala) W szczególnych
        przypadkach lekarz może zlecić wykonanie badań dodatkowych.
      </p>
      
    </section>
    <section className="container">
    <h2>Korzyści dla dziecka i Rodzica</h2>
      <ul>
        <li>
          leczenie zębów przebiega bezstresowo i bezboleśnie, dziecko usypia,
          dzięki czemu nie jest narażone na nieprzyjemne odczucia związane z
          wykonywanym zabiegiem
        </li>
        <li>
          nie są konieczne wielokrotne wizyty w gabinecie stomatologicznym, by
          przyzwyczaić Dziecko do współpracy z lekarzem
        </li>
        <li>
          najczęściej podczas jednej wizyty przeprowadzane jest kompleksowe
          leczenie próchnicy oraz zabiegi chirurgiczne
        </li>
        <li>dziecko zasypia i budzi się w obecności Rodziców / Opiekunów</li>
        <li>
          dla komfortu Dziecka znieczulenie poprzedzone jest premedykacją, która
          obniża lęk
        </li>
        <li>
          stosowane, indywidualnie dobrane leki nowej generacji i nowoczesne
          metody leczenia w znacznym stopniu eliminują ryzyko wystąpienia
          powikłań
        </li>
        <li>
          lekarz anestezjolog jest stale obecny podczas zabiegu i nadzoruje
          przebieg znieczulenia, dbając o bezpieczeństwo Pacjenta
        </li>
        <li>
          po zabiegu w narkozie Rodzice / Opiekunowie zawsze mają możliwość
          kontaktu telefonicznego z personelem Klinik
        </li>
        <li>istnieje możliwość rozłożenia kosztów leczenia na raty</li>
        <li>po leczeniu w narkozie dzielni mali Pacjenci otrzymują nagrody</li>
      </ul>
    </section>
    <CubeLinks cubeElements={cubeElements} />
    <section className="container">
      <h2>Zalecenia dla Rodziców </h2>
      <h3>Przed zabiegiem w narkozie</h3>
      <ul>
        <li>
          <strong>DZIECI POWYŻEJ 6 ROKU ŻYCIA</strong> – 6 godzin przed
          znieczuleniem nic nie jeść i 3 godziny nie pić.
        </li>
        <li>
          <strong>DZIECI PONIŻEJ 6 ROKU ŻYCIA</strong> – 4 godziny przed
          znieczuleniem nic nie jeść i 2 godziny nie pić.
        </li>
        <li>
          <strong>NAJMŁODSI PACJENCI PONIŻEJ 3 ROKU ŻYCIA</strong> – odpowiednio
          2 godziny nie jeść i 1 godzinę nie pić.
        </li>
      </ul>
      <h3>Po zabiegu w narkozie</h3>
      <ul>
        <li>
          Dziecko może pić i zjeść lekki posiłek po ok. 1 godzinie po zabiegu w
          narkozie.
        </li>
        <li>
          Zwykle Pacjenci mają dobre samopoczucie, mogą wystąpić zawroty głowy
          oraz nudności.
        </li>
        <li>
          Dziecko pozostaje pod nadzorem medycznym, aż do czasu odzyskania
          całkowitej świadomości. W ciągu kolejnych 12 godzin Dziecko powinno
          pozostawać pod opieką osoby dorosłej.
        </li>
        <li>
          W razie jakichkolwiek pytań lub wątpliwości po leczeniu w znieczuleniu
          ogólnym Rodzic lub Opiekun zawsze ma możliwość kontaktu telefonicznego
          z personelem Wróżki Zębuszki.
        </li>
      </ul>
      
    </section>
    <div className="container"><Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link></div>
  </Layout>
)

export const Head = () => <Seo title="Leczenie zębów w narkozie" />

export default Narkoza
