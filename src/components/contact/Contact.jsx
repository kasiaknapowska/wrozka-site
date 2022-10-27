import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import IconMailColor from "../../svg/icon-mail-color.svg"
import IconPhoneColor from "../../svg/icon-phone-color.svg"
import IconHomeColor from "../../svg/icon-home-color.svg"
import IconMailWhite from "../../svg/icon-mail-white.svg"
import IconPhoneWhite from "../../svg/icon-phone-white.svg"
import IconHomeWhite from "../../svg/icon-home-white.svg"

import { contactData } from "../../data/contactData"

import { contactContainer, contactPageContainer, contact } from "./contact.module.css"

const Contact = ({type}) => {
  return (
    <div className={type === "contactPage" ? contactPageContainer : contactContainer}>
      <h2>Skontaktuj się z nami</h2>
      <h3>
        Masz pytania lub wątpliwości? Zadzwoń do nas lub wypełnij formularz.
        Skontaktujemy się najszybciej jak to będzie możliwe.
      </h3>
      <h3>Wróżka Zębuszka Klinika Stomatologii Dziecięcej</h3>
      <div className={contact}>
        {type === "contactPage" ? <IconHomeWhite/> : <IconHomeColor />}
        <p>{contactData.address}</p>
      </div>
      <div className={contact}>
        {type === "contactPage" ? <IconMailWhite/> : <IconMailColor />}
        <p>{contactData.email}</p>
      </div>
      <div className={contact}>
      {type === "contactPage" ? <IconPhoneWhite/> : <IconPhoneColor />}
        <p>{contactData.phone}</p>
      </div>
    </div>
  )
}

Contact.propTypes = {
  contactData: PropTypes.object,
}

Contact.defaultProps = {
  contactData: {
    address: "Katowice, ul. Stara Kłodnicka xx",
    phone: "32 606 04 06",
    email: "recepcja@wrozkazebuszka.pl",
  },
}

export default Contact
