import React from "react"
import { useState } from "react"

import Icon from "../../svg/icon-404.svg"

import { popUpBg, popUpContainer, popUpIcon, popUpBtn} from "./popUp.module.css"

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true)

  function setShow() {
    if (window) {
      sessionStorage.setItem("popup", false)
    }
    setShowPopUp(false)
  }

  if (window) {
    return (
      <div
        className={popUpBg}
        style={{
          display: `${
            sessionStorage.getItem("popup") || showPopUp.toString() === "false"
              ? "none"
              : "block"
          }`,
        }}
      >
        <div className={popUpContainer}>
          <Icon className={popUpIcon}/>
          <h4>This website is under construction </h4>
          <p>Images and movies displayed on
          the Wróżka Zębuszka website are taken from stomatologiadziecieca.com</p>
          
          <button onClick={() => setShow()} className={`btn btnPrimary ${popUpBtn}`}>
            Zamknij
          </button>
        </div>
      </div>
    )
  }
}

export default PopUp
