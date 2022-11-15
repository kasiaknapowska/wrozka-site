import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import ArrowLink from "../components/arrowLink/ArrowLink"

const Diagnostyka = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Diagnostyka",
        description:
          "Badania diagnostyczne dostępne w naszym gabinecie pozwalają wykryć nieprawidłowości, które mają wpływ na zdrowie ogólne Dziecka, jego stan uzębienia i efekty leczenia stomatologicznego.",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Laserowe badanie próchnicy</h2>
      <h3>
        Laser diagnostyczny obiektywnie wykrywa wczesne stadia zmian
        próchnicowych, które mogą być leczone nieinwazyjnie, bez nieprzyjemnego
        „borowania” i niepotrzebnego stresu.
      </h3>
      <p>
        Laser wykrywa niewidoczną „gołym okiem” próchnicę – dostrzega zmiany,
        których nie da się zauważyć podczas tradycyjnej kontroli. Jak to działa?
        Laser wysyła wiązkę światła w kierunku zęba, a światło w tkankach z
        próchnicą wzbudza zjawisko fluorescencji. Dzięki temu jesteśmy w stanie
        wykryć próchnicę w początkowym stadium i wyleczyć ją bezbolesną,
        błyskawiczną metodą ozonoterapii.
      </p>
    </section>
    <section className="container">
      <h2>Badania RTG u dzieci</h2>
      <h3>
        Wykorzystujemy cyfrowe mietody diagnostyki RTG, które emitują minimalną,
        bezpieczną dla dzieci dawkę promieniowania. Badania wykonywane są na
        miejscu w gabinecie i trwają zaledwie kilka sekund.
      </h3>
      <p>
        Obraz rentgenowski pozwala lekarzowi zobaczyć stan zębów i kości dziecka
        a także uwarunkowań anatomicznych kluczowych dla precyzyjnego planowania
        i bezpiecznego przeprowadzenia zabiegów.
      </p>
      <h3>Wykonujemy zdjęcia RTG:</h3>
      <ul>
        <li>
          <strong>PANORAMICZNE</strong> - obrazujące całość uzębienia
        </li>
        <li>
          <strong>CEFALOMETRYCZNE</strong> - zdjęcia boczne wykorzystywane w
          ortodoncji
        </li>
        <li>
          <strong>ZĘBOWE</strong> - zdjęcia RTG pojedynczych zębów
        </li>
      </ul>
    </section>
    <section className="container">
      <h2>Badanie mikroskopowe</h2>
      <h3>
        Gabinety Wróżki Zębuszki wyposażone są w mikroskopy, dzięki którym
        lekarz jest w stanie dostrzec najmniejsze problemy, niewidoczne przy
        użyciu lusterka stomatologicznego. Mikroskop uzupełnia diagnostykę
        Pacjentów zapeniając dużo większą precyzję oraz umożliwiając
        małoinwazyjne i bezpieczne leczenie.
      </h3>
    </section>
    <section className="container">
      <h2>Badania z kropli krwi w trosce o zdrowe zęby</h2>
      <h3>
        Czasem wystarcza drobna modyfikacja stylu życia oraz diety Dziecka, by
        uniknąć konieczności wizyty u lekarza specjalisty. Dlatego warto raz na
        jakiś czas wykonać badania krwi u dziecka.
      </h3>
      <p>
        Do wykonania badań wystarczą jedynie 4 krople krwi, które pobieramy na
        miejscu w Dentolandii, bez konieczności wizyty Dziecka w punkcie poboru
        krwi. Krew pobieramy z palca bez użycia strzykawki, dzięki czemu nie
        narażamy małego Pacjenta na niepotrzebny stres. Otrzymane wyniki badań
        analizowane są wspólnie przez naszych stomatologów i dietetyka
        klinicznego, którzy na ich podstawie ustalają indywidualne zalecenia
        mające na celu wyeliminowanie ewentualnych zaburzeń.
      </p>
      <h3>Co najczęściej oceniamy u dzieci?</h3>
      <ul>
        <li>
          <strong>POZIOM WITAMINY D</strong> - prawidłowy poziom witaminy D daje
          szereg cennych korzyści z punktu widzenia stomatologa, m.in. zmniejsza
          ryzyko rozwoju próchnicy, przyspiesza gojenie po usunięciu lub utracie
          zęba, przyspiesza leczenie ortodontyczne, zwiększa odporność na
          infekcje (afty, opryszczka).
        </li>
        <li>
          <strong>MORFOLOGIA</strong> - morfologia krwi pozwala w prosty sposób
          ocenić zmiany zachodzące w organizmie Dziecka, niedobory witamin i
          składników mineralnych, a także wykryć infekcje wirusowe i bakteryjne,
          stany zapalne, zaburzenia odporności, choroby krwi (np. anemię). 3.
          poziom CRP
        </li>
        <li>
          <strong>POZIOM CRP</strong> - CRP wskazuje na toczący się w organizmie
          stan zapalny (również zębopochodny), który może niekorzystnie wpłynąć
          na leczenie zęba lub gojenie po zabiegach.
        </li>
      </ul>
      <ArrowLink
        type="standard"
        link="kontakt"
        text="Umów badanie"
      />
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Diagnostyka" description={"Umów wizytę! Wykonujemy badania diagnostyczne, które wykrywają nieprawidłowości wpływające na zdrowie i zęby dzieci. Laserowa diagnostyka próchnicy. Badania RTG. Morfologia. Badanie poziomu witaminy D."}/>

export default Diagnostyka
