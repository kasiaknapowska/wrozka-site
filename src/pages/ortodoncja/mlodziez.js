import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero/Hero"

const Mlodziez = ({ location }) => (
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Leczenie ortodontyczne młodzieży",
        description:
          "Czy zęby Twojego dziecka wyrzynają się prawidłowo? Czy kości twarzoczaszki kształtują się harmonijnie i zapewnią równe ustawienie zębów stałych? ",
        text: "Umów wizytę u ortodonty",
      }}
      location={location.pathname}
    />
    <section className="container">
      <h2>Dlaczego warto kontrolować zgryz nastolatka?</h2>
      <h3>
        Wczesna kontrola zgryzu pozwala tak kształtować mięśnie i kości
        twarzoczaszki, aby zęby miały wystarczającą ilość miejsca a z zgryz
        prawidłowo się rozwijał. Dlatego już z kilkuletnim dzieckiem warto
        odwiedzić ortodontę. U starszych dzieci, powyżej 7 roku życia, kontrola
        ortodontyczna jest koniecznością!
      </h3>
      <p>
        Dzięki wczesnej kontroli ortodontycznej w przyszłości można uniknąć
        poważniejszych wad zgryzu, które wymagać będą skomplikowanego,
        kosztownego i długotrwałego leczenia. Nastolatki najczęściej chętnie
        poddają się leczeniu wad zgryzu, co jest wynikiem wyższej niż u małych
        dzieci świadomości zdrowotnej, a także przywiązywania znacznej wagi do
        swojego wyglądu. Rozpoczęcie leczenia u młodych, wciąż rosnących
        Pacjentów daje bardziej przewidywalne efekty i pozwala skrócić czas
        leczenia w porównaniu z leczeniem osób dorosłych. Uzyskujemy nie tylko
        prawidłowo ustawione zęby, ale także wymuszamy harmonijny wzrost
        twarzoczaszki i poprawiamy rysy twarzy.
      </p>
      <p>
        Podczas leczenia ortodontycznego monitorujemy poziom witaminy D w
        organizmie. Witamina D ułatwia przebudowę i wzrost kości, co ma
        szczególne znaczenie dla uzyskania prawidłowego zgryzu u dziecka.
      </p>
      <h3>Korzyści z leczenia ortodontycznego dzieci i młodzieży</h3>
      <ul className="twoColumns">
        <li>właściwy wzrost szczęki i żuchwy</li>
        <li>korelowanie szerokości łuków zębowych</li>
        <li>odzyskanie miejsca dla zębów stałych</li>
        <li>poprawa wyglądu i zachowanie symetrii twarzy</li>
        <li>zmniejszenie prawdopodobieństwa urazu górnych, wychylonych siekaczy; obniżenie ryzyka urazu górnych wychylonych siekaczy</li>
        <li>uproszczenie i/lub skrócenie późniejszego leczenia aparatami stałymi</li>
        
      </ul>
    </section>
    <section className="container">
      <h2>Jak wygląda leczenie ortodontyczne dzieci w wieku szkolnym?</h2>
      <h3>
        W zależności od wieku Pacjenta oraz stopnia rozwoju lekarz wprowadza
        odpowiednią fazę leczenia oddziałując na kości (dzieci z uzębieniem
        mieszanym w wieku powyżej 7 lat) lub zęby (powyżej 15 roku życia, gdy
        wszystkie zęby stałe są obecne).
      </h3>
      <p>
        Stosowane są aparaty stałe lub ruchome. Wybór odpowiedniego aparatu
        następuje po pełnej diagnostyce i analizie stanu zębów, mięśni i kości.
        Indywidualny dobór aparatu jest kluczowy dla uzyskania prawidłowych
        efektów leczenia.
      </p>
      <h3>Dyskretne aparaty dla nastolatków</h3>
      <p>
        Dla wymagających młodych Pacjentów mamy do dyspozycji wiele komfortowych
        i dyskretnych modeli, które z pewnością przypadną im do gustu. Oprócz
        aparatów stałych (estetycznych aparatów samoligaturujących) młodzieży
        możemy zaproponować nowoczesne aparaty w postaci wyjmowanych
        przezroczystych nakładek na zęby. Po wykonaniu komputerowego
        skanu 3D uzębienia, Pacjent otrzymuje komplet indywidualnie
        wyprodukowanych nakładek. Każdą z nich może w dowolnej chwili ściągnąć
        (np. na czas wielkiego wyjścia ze znajomymi czy podczas obiadu) i z
        powrotem samodzielnie założyć. Nakładki są niemal niewidoczne i tak
        komfortowe, że… można o nich zapomnieć!
      </p>
    </section>
    <div className="container">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Leczenie ortodontyczne młodzieży" />

export default Mlodziez
