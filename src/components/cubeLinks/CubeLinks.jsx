import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {cubeLinksContainer, cubeIcon} from "./cubeLinks.module.css"
import ArrowLink from "../arrowLink/ArrowLink"
import HigienaIcon from "../../svg/higiena-icon.svg"
import FluoryzacjaIcon from "../../svg/fluoryzacja-icon.svg"
import OzonowanieIcon from "../../svg/ozonowanie-icon.svg"
import LakowanieIcon from "../../svg/lakowanie-icon.svg"

const CubeLinks = ({cubeElements}) => {
console.log(cubeElements)
  return (
 <div className={cubeLinksContainer}>

    {cubeElements.map(element => (
       <div key={element.name}>
        {element.name === "higiena" && <HigienaIcon className={cubeIcon}/>}
        {element.name === "fluoryzacja" && <FluoryzacjaIcon className={cubeIcon}/>}
        {element.name === "ozonowanie" && <OzonowanieIcon className={cubeIcon}/>}
        {element.name === "lakowanie" && <LakowanieIcon className={cubeIcon}/>}
        <h3>{element.name}</h3><ArrowLink link={element.link} type="color"/></div>
       ))}
 </div>
  )
}

CubeLinks.propTypes = {
    cubeElements: PropTypes.array,
}

// CubeLinks.defaultProps = {
//     cubeElements: ``,
// }

export default CubeLinks
