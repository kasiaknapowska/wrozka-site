import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import ArrowLink from "../components/arrowLink/ArrowLink"

const EkstrakcjeZebow = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Usuwanie zębów",
        description:
          "Zazwyczaj z usuwaniem zębów mlecznych dzieci i ich Rodzice nie mają większych problemów. Można pozostawić ząb, aż sam wypadnie, natomiast gdy mocno się rusza wystarczy przytrzymać go za pomocą sterylnej gazy i wyciągnąć dynamicznym ruchem w górę lub w dół, unikając przechylania zęba na boki (w ten sposób tworzy się większa rana i można doprowadzić do urazu kości).",
      }}
      location={location.pathname}
    />

    <section className="container">
      <h2>Kiedy należy zgłosić się do dentysty?</h2>
      <h3>
        Istnieje kilka sytuacji, gdy wskazane jest zgłoszenie się do dentysty w
        celu usunięcia zęba u dziecka.
      </h3>
      <ul>
        <li>
          Gdy ząb jest bardzo zniszczony przez próchnicę i jego dalsze
          utrzymanie odbiłoby się niekorzystnie na zdrowiu pozostałych zębów,
          lekarz może zdecydować o usunięciu zęba przed jego czasem
          fizjologicznej wymiany. UWAGA! Wczesne usuwanie zębów mlecznych może
          prowadzić do wad ortodontycznych. Dlatego lekarz może zdecydować o
          wykonaniu specjalnej protezy - tzw. "utrzymywacza przestrzeni", który
          będzie imitować usunięty ząb i zabezpieczy miejsce dla zęba stałego.
        </li>
        <li>
          Gdy istnieją wskazania ortodontyczne do usunięcia zęba, np. gdy ząb
          stały wyrzyna się w nieprawidłowym miejscu, ponieważ mleczak obecny w
          tym miejscu jeszcze nie wypadł.
        </li>
        <li>
          Gdy mamy do czynienia z zębem przetrwałym, czyli zębem mlecznym, który
          pozostaje w jamie ustnej dziecka po przewidywanym terminie jego
          fizjologicznej utraty. Bardzo ważne jet, aby przed decyzją o usunięciu
          zęba wykonać zdjęcie RTG sprawdzające obecność i położenie zawiązka
          zęba stałego. Takie badanie wykonujemy na miejscu w gabinecie.
        </li>
        <li>
          Gdy ze względu na uraz ząb uległ złamaniu i nie jest możliwe
          uratowanie go dostępnymi obecnie metodami.
        </li>
      </ul>
    </section>
    <section className="container">
      <h2>Zabieg ekstrakcji</h2>
      <h3>
        W gabinecie Wróżka Zębuszka usuwanie zębów przeprowadzane jest w
        znieczuleniu miejscowym. Gdy zachodzi taka potrzeba podawany jest
        podtlenek azotu (gaz rozweselający) lub dziecko kwalifikowane jest do
        zabiegu w narkozie.
      </h3>
      <p>
        Usuwanie zęba kontrolowane jest pod mikroskopem oraz za pomocą zdjęć
        RTG. Dzięki temu mamy pewność, że w kości nie pozostały odłamki zęba,
        które mogłyby prowadzić do pojawienia się stanów zapalnych.{" "}
      </p>
      <p>
        Do wyczyszczonego zębodołu aplikowany jest gazowy ozon, który działa
        przeciwbakteryjnie, minimalizuje ryzyko wystąpienia infekcji i
        przyspiesza gojenie tkanek. Dodatkowo stosowane są gąbki kolagenowe,
        które zabezpieczają przed zapadaniem się kości.
      </p>
      <p>
        Aby przyspieszyć regenerację okolica zabiegu naświetlana jest laserem
        biostymulującym.
      </p>
      <ArrowLink
        type="standard"
        link="kontakt"
        text="Umów wizytę"
      />
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Ekstrakcje zębów u dzieci" description={"Usuwanie zębów w podtlenku azotu i narkozie. Bez bólu i stresu. Wykwalifikowana kadra stomatologów dziecięcych. Zadzwoń i umów wizytę. "} />

export default EkstrakcjeZebow
