import { Link } from "gatsby"
import React from "react"
import { useState } from "react"

import { popUpBg ,popUpContainer, popUpBtn } from "./popUp.module.css"

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true)

  function setShow() {
    sessionStorage.setItem("popup", false)
    setShowPopUp(false)
  }

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
        Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
        użycie.
      </div>

        <button onClick={() => setShow()} className={popUpBtn}>
          Zamknij
        </button>
      </div>
   
  )
}

export default PopUp
