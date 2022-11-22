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
        Ozonowanie to skuteczny i bezbolesny zabieg profilaktyczny, który
        doskonale sprawdza się zarówno w przypadku zębów mlecznych jak i stałych
        u dzieci. Ozonowanie jest bezbolesne, trwa dosłownie chwilę i pozwala
        pozbyć się 99,9% bakterii próchnicowych.
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
    <section className="container">
      <h2>Ozon w chirurgii i endodoncji</h2>
      <h3>
        Skuteczność ozonu w walce z bakteriami powoduje, że gaz ten jest z
        powodzeniem wykorzystywany również podczas innych zabiegów
        stomatologicznych.
      </h3>
      <p>
        Ozon stosujemu po{" "}
        <Link className="textLink" to="/ekstrakcje-zebow">
          ekstrakcjach
        </Link>{" "}
        (usuwaniu) zębów w celu dezynfekcji zębodołu i przyspieszenia gojenia
        tkanek. W{" "}
        <Link className="textLink" to="/leczenie-kanalowe">
          endodoncji
        </Link>{" "}
        gazowa postać ozonu doskonale sprawdza się w oczyszczaniu systemu
        kanałow korzeniowych, które ze względu na skomplikowaną budowę i liczne
        szczeliny jest trudna do oczyszczenia tradycyjnymi metodami.
      </p>
    </section>
    <div className="container">
      <Link to="/profilaktyka">WRÓĆ DO STRONY PROFILAKTYKA</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Ozonowanie zębów" description={"Ozonowanie jest szybkie i bezbolesne, skutecznie chroni przed rozwojem próchnicy i często pozwala uniknąć nieprzyjemnego borowania. Zapraszamy!"}/>

export default Ozonowanie
