import { Link } from "gatsby"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"

import {cookiesContainer, modalBtn, closeModal, showModal} from "./cookiesModal.module.css"

const CookiesModal = () => {
const [showModal, setShowModal] = useState(true);

function setModal() {
    sessionStorage.setItem("cookies", false);
    setShowModal(false);
}


  return (
    <div className={cookiesContainer}  style={{display: `${sessionStorage.getItem("cookies") || showModal.toString() === "false" ? "none" :  "flex"}`}}>
      <p>
        Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
        użycie.
      </p>
      <button onClick={() => setModal()} className={modalBtn}>Zgoda</button>
      <Link className={modalBtn} to="/polityka-prywatnosci">Więcej</Link>
    </div>
  )
}

export default CookiesModal
