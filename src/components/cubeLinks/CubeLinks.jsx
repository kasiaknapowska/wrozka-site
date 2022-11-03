import * as React from "react"
import PropTypes from "prop-types"

// import { useRef, useCallback } from "react"
// import { useInView } from "react-intersection-observer"

import {cubeLinksContainer, cubeIcon} from "./cubeLinks.module.css"
import ArrowLink from "../arrowLink/ArrowLink"
import HigienaIcon from "../../svg/higiena-icon.svg"
import FluoryzacjaIcon from "../../svg/fluoryzacja-icon.svg"
import OzonowanieIcon from "../../svg/ozonowanie-icon.svg"
import LakowanieIcon from "../../svg/lakowanie-icon.svg"
import DzieciIcon from "../../svg/dzieci-icon.svg"
import MlodziezIcon from "../../svg/mlodziez-icon.svg"
import PrzezroczysteNakladkiIcon from "../../svg/przezroczyste-nakladki-icon-1.svg"
import InformacjeDlaPacjentaIcon from "../../svg/informacje-dla-pacjenta-icon.svg"

const CubeLinks = ({cubeElements}) => {
// console.log(cubeElements)

// const ref = useRef()
// const { ref: inViewRef, inView } = useInView({
//   /* Optional options */
//   threshold: 0.05,
// })



  return (
 <section className={cubeLinksContainer}>

    {cubeElements.map(element => (
       <div key={element.name}>
        {element.name === "Higiena" && <HigienaIcon className={cubeIcon}/>}
        {element.name === "Fluoryzacja" && <FluoryzacjaIcon className={cubeIcon}/>}
        {element.name === "Ozonowanie" && <OzonowanieIcon className={cubeIcon}/>}
        {element.name === "Lakowanie" && <LakowanieIcon className={cubeIcon}/>}
        {element.name === "Leczenie dzieci" && <DzieciIcon className={cubeIcon}/>}
        {element.name === "Leczenie młodzieży" && <MlodziezIcon className={cubeIcon}/>}
        {element.name === "Przezroczyste nakładki" && <PrzezroczysteNakladkiIcon className={cubeIcon}/>}
        {element.name === "Informacje dla pacjenta" && <InformacjeDlaPacjentaIcon className={cubeIcon}/>}
        <h3>{element.name}</h3><ArrowLink link={element.link} type="color"/></div>
       ))}
 </section>
  )
}

CubeLinks.propTypes = {
    cubeElements: PropTypes.array,
}

// CubeLinks.defaultProps = {
//     cubeElements: ``,
// }

export default CubeLinks
