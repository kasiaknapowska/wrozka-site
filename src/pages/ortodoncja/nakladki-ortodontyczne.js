import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const NakladkiOrtodontyczne = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Przezroczyste nakładki ortodontyczne",
        description:
          "Dużą popularnością wśród młodzieży cieszą się aparaty ortodontyczne w postaci indywidualnie zaprojektowanych przezroczystych nakładek na zęby. Są one niewidoczne, komfortowe i można je bez problemu zdejmować. ",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>
        Styl życia młodych ludzi i ich dbałość o wygląd sprawia, że metalowe
        zamki i druty na zębach są nie do zaakceptowania. Leczenie
        przezroczystymi nakładkami doskonale odpowiada potrzebom młodych,
        aktywnych ludzi.
      </h3>
      <p>
        Leczenie przezroczystymi nakładkami jest skuteczne zarówno w delikatnych
        wadach zgryzu jak i w bardziej skomplikowanych przypadkach. Każdorazowo
        decyzję o doborze najlepszego rozwiązania podejmuje rodzic lub opiekun
        Pacjenta wraz z lekarzem ortodontą.
      </p>
      <p>
        W naszym gabinecie istnieje możliwość wyboru systemu przezroczystych
        nakładek – dostępny jest popularny system Invisalign oraz nakładki Clear
        Correct.
      </p>
    </section>
    <section className="container">
      <h2>Jak przebiega leczenie?</h2>
      <ol>
        <li>
          Przed leczeniem przeprowadzana jest dokładna diagnostyka – zdjęcia RTG
          oraz komputerowy skan uzębienia.
        </li>
        <li>
          Lekarz opracowuje wirtualny plan leczenia i zleca przygotowanie
          indywidualnych nakładek na zęby.
        </li>
        <li>
          Po otrzymaniu zestawu nakładek Pacjent wymienia je samodzielnie co
          około 1-2 tygodnie. Nakładki powinny być założone nawet przez 22
          godziny na dobę, z przerwami na jedzenie i mycie zębów. Powyższe
          informacje są orientacyjne, prosimy pamiętać, że szczegółowe wytyczne
          co do używania aparatu zawsze przekazuje lekarz.
        </li>
        <li>
          Dzięki precyzji komputerowego planowania ilość wizyt kontrolnych
          zredukowana jest do minimum. Zwykle ortodontę należy odwiedzać raz na
          6-8 tygodni. Czas trwania kontroli jest zdecydowanie krótszy niż w
          przypadku aparatów stałych, gdyż nie ma konieczności wymiany łuków czy
          zamków. Czas trwania całego procesu leczenia różni się u każdego
          Pacjenta i zależy od rodzaju wady zgryzu i stopnia złożoności
          leczenia.
        </li>
        <li>
          Niezależnie od wybranej metody leczenia po zakoczeniu prostowania
          zębów konieczne jest stosowanie retainerów(aparatów retencyjnych). Ich
          zadaniem jest utrzymanie uzyskanych efektów poprzez zapobieganie
          przesuwaniu się zębów do wyjściowej pozycji.
        </li>
      </ol>
    </section>
    <section className="container">
      <h2>Korzyści z leczenia nakładkami ortodontycznymi</h2>
      <ul>
        <li>
          <strong>DYSKRECJA</strong> – nakładki są niewidoczne na zębach, nikt nie musi wiedzieć
          o leczeniu Twojego dziecka
        </li>
        <li>
          <strong>SZYBKI EFEKT</strong> – leczenie zwykle przebiega szybciej, niż w przypadku
          tradycyjnych metod, a ilość wizyt kontrolnych jest zredukowana do
          minimum
        </li>
        <li>
         <strong>PRZEWIDYWALNOŚĆ</strong> – leczenie planowane jest za pomocą programu
          komputerowego
        </li>
        <li>
          <strong>PRECYZJA</strong> – nakładki są zaprojektowane indywidualnie, aby w precyzyjny
          sposób przesuwać zęby do prawidłowego ułożenia
        </li>
        <li>
          <strong>KOMFORT</strong> – idealne dopasowanie oraz możliwość łatwego zdejmowania i
          zakładania nakładek daje wygodę nieporównywalną z tradycyjnymi
          aparatami
        </li>
        <li>
          <strong>ŁATWA HIGIENA</strong> - niezwykle proste jest utrzymanie higieny przy tego typu
          aparacie – wystarczy zdjąć nakładki i wyczyścić zęby tak jak zawsze
        </li>
        <li>
         <strong>BEZ DIETY</strong>– na czas jedzenia nakładki są zdejmowane, dzięki czemu
          Pacjent może jeść to co lubi
        </li>
      </ul>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Przezroczyste nakladki ortodontyczne" />

export default NakladkiOrtodontyczne
