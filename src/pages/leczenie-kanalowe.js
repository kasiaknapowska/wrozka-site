import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import ArrowLink from "../components/arrowLink/ArrowLink"

const LeczenieKanalowe = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Leczenie kanałowe",
        description:
          "W przypadku urazu zęba lub rozległej i głębokiej próchnicy stomatolog może zadecydować o konieczności przeprowadzenia leczenia kanałowego. W naszym gabinecie leczymy kanałowo zarówno zęby mleczne jak i stałe u dzieci. ",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Endodoncja zębów mlecznych</h2>
      <h3>
        Istnieje szereg wskazań i przeciwwskazań do leczenia kanałowego zębów
        mlecznych u dzieci.{" "}
      </h3>
      <p>
        Leczeniu kanałowemu poddawane są zęby z martwą lub zgorzelinową miazgą
        lub zęby po urazach, pod warunkiem, że nie rozpoczął się jeszcze proces
        resorpcji korzenia. Często leczenie kanałowe jest wskazane w celu
        utrzymania zęba mlecznego do czasu jego fizjologicznej wymiany, aby
        zapobiec rozwojowi wad ortodontycznych. Aby przeprowadzić leczenie
        korona zęba musi nadawać się do rekonstrukcji. Zwykle leczenie kanałowe
        mleczaków przeprowadza się między 3 a 9-10 rokiem życia dziecka,
        każdorazowo diagnozując stopień resorpcji korzenia.
      </p>
      <p>
        Przeciwwskazaniem do leczenia kanałowego mleczaków jest mocne
        zniszczenie korony zęba, uniemożliwiające odbudowę lub złamanie
        poddziąsłowe zęba. Także w zębach z zaawansowaną resorpcją fizjologiczną
        lub patologiczną oraz zmianami okołowierzchołkowymi nie wykonuje się
        leczenia kanałowego.
      </p>
      <p>
        Każdorazowo decyzja o leczeniu kanałowym podejmowana jest wspólnie z
        lekarzem po przeprowadzeniu wnikliwej diagnostyki i rozważeniu wszelkich
        alternatywnych możliwości leczenia.
      </p>
    </section>
    <section className="container">
      <h2>Zęby stałe</h2>
      <h3>
        Leczenie endodontyczne zębów stałych wykonywane jest najczęściej z
        powodu głębokiej, sięgającej miazgi próchnicy.
      </h3>
      <p>
        Także zęby po urazach często kwalifikowane są do leczenia kanałowego.
        Mechanizm urazów jest na tyle złożony, że konieczna jest dokładna
        diagnostyka RTG, aby wykluczyć złamania korzenia zęba, będące
        przeciwwskazaniem do leczenia.
      </p>
      <p>
        U dzieci wierzchołki zębów stałych czasem nie są jeszcze uformowane,
        przez co niemożliwe jest leczenie tradycyjnymi metodami. W naszym
        gabinecie pod mikroskopem wykonujemy specjalistyczny zabieg, który
        odtwarza wierzchołki korzeni i pozwala utrzymać zęby do czasu
        osiągnięcia dorosłości, kiedy można zastąpić go implantem lub odbudową
        protetyczną.
      </p>
    </section>
    <section className="container">
      <h2>Dlaczego warto wykonać leczenie u nas?</h2>
      <h3>
        Stosujemy szereg nowoczesnych metod, które zapewniają wysoką skuteczność leczenia.
      </h3>
      <ul>
        <li>kontrola RTG na każdym etapie leczenia</li>
        <li>mikroskop pozwalający dokładnie oczyścić wszystkie korzenie zęba</li>
        <li>gazowy ozon skutecznie dezynfekujący wszystkie szczeliny systemu kanałowego</li>
        <li>nanocząstki złota i srebra chroniące ząb przed infekcją wtórną</li>
      </ul>
      <ArrowLink
        type="standard"
        link="kontakt"
        text="Umów leczenie"
      />
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Leczenie kanałowe u dzieci" description={"Przed leczeniem kanałowym (przewodowym) zębów mlecznych przeprowadzamy dogłębną diagnostykę RTG, kwalifikującą do zabiegu."}/>

export default LeczenieKanalowe
