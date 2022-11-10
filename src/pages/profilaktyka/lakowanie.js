import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const Lakowanie = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Lakowanie zębów",
        description:
          "Zęby posiadają liczne bruzdy, szczeliny i zagłębienia, które trudno jest oczyścić. Szczególnie u dzieci zachowanie prawidłowej higieny często graniczy z cudem. Niedoczyszczone powierzchnie, do których nie dociera szczoteczka lub nić dentystyczna, są siedliskiem bakterii próchnicowych, które żywią się resztkami zalegającego pokarmu i powodują rozwój próchnicy. Jak temu zapobiec?",
        text: "Umów dziecko na zabieg lakowania",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Lakowanie chroni bruzdy zębów przed próchnicą!</h2>
      <p>
        Zabieg najlepiej wykonać tuż po wyrznięciu całej powierzchni żującej
        zęba, szczególnie trzonowców i przedtrzonowców. Dlaczego warto wykonać
        zabieg jak najszybciej? Dlatego, że powierzchnie zębów muszą być
        całkowicie zdrowe i wolne od próchnicy! Lak pokrywa powierzchnię
        szczelin i bruzd, zapobiegając zaleganiu pokarmów tych miejscach,
        chroniąc przed czynnikami zewnętrzbnymi (np. cukrem) i zapobiegając
        rozwojowi bakterii.
      </p>
      <h3>Jak przebiega lakowanie zębów?</h3>
      <ol>
        <li>
          Przed zabiegiem powierzchnie zębów dokładnie oczyszczamy szczoteczką
          ze specjalną pastą lub piaskarką.
        </li>
        <li>
          W celu kwalifikacji do zabiegu wykonujemy badanie laserem
          diagnostycznym, który pozwala obiektywnie ocenić, czy ząb jest
          całkowicie zdrowy i może być poddany lakowaniu. Laser wykrywa nawet
          najmniejsze, niewidoczne „gołym okiem“ stadia próchnicy będące
          przeciwskazaniem do zabiegu. W przypadku demineralizacji stosujemy
          inne metody profilaktyczne.
        </li>
        <li>
          Przed lakowaniem ząb jest ozonowany w celu wyeliminowania bakterii,
          które mogłyby się przyczynić do powstania próchnicy wtórnej pod
          lakiem.
        </li>
        <li>
          Przeprowadzamy lakowanie, które polega na nałożeniu specjalnego
          preparatu, który po utwardzeniu za pomocą lampy stomatologicznej
          tworzy gładką i łatwą do oczyszczenia powierzchnię chroniącą bruzdy
          zębów przed próchnicą.
        </li>
        <li>Co pół roku należy kontrolować stan laku z zębach.</li>
      </ol>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Lakowanie zębów" />

export default Lakowanie
