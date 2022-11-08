import * as React from "react"
import { Link } from "gatsby"

import { contactData } from "../data/contactData"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import ArrowLink from "../components/arrowLink/ArrowLink"
import Movie from "../components/movie/Movie"

const PierwszaWizyta = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Pierwsza wizyta",
        description:
          "Pierwsza wizyta dziecka w gabinecie stomatologicznym to niezwykle ważne wydarzenie. Przebieg wizyty ma wpływ na późniejsze nastawienie dziecka do dentysty. Dlatego, by nie zrazić dziecka do stomatologa, na pierwszą wizytę warto wybrać się do gabinetu stworzonego z myślą o najmłodszych Pacjentach. Takim gabinetem jest Wróżka Zębuszka.",
        text: "Umów wizytę adaptacyjną",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Wróżka Zębuszka to miejsce dedykowane dzieciom. </h2>
      <h3>
        {" "}
        Kolorowe wnętrza, bajkowe gabinety, sala zabaw oraz przyjazna atmosfera
        stworzona przez wykwalifikowany personel – to wszystko sprawia, że
        wizyta dziecka jest niesamowitą przygodą a nie przykrym obowiązkiem.
      </h3>
      <p>
        Zwykle pierwsza wizyta jest wizytą adaptacyjną połączoną z badaniem
        stanu zębów i konsultacją. Jeśli sytuacja nie wymaga natychmiastowego
        leczenia, zwykle podczas pierwszej wizyty oswajamy dziecko z gabinetem,
        lekarzem, asystentkami. Dziecko ma okazję pobawić się w naszej sali
        zabaw, obejrzeć bajkę, odbyć „przejażdżkę” na fotelu dentystycznym.
        Lekarz przeprowadza badanie zębów w sposób komfortowy i bezstresowy dla
        dziecka.
      </p>
      <ArrowLink
        type="standard"
        text="Obejrzyj zdjęcia naszego gabinetu"
        link="nasz-gabinet"
      />
    </section>
    <Movie src="https://www.youtube.com/embed/BbJVej38cgs" />
    <section className="container">
      <h2>Pierwsza wizyta krok po kroku</h2>
      <ol>
        <li>
          <span>
            Dzień przed wizytą potwierdzamy telefonicznie termin. Żeby
            zaoszczędzić czas Rodzic może przed wizytą pobrać, wydrukować i
            wypełnić ankietę medyczną dostępną <a href="">TUTAJ</a>, którą
            następnie należy oddać w rejestracji w dzień wizyty. Jeśli zechcą
            Państwo wypełnić ankietę na miejscu – zapraszamy na wizytę 15 minut
            wcześniej. Jeśli posiadają Państwo wcześniejszą dokumentację
            medyczną dziecka lub zdjęcia RTG, prosimy o zabranie ich ze sobą.
          </span>
        </li>
        <li>
          Przy budynku gabinetu znajduje się bezpłatny, monitorowany parking.
        </li>
        <li>
          W dniu wizyty zapraszamy do rejestracji – nasz personel zaopiekuje się
          Państwem oraz wskaże salę zabaw, gdzie dziecko będzie mogło przyjemnie
          spędzić czas w oczekiwaniu na wizytę w gabinecie.
        </li>
        <li>
          Rodzicom naszych małych dzielnych Pacjentów proponujemy aromatyczną
          kawę lub herbatę. Zapewniamy także ciepłe i zimne napoje. W razie
          potrzeby, przed konsultacją można także skorzystać z jednorazowych
          past i szczoteczek do zębów.
        </li>
        <li>
          Kolejnym etapem jest wizyta w gabinecie. Aby wizyta była jak
          najmniejszym obciążeniem dla dziecka, na monitorze umieszczonym przy
          fotelu dentystycznym włączana jest ulubiona bajka. Lekarz przeprowadza
          wywiad z Rodzicem / Opiekunem, zapoznaje dziecko z gabinetem i w
          umiejętny, bezstresowy sposób przeprowadza dokładne badanie stanu
          uzębienia dziecka.
        </li>
        <li>
          Po badaniu przygotowywany jest indywidualny plan leczenia dziecka
          uwzględniający ceny zabiegów. W niektórych przypadkach istnieje
          możliwość podjęcia leczenia już na pierwszej wizycie.
        </li>
        <li>
          Na podstawie planu leczenia umawiane są kolejne wizyty, w dogodnym dla
          Rodziców / Opiekunów terminie. Wizyty można umówić po wizycie w
          rejestracji lub telefonicznie pod numerem {contactData.phone}.
        </li>
        <li>
          W naszym gabinecie akceptujemy płatności gotówką i kartą, udostępniamy
          też możliwość płatności w systemie ratalnym.
        </li>
      </ol>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Pierwsza wizyta u dentysty" />

export default PierwszaWizyta
