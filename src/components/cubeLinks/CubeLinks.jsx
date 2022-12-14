import * as React from "react"
import PropTypes from "prop-types"

import { cubeLinksContainer, cubeIcon } from "./cubeLinks.module.css"
import ArrowLink from "../arrowLink/ArrowLink"
import HigienaIcon from "../../svg/higiena-icon.svg"
import FluoryzacjaIcon from "../../svg/fluoryzacja-icon.svg"
import OzonowanieIcon from "../../svg/ozonowanie-icon.svg"
import LakowanieIcon from "../../svg/lakowanie-icon.svg"
import DzieciIcon from "../../svg/dzieci-icon.svg"
import MlodziezIcon from "../../svg/mlodziez-icon.svg"
import PrzezroczysteNakladkiIcon from "../../svg/przezroczyste-nakladki-icon.svg"
import InformacjeDlaPacjentaIcon from "../../svg/informacje-dla-pacjenta-icon.svg"
import EkstrakcjaZebowIcon from "../../svg/ekstrakcja-zebow-icon.svg"
import LeczenieProchnicyIcon from "../../svg/leczenie-prochnicy-icon.svg"
import PodciecieWedzidelkaIcon from "../../svg/podciecie-wedzidelka-icon.svg"
import LeczenieKanaloweIcon from "../../svg/leczenie-kanalowe-icon.svg"
import PierwszaWizytaIcon from "../../svg/pierwsza-wizyta-icon.svg"
import LeczenieWNarkozieIcon from "../../svg/leczenie-w-narkozie-icon.svg"

const CubeLinks = ({ cubeElements }) => {

  return (
    <section className={cubeLinksContainer}>
      {cubeElements.map(element => (
        <div key={element.name}>
          {element.name === "Higiena" && <HigienaIcon className={cubeIcon} />}
          {element.name === "Fluoryzacja" && (
            <FluoryzacjaIcon className={cubeIcon} />
          )}
          {element.name === "Ozonowanie" && (
            <OzonowanieIcon className={cubeIcon} />
          )}
          {element.name === "Lakowanie" && (
            <LakowanieIcon className={cubeIcon} />
          )}
          {element.name === "Leczenie dzieci" && (
            <DzieciIcon className={cubeIcon} />
          )}
          {element.name === "Leczenie młodzieży" && (
            <MlodziezIcon className={cubeIcon} />
          )}
          {element.name === "Przezroczyste nakładki" && (
            <PrzezroczysteNakladkiIcon className={cubeIcon} />
          )}
          {element.name === "Informacje dla pacjenta" && (
            <InformacjeDlaPacjentaIcon className={cubeIcon} />
          )}
          {element.name === "Ekstrakcja zębów" && (
            <EkstrakcjaZebowIcon className={cubeIcon} />
          )}
          {element.name === "Leczenie próchnicy" && (
            <LeczenieProchnicyIcon className={cubeIcon} />
          )}
          {element.name === "Podcięcie wędzidełka" && (
            <PodciecieWedzidelkaIcon className={cubeIcon} />
          )}
          {element.name === "Leczenie kanałowe" && (
            <LeczenieKanaloweIcon className={cubeIcon} />
          )}
          {element.name === "Pierwsza wizyta" && (
            <PierwszaWizytaIcon className={cubeIcon} />
          )}
          {element.name === "Leczenie w narkozie" && (
            <LeczenieWNarkozieIcon className={cubeIcon} />
          )}
          {element.name === "Profilaktyka" && (
            <OzonowanieIcon className={cubeIcon} />
          )}
          {element.name === "Ortodoncja" && (
            <InformacjeDlaPacjentaIcon className={cubeIcon} />
          )}
          <h3>{element.name}</h3>
          <ArrowLink link={element.link} type="color" />
        </div>
      ))}
    </section>
  )
}

CubeLinks.propTypes = {
  cubeElements: PropTypes.array,
}

CubeLinks.defaultProps = {
  cubeElements: [
    { name: "Pierwsza wizyta", link: "pierwsza-wizyta" },
    { name: "Leczenie w narkozie", link: "narkoza" },
    { name: "Ortodoncja", link: "ortodoncja" },
    { name: "Profilaktyka", link: "profilaktyka" },
  ],
}

export default CubeLinks
