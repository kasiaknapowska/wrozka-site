import { Link } from "gatsby"
import React from "react"
import { useState } from "react"

import { cookiesContainer, modalBtn } from "./cookiesModal.module.css"

const isBrowser = typeof window !== "undefined"


const CookiesModal = () => {
  const [showModal, setShowModal] = useState(true)

  function setModal() {
    if (isBrowser) {
      window.sessionStorage.setItem("cookies", false)
    }
    setShowModal(false)
  }

  if (isBrowser) {
    return (
      <div
        className={cookiesContainer}
        style={{
          display: `${
            window.sessionStorage.getItem("cookies") || showModal.toString() === "false"
              ? "none"
              : "flex"
          }`,
        }}
      >
        <p>
          Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
          poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
          użycie.
        </p>
  
          <button onClick={() => setModal()} className={modalBtn}>
            Zgoda
          </button>
          <Link className={modalBtn} to="/polityka-prywatnosci">
            Więcej
          </Link>
        </div>
     
    )
  }
}

export default CookiesModal
