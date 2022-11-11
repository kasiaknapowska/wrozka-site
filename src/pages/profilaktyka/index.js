import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"
import CubeLinks from "../../components/cubeLinks/CubeLinks"
import Movie from "../../components/movie/Movie"

const cubeElements = [
  { name: "Higiena", link: "profilaktyka/higiena" },
  { name: "Fluoryzacja", link: "profilaktyka/fluoryzacja" },
  { name: "Ozonowanie", link: "profilaktyka/ozonowanie" },
  { name: "Lakowanie", link: "profilaktyka/lakowanie" },
]

const Profilaktyka = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Profilaktyka",
        description:
          "Zęby mleczne różnią się swoją anatomią od zębów stałych. Są słabiej zmineralizowane, przez co są bardziej podatne na rozwój próchnicy. Biorąc pod uwagę fakt, że u dzieci trudniej zachować prawidłową higienę uzębienia, próchnica w zębach mlecznych postępuje błyskawicznie i w krótkim czasie może doprowadzić do zniszczenia całych koron zębowych i zainfekowania wyrzynających się zębów stałych. Dlatego tak ważna jest profilaktyka i regularne kontrole u stomatologa co 3-4 miesiące.",
        text: "Umów kontrolę u dentysty",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>Działania profilaktyczne mają na celu zapobieganie rozwojowi próchnicy.</h3>
      <p>
        W naszym gabinecie stomatologicznym podstawą profilaktyki jest wczesne
        wykrywanie najmniejszych zmian w zębach dziecka. Niewidoczne jeszcze
        zmiany diagnozujemy przy pomocy lasera diagnostycznego. Laser wskazuje
        miejsca, gdzie występują początkowe demineralizacje zębów i pozwala
        obiektywnie odróżnić niegroźne plamki na zębach od zmian próchnicowych.
        Badanie jest nieinwazyjne, końcówka lasera wysyła wiązkę światła w
        kierunku zęba i odczytuje wynik. Dzięki temu możemy zaproponować naszym
        małym Pacjentom odpowiednie zabiegi profilaktyczne, m.in. ozonowanie,
        fluoryzację, lakowanie zębów.
      </p>
      <p>
        Na co dzień w ramach profilaktyki ważna jest prawidłowa higiena
        uzębienia dziecka, zdrowe nawyki żywieniowe oraz utrzymanie prawidłowego
        poziomu witaminy D!
      </p>
    </section>
    <CubeLinks cubeElements={cubeElements} />
    <section className="container">
      <h2>Prawidłowy poziom witaminy D</h2>
      <p>
        Niezwykle ważne dla zdrowia dziecka oraz zdrowych zębów jest odpowiedni
        poziom witaminy D. Aby ustalić odpowiednią suplementację, która
        skutecznie uzupełni niedobory, najlepiej jest wykonać badanie poziomu
        witaminy D. W naszym gabinecie wykonasz takie badanie na miejscu, szybko
        i bezboleśnie, bez używania strzykawki. Dodatkowo otrzymasz
        interpretację wyniku oraz indywidualne wskazówki odnośnie uzupełniania
        witaminy D u Twojego dziecka.
      </p>
      <h3>Jak działa witamina D?</h3>
      <ul className="twoColumns">
        <li>mniejsza skłonność do infekcji bakteryjnych i wirusowych</li>
        <li>ogranicza napady astmy</li>
        <li>przeciwdziała otyłości</li>
        <li>poprawia samopoczucie</li>
        <li>hamuje rozwój próchnicy</li>
        <li>przyspiesza efekty leczenia ortodontycznego</li>
        <li>przyspiesza gojenie po usuwaniu zębów</li>
        <li>odpowiada za prawidłowy rozwój kości</li>
      </ul>
    </section>
    <Movie src="https://www.youtube.com/embed/1TM1CuUxRJ8" />
    <section className="container">
      <h2>Zdrowa dieta</h2>
      <h3>
        Największym wrogiem zdrowych zębów jest cukier. Na skutek rozkładu
        cukrów, w jamie ustnej dochodzi do produkcji kwasów, które uszkadzają
        szkliwo zębów.{" "}
      </h3>
      <p>
        Wydawałoby się, że wystarczy ograniczyć słodycze, takie jak cukierki,
        czekoladę, batony, czy słodkie napoje by zachować zdrowe zęby. Okazuje
        się, że nie. Producenci żywności stosują sprytne sztuczki, np. etykiety
        dedykowane dzieciom lub z napisem „fit”, które zachęcają do zakupu i
        usypiają czujność rodziców. W rzeczywistości w takich produktach często
        jest więcej cukru niż w ich „zwyczajnych” odpowiednikach. Dlatego warto
        wybierać produkty świadomie, czytając etykietę. Warto zwrócić więc uwagę
        na to, ile cukru zawiera przekąska. Ze słodyczy najzdrowsza będzie
        ciemna czekolada, która oprócz zaspokojenia apetytu na słodycze,
        dostarczy nam także magnezu. Starajmy się także unikać produktów, które
        oblepiają zęby, takich jak krówki, słodkie gumy do żucia czy lizaki. I
        koniecznie musimy pamiętać, że po zjedzeniu słodyczy należy umyć zęby,
        aby nie dopuścić do namnażania się bakterii.
      </p>
      <h3>Prawidłowa dieta to nie tylko zapobieganie próchnicy.</h3>
      <p>
        Dzieci powinny codziennie gryźć i żuć twarde produkty. Jest to naturalne
        ćwiczenie mięśni twarzy i jamy ustnej oraz przyczynia się do
        prawidłowego rozwoju zgryzu. Dlatego najlepiej unikać podawania dzieciom
        zmiksowanej zupy czy przecierów owocowych na rzecz pokarmów
        nieprzetworzonych, z kawałkami.
      </p>
      <p>
        Dieta dziecka powinna być bogata w składniki odżywcze, takie jak wapń,
        magnez czy witamina D, które biorą udział w procesach wzrostu i
        mineralizacji kości i zębów. Należy zadbać, by w diecie dziecka znalazły
        się produkty pełnoziarniste, świeże ryby, nabiał, jaja.
      </p>
      <h3>
        Drogi Rodzicu! Pamiętaj, że jesteś wzorem dla Twojego dziecka! Dlatego
        bądź dla niego dobrym przykładem do naśladowania!
      </h3>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Profilaktyka - zdrowe zęby dziecka" />

export default Profilaktyka
