import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import ArrowLink from "../components/arrowLink/ArrowLink"

const Znieczulenia = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Rodzaje znieczuleń",
        description:
          "W naszym gabinecie nie ma obawy przed bólem! Używamy znieczuleń komputerowych, które są podawane w sposób bezbolesny i komfortowy dla małego Pacjenta. Stosujemy także podtlenek azotu (gaz rozweselający), a w momencie, gdy Pacjent nie współpracuje, leczenie może być wykonane w narkozie.",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Znieczulenie komputerowe</h2>
      <h3>
        W gabinecie Wróżka Zębuszka zabiegi przeprowadzamy w znieczuleniu
        miejscowym, które skutecznie eliminuje ból.
      </h3>
      <p>
        Doskonale zdajemy sobie sprawę, że dziecko, podobnie jak wielu
        dorosłych, nie zaakceptuje podania znieczulenia za pomocą igły i
        strzykawki. Dlatego korzystamy ze specjalnych systemów komputerowych, w
        których końcówka do podania znieczulenia przypomina różdżkę naszej
        Wróżki i nie przywołyje złych skojarzeń. Dodatkowo przez podaniem
        właściwego znieczulenia smarujemy dziąsło owocowym żelem, który wstępnie
        znieczula zapewniając pełen komfort małemu pacjentowi.
      </p>
    </section>
    <section className="container">
      <h2>Bezpieczne leczenie z użyciem gazu rozweselającego</h2>
      <h3>
        Podtlenek azotu to bezpieczna i sprawdzona forma znieczulenia wziewnego.
        Gaz rozweselający działa uspokajająco na Małego Pacjenta i pomaga
        przezwyciężyć strach związany z leczeniem stomatologicznym.{" "}
      </h3>
      <p>
        Sedacja wziewna określana jest jako stan fizycznego odprężenia i
        oderwania od rzeczywistości przy jednoczesnym zachowaniu podstawowych
        odruchów i świadomości. Dzięki zastosowaniu podtlenku azotu wizyta
        przebiega w luźnej atmosferze, sprawnie i spokojnie, bez narażania
        dziecka na przykre wspomnienia. Sedacja wziewna często pozwala uniknąć
        konieczności stosowania znieczulenia ogólnego u małych Pacjentów
        obawiających się wizyt w gabinecie. Gaz rozweselający nie uczula, nie
        podrażnia śluzówek i nie działa na ośrodkowy układ nerwowy. Po zabiegu
        jest całkowice wydalany z organizmu, a mały Pacjent może od razu wrócić
        z Rodzicami/Opiekunami do domu.
      </p>
      <h3>Co warto wiedzieć o podtlenku azotu</h3>
      <ul>
        <li>
          Gaz rozweselający to mieszanina tlenu i podtlenku azotu, która działa
          uspokajająco na małego Pacjenta.
        </li>
        <li>
          {" "}
          Nie uczula, nie podrażnia śluzówek i nie działa na ośrodkowy układ
          nerwowy.
        </li>
        <li>
          Gaz podawany jest przez nos, dlatego przez rozpoczęciem zabiegu w
          sedacji wziewnej istotna jest ocena drożności nosa.
        </li>
        <li>
          Gaz podawany jest przez specjalną maseczkę o przyjemnym zapachu.
          Maseczka jest wielokrotnego użytku - zakupioną maseczkę Pacjent
          przynosi na każdą wizytę.
        </li>
        <li>
          Zaleca się, by 2 godziny przed zabiegiem Pacjent nie przyjmował
          żadnych posiłków - zmniejsza to ryzyko wymiotów w trakcie leczenia.
        </li>
        <li>
          Po zakończonym leczeniu podawany jest czysty tlen. Już po kilku
          minutach podtlenek azotu jest całkowicie wydalany z organizmu a
          Dziecko wraca do pełnej świadomości i może od razu wrócić z Rodzicami
          / Opiekunami do domu.
        </li>
      </ul>
    </section>
    <section className="container">
      <h2>Leczenie w narkozie</h2>
      <h3>
        Czasem strach przed dentystą tak paraliżuje dziecko, że nie ma
        możliwości podjęcia skutecznego leczenia. W takiej sytuacji często
        jedynym sposobem przeprowadzenia zabiegów stomatologicznych jest podanie
        znieczulenia ogólnego.{" "}
      </h3>
      <ArrowLink
        link="narkoza"
        type="standard"
        text="Dowiedz się więcej o leczeniu w narkozie"
      />
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="Rodzaje znieczuleń stosowanych u dzieci" />
)

export default Znieczulenia
