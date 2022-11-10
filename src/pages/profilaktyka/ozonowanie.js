import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const Ozonowanie = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Walka z próchnicą bez borowania",
        description:
          "Bakterie zasiedlające bruzdy zębowe przyczyniają się do rozwoju próchnicy. W przypadku zębów mlecznych proces ten jest bardzo dynamiczny. Wczesne wykrycie zmian w zębach, zanim pojawi się ubytek, umożliwia bezbolesne leczenie gazowym ozonem.",
        text: "Umów dziecko na zabieg ozonowania",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h3>
        Ozonowanie to skuteczny i bezbolesny zabieg profilaktyczny, który doskonale sprawdza się
        zarówno w przypadku zębów mlecznych jak i stałych u dzieci. Ozonowanie
        jest bezbolesne, trwa dosłownie chwilę i pozwala pozbyć się 99,9%
        bakterii próchnicowych.
      </h3>
      <p>
        Ozon to gaz, który ma silne działanie bakteriobójcze. Wystarczy kilka
        sekund kontaktu z zębami, by usunąć wszystkie bakterie obecne w
        szczelinach i bruzdach zębowych.
      </p>
      <p>
        Ozonowanie pojedynczego zęba trwa zaledwie 20 sekund. Na ząb przykładamy
        specjalny kapturek uszczelniający, który połączony jest z urządzeniem
        dostarczającym ozon. Dzięki gazowej postaci ozon wnika głęboko w
        szczeliny zęba skutecznie go dezynfekując. Bez borowania i bez
        konieczności znieczulania Pacjenta! Po ozonowaniu stosowane są preparaty
        remineralizujące szkliwo.
      </p>
      <p>
        Kwalifikacja do zabiegu odbywa się na podstawie badania zębów laserem
        diagnostycznym. Laser wykrywa zmiany w zębach na wczesnym etapie
        rozwoju, kiedy to terapia ozonem jest najbardziej efektywna.
      </p>
      <p>
        Ozonowanie w połączeniu z prawidłową higieną, innymi zabiegami
        profilaktycznymi i regularnymi kontrolami u dentysty pozwala zachować
        zdrowe zęby mleczne i stałe, z korzyścią dla zdrowia dziecka.
      </p>
    </section>
    <div className="container">
    <Link to="/profilaktyka">WRÓĆ DO STRONY PROFILAKTYKA</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Ozonowanie zębów" />

export default Ozonowanie
