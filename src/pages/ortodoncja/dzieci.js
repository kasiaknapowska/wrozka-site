import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const Dzieci = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Leczenie ortodontyczne dzieci",
        description:
          "Czy Twoje dziecko nawykowo ssie kciuk lub śpi z otwartymi ustami? A może zauważyłaś/eś problemy z wymową? Gdy u Twojego dziecka pojawiają się zęby mleczne, jest to najlepszy czas na pierwszą kontrolę u ortodonty. Już u kilkulatka można zdiagnozować i wyeliminować pewne nieprawidłowości oraz zadbać o harmonijne kształtowanie mięśni i kości twarzoczaszki, z korzyścią dla ładnego uśmiechu i równo ustawionych zębów w przyszłości.",
        text: "Umów wizytę u ortodonty",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Dlaczego warto odwiedzić ortodontę już z 3-latkiem? </h2>
      <h3>
        Wczesna diagnoza dysfunkcji to lepszy rozwój kości i zgryzu, a w efekcie
        krótsze leczenie w ortodontyczne w przyszłości.
      </h3>
      <p>
        Optymalny wiek, kiedy powinno się odbyć pierwszą kontrolę ortodontyczną
        u dziecka to 3-5 lat. W wieku 7 lat badanie jest już konieczne… U
        kilkuletniego dziecka mięśnie i kości czaszki intensywnie się rozwijają.
        W okresie tego rozwoju zwykle nie ma jeszcze wady zgryzu, co usypia
        czujność rodziców. Warto mieć świadomość, że pewne nawyki u kilkulatka
        oraz niedobory witamin mogą przyczyniać się do nieprawidłowego rozwoju
        twarzoczaszki, co w przyszłości może prowadzić do poważnych problemów
        ortodontycznych, które wymagać będą długotrwałego leczenia.
      </p>
      <p>
        Leczenie jest szczególnie wskazane, gdy u dziecka utrzymuje się nawykowe
        ssanie kciuka lub dolnej wargi, gdy pojawiają się problemy z mową i
        połykaniem pokarmu, a także jeśli maluch oddycha wyłącznie przez usta.
        Także nieprawidłowe wędzidełko wargi górnej lub dolnej oraz wady postawy
        wpływają na nieprawidłowy rozwój zgryzu.
      </p>
      <h3>Korzyści z leczenia ortodontycznego wczesnego</h3>
      <ul className="twoColumns">
        <li>właściwy wzrost szczęki i żuchwy</li>
        <li>korelowanie szerokości łuków zębowych</li>
        <li>zabezpieczenie miejsca dla wyrzynających się zębów stałych</li>
        <li>uproszczenie i/lub skrócenie późniejszego leczenia aparatami stałymi</li>
        <li>niwelowanie szkodliwych nawyków i dysfunkcji</li>
        <li>poprawa wyglądu i symetrii twarzy</li>
        <li>korekcja zaburzeń mowy</li>
      </ul>
    </section>
    <section className="container">
      <h2>Jak wygląda leczenie najmłodszych pacjentów?</h2>
      <h3>
        Leczenie kilkulatków polega na stymulowaniu prawidłowego rozwoju mięśni
        twarzy oraz prawidłowym kształtowaniu wzrostu kości.
      </h3>
      <p>
        Dzięki temu ortodonta przygotowuje odpowiednie podłoże do późniejszego
        prawidłowego wyrzynania się zębów. Leczenie wczesne polega też na
        eliminowaniu dysfunkcji, które zaburzają rozwój twarzoczaszki u dziecka.
      </p>
      <p>
        Leczenie wczesne dotyczy dzieci z uzębieniem mlecznym lub mieszanym.
        Przeprowadzane jest ono za pomocą aparatów ruchomych (wyjmowanych),
        które wymuszają odpowiednie ćwiczenie mięśni. W kolejnym etapie
        stosowane są aparaty ruchome lub stałe wpływające na kształtowanie kości
        u dziecka.
      </p>
      <p>
        Bardzo ważna podczas leczenia wczesnego jest współpraca ortodonty z
        lekarzami innych specjalności, m.in. logopedą, laryngologiem,
        fizjoterapeutą czy też chirurgiem stomatologicznym.
      </p>
      <p>
        Dodatkowo konieczne jest monitorowanie poziomu witaminy D w organizmie -
        witamina D ułatwia prawidłowy wzrost i przebudowę kości.
      </p>
    </section>
    <section className="container">
      <h2>Zdrowe mleczaki to prosty zgryz</h2>
      <p>
        Zęby mleczne i tak wypadną… Czy w takim razie trzeba je leczyć? Z punktu
        widzenia ortodontycznego zęby mleczne odgrywają ogromną rolę w
        kształtowaniu kości. Korzenie mleczaków stymulują wzrost kości, a ich
        przedwczesna utrata może zahamować ten rozwój przyczyniając się do
        poważnych problemów ze zgryzem. Dlatego bardzo ważne jest utrzymanie
        zębów mlecznych aż do czasu ich fizjologicznej wymiany. Warto wiedzieć,
        że proces wymiany uzębienia rozpoczyna się około 6 roku życia a kończy
        dopiero w wieku 10-12 lat.
      </p>
    </section>
    <div className="container">
      <Link to="/ortodoncja">WRÓĆ DO STRONY ORTODONCJA</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Leczenie ortodontyczne dzieci" />

export default Dzieci
