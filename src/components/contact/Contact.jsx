import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import IconMailColor from "../../svg/icon-mail-color.svg"
import IconPhoneColor from "../../svg/icon-phone-color.svg"
import IconHomeColor from "../../svg/icon-home-color.svg"

import { contactContainer, contact } from "./contact.module.css"

const Contact = ({ contactData }) => {
  return (
    <div className={contactContainer}>
      <h2>Skontaktuj się z nami</h2>
      <h3>
        Masz pytania lub wątpliwości? Zadzwoń do nas lub wypełnij formularz.
        Skontaktujemy się najszybciej jak to będzie możliwe.
      </h3>
      <h3>Wróżka Zębuszka Klinika Stomatologii Dziecięcej</h3>
      <div className={contact}>
        <IconHomeColor />
        <p>{contactData.address}</p>
      </div>
      <div className={contact}>
        <IconMailColor />
        <p>{contactData.email}</p>
      </div>
      <div className={contact}>
        <IconPhoneColor />
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
