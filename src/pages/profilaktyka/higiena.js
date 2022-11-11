import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"
import ArrowLink from "../../components/arrowLink/ArrowLink"
import Movie from "../../components/movie/Movie"

const Higiena = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Jak dbać o zęby dziecka?",
        description:
          "Jak dbać o prawidłową higienę jamy ustnej u dziecka? Zdajemy sobie sprawę, że jest to nie lada wyzwanie. Małe dzieci często nie chcą myć zębów, te starsze szczotkują zęby pobieżnie i nieefektywnie. Poniżej przedstawiamy kilka prostych porad dla Rodziców, jak prawidłowo dbać o higienę zębów u dzieci. Jeśli chcesz otrzymać indywidualne wskazówki, by prawidłowo zadbać o zęby swojego dziecka, skontaktuj się z nami!",
        text: "Przejdź do kontaktu",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Porady dla Rodziców</h2>
      <ul>
        <li>
          Regularne szczotkowanie zębów odpowiednią techniką i dobrze dobraną
          szczoteczką i pastą do zębów. Szczotkowanie powinno trwać około 2
          minuty, a dziecko musi dotrzeć szczoteczką do wszystkich powierzchni
          zębów, również tych z tyłu. W młodszych dzieci konieczna jest pomoc
          Rodziców, u starszych – warto kontrolować czy zęby są odpowiednio
          oczyszczone!
        </li>
        <li>
          Najlepiej stosować pastę z fluorem już od pierwszego zęba mlecznego.
          Ilość pasty wielkości ziarnka grochu jest bezpieczna dla dziecka.
        </li>
        <li>
          Stosowanie szczoteczki elektrycznej już od najmłodszych lat – taka
          szczoteczka dużo efektywniej oczyszcza zęby.
        </li>
        <li>
          Stosowanie nici dentystycznych oraz irygatora - nawet u dzieci daje to
          doskonałe efekty!
        </li>
        <li>
          Pilnowanie niepodjadania przed snem. Ostatni posiłek w ciągu dnia,
          należy zjeść przed wieczornym szczotkowaniem – potem można już tylko
          pić czystą wodę. Nie należy podawać dzieciom mleka i słodkich napojów
          bezpośrednio przed zaśnięciem.
        </li>
        <li>
          Niewkładanie palców i przedmiotów do buzi. Otwieranie opakowań i
          butelek rękami, a nie zębami
        </li>
        <li>
          Ograniczenie ilości spożywanych słodyczy. Jeśli już dajemy dziecku
          słodką przekąskę, to niech dziecko zje ją na raz a potem umyje zęby, a
          nie co chwilę podjada. Przy podjadaniu cukier ma długi kontakt z
          powierzchnią zębów co sprzyja rozwojowi próchnicy.
        </li>
        <li>
          Dbanie o wprowadzenie do diety dziecka produktów wpływających na
          wzmocnienie kości i zębów. Ważne jest dawanie dzieciom do chrupania
          także twardych pokarmów (sucharki, surowe warzywa), które stymulują
          prawidłowy rozwój kości.
        </li>
        <li>
          Suplementacja witaminy D, która hamuje rozwój próchnicy w zębach
          mlecznych. Jak dobrać prawidłową dawkę witaminy D dla dziecka? W tym
          celu warto wykonać badanie - dostępne jest na miejscu w naszym
          gabinecie!
        </li>
        <li>
          Regularne wizyty u stomatologa, diagnostyka i zabiegi profilaktyczne
          to klucz do zachowania zdrowych zębów.
        </li>
      </ul>
      <ArrowLink
        type="standard"
        link="kontakt"
        text="Umów wizytę"
      />
    </section>
    <Movie src="https://www.youtube.com/embed/Cjk1FhDuBp8" />
    <div className="container">
    <Link to="/profilaktyka">WRÓĆ DO STRONY PROFILAKTYKA</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Jak dbać o zęby dziecka" />

export default Higiena
