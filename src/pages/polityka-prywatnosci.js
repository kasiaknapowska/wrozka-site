import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"

const PolitykaPrywatnosci = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Polityka prywatności",
        description:
          "Informacje dla użytkowników strony internetowej www.wrozka-zebuszka.pl",
        text: "Skontaktuj się z nami",
      }}
      location={location.pathname}
    />
    <section className="container">
      <p>
        Administratorem danych osobowych jest firma Roman Borczyk Klinika
        Implantologii i Stomatologii Estetycznej sp.j. w Katowicach, ul. Czajek
        5a, 40-533 Katowice;
      </p>
      <p>
        Przysługuje Państwu prawo dostępu do treści danych osobowych, ich
        poprawienia, złożenia sprzeciwu wobec przetwarzania danych w celach
        marketingowych lub przekazania ich innym odbiorcom, w tym prawo do
        zaprzestania ich przetwarzania w celach marketingowych;
      </p>
      <p>
        Podanie danych oraz zgoda na ich przetwarzanie w celach nie związanych z
        procesem leczenia jest dobrowolna. Niniejsze zgody obejmują
        przetwarzanie danych w przyszłości, jeśli nie zmieni się cel
        przetwarzania lub jeśli zgoda nie zostanie cofnięta.
      </p>
      <p>
        Dostęp do Państwa danych osobowych w celu poprawienia, złożenia
        sprzeciwu wobec przetwarzania danych w celach marketingowych lub
        przekazania ich innym odbiorcom, w tym prawo do zaprzestania ich
        przetwarzania w celach marketingowych możliwy jest osobiście w recepcji
        naszego gabinetu przy ulicy Czajek 5a, telefonicznie pod nr telefonu +48
        32 203 74 25 lub mailowo pod adresem obsluga.pacjenta@borczyk.pl
      </p>
     
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Wróżka Zębuszka - polityka prywatności" description={"Administratorem danych osobowych jest firma Roman Borczyk Klinika Implantologii i Stomatologii Estetycznej sp.j. w Katowicach"}/>

export default PolitykaPrywatnosci
